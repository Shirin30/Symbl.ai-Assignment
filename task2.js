const axios = require('axios');

axios.get('http://localhost:5000/api/data')
  .then(function (response) {
    var datalist = response.data.data
    datalist.sort(function (a, b) {
      return a.id - b.id;
    })
    for (var i = 0; i < datalist.length; i++) {
      console.log('item id : ' + datalist[i].id)
      console.log('item name : ' + datalist[i].name)
    }
  })
  .catch(function (error) {
    console.log(error);
  });