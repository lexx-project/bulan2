const userString = '{"nama": "Budi", "umur": 30}';
const alamatString = '{"jalan": "Jl. Merdeka No. 10", "kota": "Jakarta"}';

const userObject = JSON.parse(userString);
const alamatObject = JSON.parse(alamatString);

const gabunganObject = { ...userObject, ...alamatObject };

console.log(gabunganObject);
