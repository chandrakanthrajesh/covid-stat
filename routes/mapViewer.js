const express = require('express');
const fetch = require('node-fetch');
const { response } = require('express');
const router = express.Router();
const url = "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z";

router.get('/',(req,res)=>{
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
});

module.exports = router;


method = (country, type, from, to) => {
    url = "https://api.covid19api.com/country/"+slug+"/status/"+type+"?from="+from+"&to="+to;
}

data = {
    'cc' : {
        confirmed: 323,
        deaths: 234,
        cured: 23
    }
}