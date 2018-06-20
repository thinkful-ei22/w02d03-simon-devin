'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/simon-devin';
  
  const getItems = function(callback){
    callback('api module works!');
  };

  return {
    getItems
  };

})();


api.getItems(function(data){
  console.log(data);
});

console.log(api.BASE_URL);
