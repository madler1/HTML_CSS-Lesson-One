function sayHello(name) {
document.getElementById("result").innerHTML = "Hello" + name + "!";
}

var array;
var i;
var sum = 0;
var mEan;
var mEdian;

function input(){
  var nums = prompt("Enter a list of whole numbers separated by commas");
  var arr =nums.split(',');
  array = arr;
}

function mean(){
  for(i=0; i < array.length; i++){
    sum += parseInt(array[i]);
  }
  mEan = sum/array.length;
  window.alert("This is the mean: " + mEan);
  sum=0;
}

function median(){
  if(array.length%2 == 0){
    sum = parseInt(array[array.length/2 - 1]) + parseInt(array[array.length/2]);

  }
  else{
    sum = 2*array[Math.floor(array.length/2)];
  }
  mEdian = sum/2;
  window.alert("This is the median: " + mEdian);
  sum=0;
}

function mode(){
  var counter = {};
    var mode = [];
    var max = 0;
    for (var i=0; i<array.length;i++) {
        if (!(array[i] in counter))
            counter[array[i]] = 0;
        counter[array[i]]++;
        if (counter[array[i]] == max)
            mode.push(array[i]);
        else if (counter[array[i]] > max) {
            max = counter[array[i]];
            mode = [array[i]];
        }
    }
window.alert("This is the mode: " + mode);
}
