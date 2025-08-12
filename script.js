const toggleBtn = document.getElementById('toggleFormBtn');
const aboutMe = document.getElementById('aboutMe');
const aboutMeContainer = document.getElementById('aboutMeContainer');
const linksPage = document.getElementById('linksPage');
const backToAuthBtn = document.getElementById('backToAuthBtn');

// Toggle between About Me and My Accounts
toggleBtn.addEventListener('click', () => {
    aboutMeContainer.classList.add('hidden');
    setTimeout(() => {
        aboutMeContainer.style.display = 'none';
        linksPage.style.display = 'block';
        setTimeout(() => linksPage.classList.remove('hidden'), 50);
    }, 500);
});

// Function to go back to the About Me page
backToAuthBtn.addEventListener('click', () => {
    linksPage.classList.add('hidden');
    setTimeout(() => {
        linksPage.style.display = 'none';
        aboutMeContainer.style.display = 'block';
        setTimeout(() => aboutMeContainer.classList.remove('hidden'), 50);
    }, 500);
});
