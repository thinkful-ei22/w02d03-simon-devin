'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/simon-devin';
  
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  
  const createItem = function(name, callback, error){
    const newItem = JSON.stringify({
      name
    });

    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: error
    });
  };

  const updateItem = function(id, updateData, callback, error) {
    console.log('in updateItem, parsing id:', id);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: error
    });
  };

  const deleteItem = function(id, callback, error){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
      error: error
    });
  };


  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();

