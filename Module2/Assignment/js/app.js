(function(){

  angular.module('CheckOffShoppingList', [])
  .controller('ToBuyShoppingController', ToBuyShoppingControllerFn)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingControllerFn)
  .service('ShoppingListService', ShoppingListService)

// Service Injection
  ToBuyShoppingControllerFn.$inject = ['ShoppingListService'];
  AlreadyBoughtShoppingControllerFn.$inject = ['ShoppingListService'];


  function ToBuyShoppingControllerFn(ShoppingListService){
      shopping = this
      shopping.buy_items = ShoppingListService.viewItems()[0]
      shopping.addToBoughtList = function(item_index){
        ShoppingListService.buyItem(item_index)
      }
  }

  function AlreadyBoughtShoppingControllerFn(ShoppingListService){
      this.bought_items = ShoppingListService.viewItems()[1]
	  
	 
	  
  }


  function ShoppingListService(){
   var shopping_service = this

   var shopping_items = [
        { name: 'Cookies', quantity: '10' },
        { name: 'Banana', quantity: '12 Dozen' },
        { name: 'Milk', quantity: '10 Liters' },
        { name: 'Bread', quantity: '5 Packets' },
        { name: 'Chocolates', quantity: '15' }
    ]

    var bought_items = []

	shopping_service.buyItem = function(item_index){
		bought_items.push(shopping_items[item_index]) // Add to "Bought" list
		shopping_items.splice(item_index, 1) // Remove from "To Buy" list
    }

    shopping_service.viewItems = function(){
      return [shopping_items,bought_items]
    }
	
	
	

  }

})();