var menu2Array = new Array 
                        ('Blue Crab Salad', 'Farmers Market Salad', "Baby Kale Salad",);
var counter2 = 0;
var liveCounter2;
var buttonAddToCounter2 =  document.getElementsByClassName("squareButton")[0];

function revealOrderFormItem2(){
      populateForms2();

      showFormOrderItem2();
      //++counter;
      console.log("current counter is at: " + counter2);
      counter2+= 1; 
      liveCounter = counter - 1;
      return liveCounter;}
      

function populateForms2(){
      
      //var dropdown = document.getElementById("myForm1").querySelectorAll('.myForm1Select');
      //console.log(dropdown);

      var dropdown11 = document.getElementById('form2Select_1');
      for (var j = 0; j <  menu2Array.length; ++j) {
            dropdown11[dropdown11.length] = new Option(menu2Array[j], menu2Array[j]);
      }
      
      var dropdown22 = document.getElementById('form2Select_2');
      for (var j = 0; j <  menu2Array.length; ++j) {
            dropdown22[dropdown22.length] = new Option(menu2Array[j], menu2Array[j]);
      }

      var dropdown33 = document.getElementById('form2Select_3');
      for (var j = 0; j <  menu2Array.length; ++j) {
            dropdown33[dropdown33.length] = new Option(menu2Array[j], menu2Array[j]);
      }

      var dropdown44 = document.getElementById('form2Select_4');
      for (var j = 0; j <  menu2Array.length; ++j) {
            dropdown44[dropdown44.length] = new Option(menu2Array[j], menu2Array[j]);
      }

      var dropdown55 = document.getElementById('form2Select_5');
      for (var j = 0; j <  menu2Array.length; ++j) {
            dropdown55[dropdown55.length] = new Option(menu2Array[j], menu2Array[j]);
      }


      return;
}      
function showFormOrderItem2(){
      //var x = document.getElementById("myForm1").querySelectorAll("select.optionClass");
      var x = document.getElementById("myForm2").querySelectorAll("select.hiddenContainerForForm");
      var y = document.getElementById("myForm2").querySelectorAll('select.hiddenContainerForForm.optionClass');
      for (var i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "yellow";
            console.log(y[i]);
            }

            /*
      for (var k = 0; k < x.length;k++){
            x[counter].style.visibility = "visible";
      }*/


      if(counter2 < 5){
            x[counter2].style.visibility = "visible";
            console.log[y];
            //y[counter].style.color = "red";
            //console.log(y[counter]);
      }
      return;
}

function removeLastItemFormContainer2(){

      //var buttonAddToCounter =  document.getElementsByClassName("squareButton")[0];


      var y = document.getElementById("myForm2").querySelectorAll("select.hiddenContainerForForm");
      if(liveCounter2 < 6){
            console.log("removeLastItemLoop number:" + y[liveCounter2]);
            y[liveCounter2].style.visibility = "hidden";
            liveCounter2--;
      }


      return;
}
                        