import './styles.css';
import countriesList from './handlebars/countries-item.hbs';
import countrieInfo from './handlebars/countrie-info.hbs';

const debounce = require('lodash.debounce');
const refs = {
  input: document.querySelector('.js-search-area'),
  info: document.querySelector('.countrie-info'),
};

function rederPage(value) {
  if (value.length > 2 && value.length < 10) {
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

function handleSearch(event) {
  refs.input.classList.add('focus');
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
      .then(response => response.json())
      .then(data => rederPage(data))
      .catch(error => console.error('помилка 404'));
  }
  rederPage(searchValue);
}

refs.input.addEventListener('input', debounce(handleSearch, 500));
