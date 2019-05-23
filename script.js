const signIn = document.querySelector('.sign-in-htm');
const signUp = document.querySelector('.sign-up-htm');

signIn.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = new FormData();

    const email = document.querySelector(".sign-in-htm #email").value,
        password = document.querySelector(".sign-in-htm #pass").value,
        isPermanent = document.querySelector('.sign-in-htm #check').value;

    //наполняем объект
    form.append("email", email);
    form.append("password", password);
    form.append("password", password);
    // const formData = {
    // 'email': document.querySelector('.sign-in-htm #email').value,
    //   'password': document.querySelector('.sign-in-htm #pass').value,
    //   'isPermanent': document.querySelector('.sign-in-htm #check').value
    // };
    const output = document.querySelector('.sign-in-htm .error-message');
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
        var data = JSON.parse(xhr.response);
        if (data.error) {
            output.value = data.message;
        } else {
            let string = 'Пользователь ' + data.name + ' успешно авторизован';
            output.value = string;
        }
    });
    xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));
});

signUp.addEventListener('submit', function (event) {
    event.preventDefault();
    const output = document.querySelector('.sign-up-htm .error-message');

    const em = document.querySelector('.sign-up-htm [name="email"]').value,
        pass = document.querySelector('.sign-up-htm [name="password"]').value,
        nam = document.querySelector('.sign-up-htm [name="name"]').value,
        passCopy = document.querySelector('.sign-up-htm [name="passwordcopy"]').value;

    const formData = new FormData();


    //наполняем объект
    formData.append('email', em);
    formData.append('password', pass);
    formData.append('passwordCopy', passCopy);
    formData.append('name', nam);

    // const formData = {
    //   'email': document.querySelector('.sign-up-htm [name="email"]').value,
    //   'password':  document.querySelector('.sign-up-htm [name="password"]').value,
    //   'passwordcopy':  document.querySelector('.sign-up-htm [name="passwordcopy"]').value,
    //   'name': document.querySelector('.sign-up-htm [name="name"]').value
    // };    
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', (e) => {
        var data = JSON.parse(xhr.response);
        if (data.error) {
            output.value = data.message;
        } else {
            let string = 'Пользователь ' + data.name + ' успешно зарегистрирован';
            output.value = string;
        }
    });
    xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));

});