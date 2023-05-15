const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

function toggleTheme() {
  body.classList.toggle('dark');
}

themeToggle.addEventListener('click', toggleTheme);

// Salvar a preferência do usuário usando LocalStorage
if (localStorage.getItem('theme') === 'dark') {
  toggleTheme();
}

// Impedir que haja um flash de cor padrão no carregamento da página
body.style.visibility = 'visible';
