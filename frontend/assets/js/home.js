document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.name) {
        const userNameElement = document.getElementById('perfil');
        userNameElement.textContent =  user.name;
    } else {
        console.log('Usuário não encontrado no localStorage');
    }

    const intern = JSON.parse(localStorage.getItem('intern'));

    if (intern && intern.name) {
        const internNameElement = document.getElementById('perfil');
        internNameElement.textContent =  intern.name;
    } else {
        console.log('Intern não encontrado no localStorage');
    }


});
