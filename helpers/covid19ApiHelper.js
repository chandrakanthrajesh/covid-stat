let helper = {
    let slugDetails = null;
    let countries = null;
    constuctor = () => {
        loadSlugDetails();
    }
    getAllDetailsForCountry = (Iso2, cb) => {
        let slug = getSlugForIso2(Iso2);
        fetch('https://api.covid19api.com/total/country/{{slug}}')

        // using route  get details
            // return the details

        .then(response => response.json())
        .then(data => cb(data));
        
    };

    getSlugForIso2 = (Iso2) => {
        //find the slug for country code
        // check slugDetails for cc
        let Slug = null;
        
        fetch('https://api.covid19api.com/countries')
        .then(res => res.json())
        .then(data => console.log(data.Slug))
        for(let i=0:i<=data; i++)
        if(i === "Slug");
        console.log(i);

        return(data.Slug);

        // return slug
    };

    loadSlugDetails = () => {
        // call route "https://api.covid19api.com/countries"
        fetch('https://api.covid19api.com/countries')
        // slugDetails = values;
        .then(res => res.json())
        .then(data => {
            countries = data;
        });
    };

}