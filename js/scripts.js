const form = document.querySelector('form');
const footer = document.querySelector('footer');

const handleFormSubmission = (e) => {
    e.preventDefault();
    data = new FormData(form);
    footer.classList.remove('hidden');

    const text = filterPassage()
}

form.addEventListener('submit', handleFormSubmission);
form.addEventListener('reset', () => {
    form.reset();
    passage.classList.add('hidden');
    analysis.classList.add('hidden');
})