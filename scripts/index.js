/* global shoppingList, store, api */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });


  api.getItems((items) => {
    const item = store.items[0];
    
    console.log('inside callback, items:', store.items  );
    console.log('inside callback, item:', item);

    
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'Darkwraith' });
    console.log('new name: ' + item.name);

    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  
  
});


