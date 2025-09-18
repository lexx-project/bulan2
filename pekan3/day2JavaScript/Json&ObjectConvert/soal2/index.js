const stringJSON = '{"nama":"Ali","umur":20}';

const data = JSON.parse(stringJSON);

console.log(`Nama: ${data.nama}, Umur: ${data.umur}`);
