import { formatSearch, errorPage } from './functions.js';
import { showResult } from './showResult.js';
import { dataStateCity } from './dataStateCity.js';

const input = document.querySelector('input#searchInput');
const area = document.querySelector('#result');

input.addEventListener('change', (evt) => {
  let city = formatSearch(evt.target.value);

  let filtrado = dataStateCity.cities.filter((e) => {
    if (e.search == city) return e;
    return '';
  });

  if (filtrado.length === 0) {
    errorPage();
  } else {
    area.innerHTML = '';

    const loadDiv = document.createElement('div');
    loadDiv.classList.add('loadDiv');
    area.appendChild(loadDiv);

    const loading = document.createElement('img');
    loading.src = 'assets/img/loading.gif';
    loading.classList.add('loading');
    loadDiv.appendChild(loading);

    let uf = dataStateCity.acronym[filtrado[0].state_id].toLowerCase();
    let url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${uf}&city=${city}`;
    showResult(url);
  }
});
