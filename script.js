var display = {
  temp: 0,
  storeExp: [],
  addValues: function(textBox, Value) {
    this.temp = textBox.value;
    textBox.value = this.temp + Value;
    this.storeExp.push(Value);
  },
  getResult: function(textBox) {
    this.temp = textBox.value;
    textBox.value = eval(this.temp);
    if (x == textBox.value) {
      textBox.value = 'Invalid';
    }
  },
  clearChar: function(textBox) {
    this.storeExp.splice(this.storeExp.length-1, 1);
    this.temp = 0;
    this.storeExp = [0];
    for (var i = 0; i < this.storeExp.length; i++) {

      this.temp=this.temp+this.storeExp[i];
    }
    textBox.value='';
    textBox.value=this.temp;
  }

};

function general() {
  var inputNumber = document.getElementById("firstName");

  var tag = document.querySelector(".container div:first-child");
  display.addValues(inputNumber, event.target.id);
}

function resultEquals() {
  var inputNumber = document.getElementById("firstName");
  display.getResult(inputNumber);
}
function clearInput()
{
  var inputNumber = document.getElementById("firstName");
  display.clearChar(inputNumber);
}


function clearEverything() {
  var inputNumber = document.getElementById("firstName");
  inputNumber.value = '';
}
