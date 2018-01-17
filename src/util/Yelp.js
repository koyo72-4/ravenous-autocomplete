const apiKey = 'Uy4BWbJgIf0QBqIpob4plSGW8YQRKg-onvWgEDiXkUysG42VRrrdP4xa6U0_d1Y5Pxy8Vh6eD4sq88PIFhpabQ85nL3PqpG41Stx1oRp8GuKGUbf-hMeGaAX9CVdWnYx';

const Yelp = {
  search(term, location, sortBy, results, radius) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=${results}&radius=${radius}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse);
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.alias,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};

export default Yelp;
