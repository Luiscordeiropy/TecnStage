document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/auth/login/user', {
            email: email,
            password: password
        });

        console.log('Resposta do servidor:', response);

        if (response.data.user) {
            localStorage.clear()
            const user = response.data.user;
            const token = response.data.token;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            
            window.location.href = 'http://127.0.0.1:5500/frontend/pages/home.html';  
        }

        if (response.status === 201) {
            alert('Login bem-sucedido');
            window.location.href = 'http://127.0.0.1:5500/frontend/pages/home.html';
        }
    } catch (error) {
        console.error('Erro no login:', error);
        alert('Login falhou. Por favor, verifique suas credenciais.');
    }
});
