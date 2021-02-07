import './styles.css';
import rederPage from './js/fn-render.js';
import refs from './js/refs.js';

const debounce = require('lodash.debounce');

function handleSearch(event) {
  refs.input.classList.add('focus');
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => rederPage(data))
      .catch(error => {
        alert('Такої країни не існує');
        console.error('Такої країни не існує');
      });
  }
  rederPage(searchValue);
}

refs.input.addEventListener('input', debounce(handleSearch, 500));
