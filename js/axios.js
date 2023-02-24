const axios = require('axios').default;
const axios = require('axios/dist/browser/axios.cjs');
const axios = require('axios/dist/node/axios.cjs');

axios.get('/user?ID=u1084987_kelompok_5')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

axios.get('/password?PASS=8gwfyqbwgb')
    .then(function (response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function () {
    });