import database_URL from './databaseURL';

async function postData(data) {
  const response = await fetch(database_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export default postData;
