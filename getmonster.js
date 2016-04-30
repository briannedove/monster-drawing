function getMonster(){
var sizes = ["extra small", "small", "medium", "large", "extra large"]
var eyes = [];
for (i = 0; i <= 100; i++)
{
	eyes[i] = i;
}
var colours = ["red", "orange", "yellow", "green", "blue", "purple", "cyan", "magenta", "black", "white", "brown", "pink"] 
var legs = [];
for (i = 0; i <= 20; i++)
{
	legs[i] = i;
}


function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
var monsterSize = sizes[getRandomInt(0, 5)];
var monsterColour = colours[getRandomInt(0, 12)];
var monsterEyeCount = eyes[getRandomInt(0, 100)];
var monsterLegCount = legs[getRandomInt(0, 20)];

if(monsterEyeCount == eyes[0] && monsterLegCount == legs[0])
{
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with no eyes and no legs. Happy drawing!";
}else if (monsterEyeCount == 0 && monsterLegCount == 1){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with no eyes and one leg. Happy drawing!";
}else if (monsterEyeCount == 1 && monsterLegCount == 0){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with one eye and no legs. Happy drawing!";
}else if (monsterEyeCount == 1 && monsterLegCount == 1){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with one eye and one leg. Happy drawing!";
}else if (monsterEyeCount > 1 && monsterLegCount == 1){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with " + monsterEyeCount +  " eyes and one leg. Happy drawing!";
}else if (monsterEyeCount > 1 && monsterLegCount == 0){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with " + monsterEyeCount +  " eyes and no legs. Happy drawing!";
}else if (monsterEyeCount == 0 && monsterLegCount >1){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with no eyes and " + monsterLegCount + " legs. Happy drawing!";
}else if (monsterEyeCount == 1 && monsterLegCount >1){
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with one eye and " + monsterLegCount + " legs. Happy drawing!";
}else{
	return "You should draw a " + monsterSize  + ", " + monsterColour + " monster with " + monsterEyeCount +  " eyes and " + monsterLegCount + " legs. Happy drawing!";
}
}