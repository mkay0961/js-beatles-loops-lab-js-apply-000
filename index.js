// add solution here
function theBeatlesPlay(Musicians, Instruments){
  var array = new Array();
  for(var i = 0; i< Musicians.length; i++){
    var msc = Musicians[i];
    var inst = Instruments[i];
    var string = msc + " plays " + inst;
    array[i]= string;
  }
  
  return array;
}
function johnLennonFacts(facts){
  var stringtemp = new Array(facts.length);
  var i = 0;
  while(i<facts.length){
    stringtemp[i] = (facts[i] +"!!!");
    i++;
  }
  return stringtemp;
}

function iLoveTheBeatles(number){
  var emptyArray = new Array();
  var num;
  var i:
  do{
    num = 15-number
    
  }
  while(i<num){
    emptyArray[i]= "I love the Beatles!";
    i++;
  }
  // var i = 0;
  // while(number.length<15){
  //   emptyArray[i]= "I love the Beatles!";
  //   i++;
  // }
  return emptyArray;
  

}
