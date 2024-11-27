document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.name) {
        const userNameElement = document.getElementById('perfil');
        userNameElement.textContent =  user.name;
    } else {
        console.log('Usuário não encontrado no localStorage');
    }
});
