const toggleBtn = document.getElementById('toggleFormBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authContainer = document.getElementById('authContainer');
const constructionPage = document.getElementById('constructionPage');
const backToAuthBtn = document.getElementById('backToAuthBtn');

// Umschalten zwischen Login und Registrierung
toggleBtn.addEventListener('click', () => {
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        toggleBtn.textContent = "Zum Login wechseln";
    } else {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        toggleBtn.textContent = "Zur Registrierung wechseln";
    }
});

// Funktion, um zur "In Bearbeitung"-Seite zu wechseln
function showConstructionPage() {
    authContainer.classList.add('hidden');
    setTimeout(() => {
        authContainer.style.display = 'none';
        constructionPage.style.display = 'block';
        setTimeout(() => constructionPage.classList.remove('hidden'), 50);
    }, 500);
}

// Funktion, um zurück zur Anmeldung zu wechseln
function showAuthPage() {
    constructionPage.classList.add('hidden');
    setTimeout(() => {
        constructionPage.style.display = 'none';
        authContainer.style.display = 'block';
        setTimeout(() => authContainer.classList.remove('hidden'), 50);
    }, 500);
}

// Aktion bei Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Login-Daten gesendet!");
    showConstructionPage();
});

// Aktion bei Registrierung
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Registrierungs-Daten gesendet!");
    showConstructionPage();
});

// Aktion bei Klick auf den "Zurück"-Button
backToAuthBtn.addEventListener('click', () => {
    showAuthPage();
});