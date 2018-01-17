import React from 'react';

const apiKey = 'Uy4BWbJgIf0QBqIpob4plSGW8YQRKg-onvWgEDiXkUysG42VRrrdP4xa6U0_d1Y5Pxy8Vh6eD4sq88PIFhpabQ85nL3PqpG41Stx1oRp8GuKGUbf-hMeGaAX9CVdWnYx';

const Autocomplete = {
  complete(letters) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=${letters}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    }).then(response => response.json()).then(jsonResponse => {
      console.log(jsonResponse.terms);
      return jsonResponse.terms.map(term => {
        return (
          <option value={term.text} />
        );
      });
    });
  }
};

export default Autocomplete;
