var display={
temp:0,
  addValues:function(textBox,Value)
  {
   this.temp=textBox.value;
  textBox.value=this.temp+Value;
  },
 getResult:function(textBox)
 {
   this.temp=textBox.value;
   textBox.value=eval(this.temp);
   if(x==textBox.value)
   {
     textBox.value='Invalid';
   }
 }
  
};
function general() 
{ var inputNumber= document.getElementById("firstName");
    
  var tag = document.querySelector(".container div:first-child");
  display.addValues(inputNumber,event.target.id);
}
function resultEquals()
{ var inputNumber= document.getElementById("firstName");
  display.getResult(inputNumber);
}