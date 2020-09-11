var menu1Array = new Array
                        ('Everything Spice New York Pretzel', 'House Pickled Vegetables','Pretzel Bites', 'Salsa & Guacamole', 'Ahi Poke', 'Truffle Fries', ' Waffle Sweet Potato Fries', 'Wahoo Steamed Mussels','Blue Cheese Duck Nachos');

var menu3Array = new Array 
                        ('Fish Tacos', 'Chicken Tinga Tostatadas', 'Smoked Mushroom Tacos');
var menu4Array = new Array 
                        ('Ballast Point Burger', 'West Coast Griddle Burger', 'The Spicy Goods Burger', 'The Beyond Burger', 'Grilled Fish Sandwich', 'Grilled Vegetable Muffuleta', 'Fried Chicken Sandwich');
var menu5Array = new Array 
                        ('Hazelnut Chocolate Cake' , 'Mystery');
var counter = 0;
var liveCounter;
var buttonAddToCounter =  document.getElementsByClassName("squareButton")[0];

function revealOrderFormItem1(){
      populateForms1();

      showFormOrderItem1();
      //++counter;
      console.log("current counter is at: " + counter);
      counter++; 
      liveCounter = counter - 1;
      return counter, liveCounter;
      }

function populateForms1(){
      
      //var dropdown = document.getElementById("myForm1").querySelectorAll('.myForm1Select');
      //console.log(dropdown);

      var dropdown1 = document.getElementById('form1Select_1');
      for (var j = 0; j <  menu1Array.length; ++j) {
            dropdown1[dropdown1.length] = new Option(menu1Array[j], menu1Array[j]);
      }
    
      var dropdown2 = document.getElementById('form1Select_1');
      for (var j = 0; j <  menu1Array.length; ++j) {
            dropdown2[dropdown2.length] = new Option(menu1Array[j], menu1Array[j]);
      }

      var dropdown3 = document.getElementById('form1Select_1');
      for (var j = 0; j <  menu1Array.length; ++j) {
            dropdown3[dropdown3.length] = new Option(menu1Array[j], menu1Array[j]);
      }

      var dropdown4 = document.getElementById('form1Select_1');
      for (var j = 0; j <  menu1Array.length; ++j) {
            dropdown4[dropdown4.length] = new Option(menu1Array[j], menu1Array[j]);
      }

      var dropdown5 = document.getElementById('form1Select_1');
      for (var j = 0; j <  menu1Array.length; ++j) {
            dropdown5[dropdown5.length] = new Option(menu1Array[j], menu1Array[j]);
      }


      return;
}      
function showFormOrderItem1(){
      //var x = document.getElementById("myForm1").querySelectorAll("select.optionClass");
      var x = document.getElementById("myForm1").querySelectorAll("select.hiddenContainerForForm");
      var y = document.getElementById("myForm1").querySelectorAll('select.hiddenContainerForForm.optionClass');
      for (var i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "yellow";
            console.log(y[i]);
            }

            /*
      for (var k = 0; k < x.length;k++){
            x[counter].style.visibility = "visible";
      }*/


      if(counter < 5){
            x[counter].style.visibility = "visible";
            console.log[y];
            //y[counter].style.color = "red";
            //console.log(y[counter]);
      }
      return;
}

function removeLastItemFormContainer1(){

      //var buttonAddToCounter =  document.getElementsByClassName("squareButton")[0];


      /*
      var y = document.getElementById("myForm1").querySelectorAll("select.hiddenContainerForForm");
      if(liveCounter < 6){
            console.log("removeLastItemLoop number:" + y[liveCounter]);
            y[liveCounter].style.visibility = "hidden";
            liveCounter--;
      }*/

      console.log("live counter is at: " + liveCounter);
      var y = document.getElementById("myForm1").querySelectorAll("select");
      if(liveCounter < 5){
            y[liveCounter].style.visibility = "hidden";
      }



      return;
}
