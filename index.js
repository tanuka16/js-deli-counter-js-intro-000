var katzDeliLine = [];                              //create an empty array

function takeANumber(katzDeliLine, newName){        //function accepts 2 argument 1- people on line
                                                    //2- name of the new person on line
      katzDeliLine.push(newName);
      return "Welcome, " + newName + ". You are number " + katzDeliLine.length +" in line."
    }

/*Build a function nowServing. This function should accept the current line of people (katzDeliLine)
 and return the first person in line and then remove that individual from the line.
 If there is nobody in line, it should return "There is nobody waiting to be served!"*/
function nowServing(katzDeliLine){
  let i = 0;
  while (i <  katzDeliLine.length){                        //if the condition is true continue incrementing
    i++;                                                   //move to the next customer
  }
  if (katzDeliLine.length === 0){                          //if custome line = 0 customer
    return "There is nobody waiting to be served!";        // print
  }
  else {
    var customer = katzDeliLine.shift();                   //else remove the customer from the front of the array/line
    return "Currently serving " + customer + ".";          //concat 
  }
}


function currentLine(katzDeliLine){
  return "The line is currently:" + katzDeliLine + "."
}
