// Tile Teamwork Tactics Game
function possibleBonus(a, b) {
  let myPosition = a; // declare my position
  let myFriendPosition = b; // declare my friend's position
 for (let i = 1; i <= 6; i++){
   myPosition += 1;
   if(myPosition === myFriendPosition){
   return true;
 }  
}
return false;
}
possibleBonus(3, 7)
possibleBonus(1, 9)
possibleBonus(5, 3)