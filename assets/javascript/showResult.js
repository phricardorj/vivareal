import { fetchData } from './api.js';
import { formatMoney, amenitiesTranslator, errorPage } from './functions.js';

export const showResult = async (url) => {
  const data = await fetchData(url).catch(() => {
    return undefined;
  });

  const area = document.querySelector('#result');

  if (data) {
    area.innerHTML = '';

    const info = document.createElement('h1');
    const infoSpan = document.createElement('span');
    info.innerText = data['totalCount'];
    infoSpan.innerText =
      ' Imóveis à venda em ' + data['city'] + ' - ' + data['stateAcronym'];
    info.classList.add('info');
    info.appendChild(infoSpan);
    area.appendChild(info);

    const searchTag = document.createElement('button');
    searchTag.innerText = data.city + ' - ' + data.stateAcronym;
    searchTag.classList.add('searchTag');
    area.appendChild(searchTag);

    const searchTagExit = document.createElement('span');
    searchTagExit.innerText = 'X';
    searchTag.appendChild(searchTagExit);

    data['listing'].forEach((result) => {
      const article = document.createElement('article');
      area.appendChild(article);

      const img = document.createElement('img');
      img.src = result.medias[0].url;
      article.appendChild(img);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      article.appendChild(cardBody);

      const header = document.createElement('div');
      header.classList.add('header');
      cardBody.appendChild(header);

      const address = document.createElement('span');
      address.innerText = result['fullAddress'];
      header.appendChild(address);

      const title = document.createElement('h1');
      title.innerText = result.link.name;
      header.appendChild(title);

      const details = document.createElement('p');
      details.innerText = result['details'];
      header.appendChild(details);

      const tags = document.createElement('div');
      const markup = result['listing'].amenities
        .map((item) => {
          return `<span>${amenitiesTranslator(item)}</span>`;
        })
        .join(' ');
      tags.innerHTML = markup;
      tags.classList.add('tags');
      cardBody.appendChild(tags);

      const precos = document.createElement('div');
      precos.classList.add('precos');
      cardBody.appendChild(precos);

      const precoImovel = document.createElement('h2');
      precoImovel.innerText = formatMoney(
        result.listing['pricingInfos'][0].price
      );
      precos.appendChild(precoImovel);

      const precoCondominio = document.createElement('p');
      if (!Number(result.listing['pricingInfos'][0].monthlyCondoFee)) {
        precoCondominio.innerText = ' ';
      } else {
        precoCondominio.innerText =
          'Condomínio: ' +
          formatMoney(result.listing['pricingInfos'][0].monthlyCondoFee);
      }
      precos.appendChild(precoCondominio);

      const btnGroup = document.createElement('div');
      btnGroup.classList.add('btn-group');
      cardBody.appendChild(btnGroup);

      const btn1 = document.createElement('button');
      btn1.innerText = 'Telefone';
      btnGroup.appendChild(btn1);

      const btn2 = document.createElement('button');
      btn2.innerText = 'Enviar Mensagem';
      btnGroup.appendChild(btn2);
    });
  } else {
    errorPage();
  }
};
