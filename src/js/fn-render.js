import refs from './refs.js';
import countriesList from '../handlebars/countries-item.hbs';
import countrieInfo from '../handlebars/countrie-info.hbs';

function rederPage(value) {
  if (value.length >= 2 && value.length < 10) {
    refs.info.innerHTML = countriesList(value);
  } else if (value.length === 1) {
    refs.info.innerHTML = countrieInfo(value);
  } else if (value.length > 9) {
    alert('Error');
  } else {
    refs.input.classList.remove('focus');
    refs.info.innerHTML = '';
  }
}
export default rederPage;
