export default async(type = 'GET', url = '', data = {}) => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }

    return await axios.get(url);

  } else if (type == 'POST') {
    
    return await axios.post(url, data);
  }
}

// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

 // axios.post('/user', {
 //    firstName: 'Fred',
 //    lastName: 'Flintstone'
 //  })
 //  .then(function (response) {
 //    console.log(response);
 //  })
 //  .catch(function (error) {
 //    console.log(error);
 //  });


// var params = { width:1900, height:1200 };
// var str = jQuery.param(params);
// $("#results").text(str);

// width=1680&height=1050


// Save data to the current local store
//localStorage.setItem("username", "John");

// Access some stored data
//alert( "username = " + localStorage.getItem("username"));


// 判断是否支持本地存储
/*function isLocalStorageSupported() {
    var testKey = 'test',
        storage = window.sessionStorage;
    try {
        storage.setItem(testKey, 'testValue');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}*/