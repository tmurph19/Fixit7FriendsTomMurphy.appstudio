
/*Set variables firstFriend, secondFriend, thirdFriend for the following three prompt statements*/
let firstFriend = prompt("Enter the name of your first of three friends.");
/*prompt statement was previously capitalized, I undid that.*/
let secondFriend = prompt("Enter the name of your second of three friends.");
let thirdFriend = prompt("Enter the name of your third of three friends.");
/*Deleted the following alert statement and set the variable bestFriend and allowed user to see 
what they inputted previously through template literal and they chose which was their best friend */
let bestFriend = prompt(`Out of the three friends you just entered, (${firstFriend}, ${secondFriend}, 
and ${thirdFriend}), which one is your best friend?`)

/*brackets instead of parenthesis when creating an array*/
var friendNames = [];

/*while this array doesn't necessarily serve a defined purpose when considering that the if else statement below
is dependent only upon bestFriend, I still swithced 1,2,3 with 0,1,2 when positioning the values of the array since the sequence of arrays
begin at 0 not 1.*/
friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend

/*Deleted the setting variable of bestFriend since I modified code to set it during a prompt statement above*/
/*changed the string method to charAt(0) to find the first character of the string*/
/*cswitched the apostrophe in the first two alerts to reflect singular possessive*/
if (bestFriend.charAt(0) == "A")
   alert("Your best friend's name starts with A.")
/*added an extra equal sign before "B"*/
else if (bestFriend.charAt(0) == "B")
   alert("Your best friend's name starts with B.")
else 
   /*added 'best friend's' between "Your" and "name"*/
   alert("Your best friend's name starts with something other than A or B.")


