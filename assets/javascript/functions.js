export const formatMoney = (elem) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(elem);
};

export const formatSearch = (text) => {
  text = text.trim();
  text = text.toLowerCase();
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
  text = text.replace(/\s/g, '-');
  return text;
};

export const errorPage = () => {
  const area = document.querySelector('#result');
  area.innerHTML = '';

  const div = document.createElement('div');
  div.classList.add('error');
  area.appendChild(div);

  const h1 = document.createElement('h1');
  h1.innerText = 'OOOOPS!';
  div.appendChild(h1);

  const p1 = document.createElement('p');
  p1.innerText = 'ALGO DEU ERRADO NA SUA BUSCA.';
  div.appendChild(p1);

  const span = document.createElement('span');
  span.innerText = 'Status 500';
  div.appendChild(span);

  const p2 = document.createElement('p');
  p2.innerText = 'POR FAVOR, TENTE NOVAMENTE...';
  div.appendChild(p2);
};

export const amenitiesTranslator = (item) => {
  const tagsTranslator = [];
  tagsTranslator['PETS_ALLOWED'] = 'ANIMAIS DE ESTIMAÇÃO PERMITIDOS';
  tagsTranslator['ELEVATOR'] = 'ELEVADOR';
  tagsTranslator['ELECTRONIC_GATE'] = 'PORTÃO ELETRÔNICO';
  tagsTranslator['CINEMA'] = 'PORTÃO ELETRÔNICO';
  tagsTranslator['GYM'] = 'ACADEMIA';
  tagsTranslator['PLAYGROUND'] = 'PARQUE INFANTIL';
  tagsTranslator['GATED_COMMUNITY'] = 'CONDOMÍNIO FECHADO';
  tagsTranslator['SAUNA'] = 'SAUNA';
  tagsTranslator['GARDEN'] = 'JARDIM';
  tagsTranslator['PARTY_HALL'] = 'SALÃO DE FESTAS';
  tagsTranslator['FURNISHED'] = 'MOBILIADO';
  tagsTranslator['FIREPLACE'] = 'LAREIRA';
  tagsTranslator['POOL'] = 'PISCINA';
  tagsTranslator['BICYCLES_PLACE'] = 'BICICLETÁRIO';
  tagsTranslator['AIR_CONDITIONING'] = 'AIR_CONDITIONING';
  tagsTranslator['SPORTS_COURT'] = 'SPORTS_COURT';
  tagsTranslator['AMERICAN_KITCHEN'] = 'COZINHA AMERICANA';
  tagsTranslator['TENNIS_COURT'] = 'TENNIS_COURT';
  tagsTranslator['LAUNDRY'] = 'LAVANDERIA';
  tagsTranslator['BARBECUE_GRILL'] = 'CHURRASQUEIRA';

  return tagsTranslator[item];
};
