let helper = {
    let slugDetails = null;
    constuctor = () => {
        loadSlugDetails();
    }
    getAllDetailsForCountry = (cc, cb) => {
        let slug = getSlugForCC(cc);
        fetch('https://api.covid19api.com/total/country/{{slug}}')

        // using route  get details
            // return the details

        .then(response => response.json())
        .then(data => console.log(data));
        return(data);
        
    }

    getSlugForCC = (cc) => {
        // check slugDetails for cc
        fetch('https://api.covid19api.com/countries')
        .then(res => res.json())
        .then(data => console.log(data.Slug))
        return(data.Slug);

        // return slug
    }

    loadSlugDetails = () => {
        // call route "https://api.covid19api.com/countries"
        fetch('https://api.covid19api.com/countries')
        // slugDetails = values;
        .then(res => res.json())
        .then(data => console.log(data) )
        return data;
    }

}