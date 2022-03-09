const API_BASE_URL = 'https://api.tvmaze.com';

export async function getApi(queryString) {
  const responce = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  // throw new Error('OOPS !');
  return responce;
}
