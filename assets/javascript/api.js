export const fetchData = async (elem) => {
  const response = await fetch(elem);
  const data = await response.json();

  let result = [];
  result['totalCount'] = data.search.totalCount;
  result['city'] = data.search.result['listings'][0].listing['address'].city;
  result['stateAcronym'] =
    data.search.result['listings'][0].listing['address'].stateAcronym;
  result['listing'] = data.search.result['listings'];

  result['listing'].forEach((result) => {
    result['fullAddress'] =
      result.listing.address['street'] +
      ', ' +
      result.listing.address['streetNumber'] +
      ' - ' +
      result.listing.address['neighborhood'] +
      ', ' +
      result.listing.address['city'] +
      ' - ' +
      result.listing.address['stateAcronym'];

    result['details'] =
      result.listing['usableAreas'] +
      ' m² ' +
      result.listing['bedrooms'] +
      ' Quartos ' +
      result.listing['bathrooms'] +
      ' Banheiros ' +
      result.listing['parkingSpaces'][0] +
      ' Vagas';
  });

  return result;
};
