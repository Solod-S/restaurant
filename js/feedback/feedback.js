import refs from '../refs/index.js';
import operation from './operation/index.js';

const { feedBackForm } = refs;
const { onSubmit, onFormInput, populateMulti } = operation;

populateMulti();

feedBackForm.form.addEventListener('submit', onSubmit.bind(feedBackForm));
feedBackForm.form.addEventListener('input', _.throttle(onFormInput.bind(feedBackForm), 500));
