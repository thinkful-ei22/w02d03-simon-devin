'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/simon-devin';
  
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
    callback('api module works!');
  };

  return {
    getItems
  };

})();
