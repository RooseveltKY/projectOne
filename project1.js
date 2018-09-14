//I will create a hamburger object
      var spicyBurger= {
        name: "Spicy Burger",
        meat: "Beef",
        veg: ["Shredded lettuce"," Tomato"," Onion"," Mushrooms"],
        cheese: "Cheddar",
        extra: ["Bacon", "Pickles"],
        sauce: "House special sauce",
        price: 5
      };
      
      var mildBurger= {
        name: "Mild Burger",
        meat: "Chicken",
        veg: ["Lettuce"," Tomato"," Onion"],
        cheese: "Pepper Jeck",
        extra: "Bacon",
        sauce: "House special sauce",
        price: 5
      };

//I will create a function called "populate" that will list the object items in HTML.

function populate() {
  document.getElementById('burger1name').innerHTML = spicyBurger.name;
  document.getElementById('burger1meat').innerHTML = spicyBurger.meat;
  document.getElementById('burger1veg').innerHTML= spicyBurger.veg;
  document.getElementById('burger1cheese').innerHTML= spicyBurger.cheese;
  document.getElementById('burger1extra').innerHTML= spicyBurger.extra;
  document.getElementById('burger1sauce').innerHTML= spicyBurger.sauce;
  
  document.getElementById('burger2name').innerHTML= mildBurger.name;
  document.getElementById('burger2meat').innerHTML= mildBurger.meat;
  document.getElementById('burger2veg').innerHTML= mildBurger.veg;
  document.getElementById('burger2cheese').innerHTML= mildBurger.cheese;
  document.getElementById('burger2extra').innerHTML= mildBurger.extra;
  document.getElementById('burger2sauce').innerHTML= mildBurger.sauce;
  
  
}

//create functions to calculate price with tax


function totalOne() {
var tax= 1.04712;
var costOne= (spicyBurger.price * tax).toFixed(2);
document.getElementById('burger1price').innerHTML= "You owe "+ costOne;
}

function totalTwo() {
var tax= 1.04712;
var costTwo= (mildBurger.price * tax).toFixed(2);
document.getElementById('burger2price').innerHTML= "You owe "+ costTwo;
}