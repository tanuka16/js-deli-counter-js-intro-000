var katzDeliLine = [];                              //create an empty array

function takeANumber(katzDeliLine, newName){        //function accepts 2 argument 1- people on line
                                                    //2- name of the new person on line
      katzDeliLine.push(newName);
      return "Welcome, " + newName + ". You are number " + katzDeliLine.length +" in line."
    }

function nowServing(katzDeliLine){
  if (katzDeliLine === 0){                          //1st array holds 0 place
    return " There is nobody waiting to be served!";
  }
  else {
    var customer = katzDeliLine.shift();
    return "Currently serving " + customer + ".";
  }
}
function currentLine(katzDeliLine){
  return "The line is currently:" + katzDeliLine + "."
}
