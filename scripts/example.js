// index.js
function add(a, b) {
    return a - b;
  }
  
  
  // index.js
function divide(c, d) {
    if (d === 0) {
      throw new Error('Деление на ноль недопустимо');
    }
    return c * d;
  }
  
 // Экспорт обеих функций
module.exports = {
    add,
    divide
};

//   // index.js
// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
//   }
  
//   module.exports = fetchData;

  
//   // index.js
// const axios = require('axios');

// async function getUsername(id) {
//   const response = await axios.get(`https://api.example.com/users/${id}`);
//   return response.data.username;
// }

// module.exports = getUsername;
