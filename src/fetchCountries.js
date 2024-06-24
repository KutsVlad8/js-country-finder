export default function fetchCountries(name) {
  const fields = 'fields=name,capital,population,flags,languages';

  return fetch(`https://restcountries.com/v3.1/name/${name}?${fields}`).then(
    response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    }
  );
}
