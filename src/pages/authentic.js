module.exports = {
  login: async (req, res) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email,
      "gender": req.body.gender,
      "userType": req.body.userType,
      "phoneNumber": req.body.phoneNumber,
      "password": req.body.password
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://agripeller-backend-dev-7bcb6df4bb3f.herokuapp.com/users/signup',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcm5lc3RAZ21haWwuY29tIiwiZXhwIjoxNjk1MTQ2NTQ4fQ.tW6lgahFPXuILGnfmvWUe6j4DnSQL_XUliezoUXFLFUwIKVoVjQsie3MmsrVuLi4cnTUqZAqe3qwzkd0KHTCMg'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
}