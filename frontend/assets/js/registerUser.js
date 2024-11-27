document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de forma tradicional

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    // Verificação básica de senha
    if (password !== passwordConfirm) {
        alert('As senhas não coincidem');
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/user/register', {
            name,
            email,
            password,
        });

        if (response.status === 201) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'http://127.0.0.1:5500/frontend/pages/vagas.html'; // Redireciona para a página home
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar. Tente novamente.');
    }
});
