const toggleTheme = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleTheme.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
})