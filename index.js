/*Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept two paramaters: the current line of people,
along with the new person's name. The function should return a welcome message including
the new person's position in line, such as "Welcome, Ada. You are number 1 in line.".
And don't go being too programmer-y and give them their index. These are normal people.
If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
*/
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
  if (katzDeliLine.length === 0)
  return "The line is currently:" + katzDeliLine + "."
}
