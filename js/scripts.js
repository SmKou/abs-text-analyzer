function handleFormSubmission(e) {
    e.preventDefault();
    const data = new FormData(form);
    const passage = filterPassage(data.get('filter'), data.get('text-passage'));

}

function handleFormReset() {

}

const form = document.querySelector('form');

form.addEventListener('submit', handleFormSubmission)
form.addEventListener('reset', handleFormReset);

const footer = document.querySelector('footer')