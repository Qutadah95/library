alert("welcome to The online libarary  ")

var solve = prompt("please do the puzzle to you can access our website: 1 + 1 = ")
var puzzle;
function puzzle(){

if(solve == 2){
  alert("thanks for solve the puzzle enjoy in the website")
}
else{
  alert("Do it again")
  
}
while (solve !=2)
{solve = prompt("please do the puzzle to you can access our website: 1 + 1 = ")

}
}
puzzle()

 
var num = prompt("how many time you want to show a picture of our most viewed books  ")
var i;
for (i = 0; i < num; i++) {
document.write("<img src='https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg' alt='the lord of the ring'>");
}

var section = prompt("What is your favorite section From these section: Book , Manga , Scientific Books , Literary Books?")

var fav ;
function fav (){
if(section == "Book" ){
 alert("we have your favorite books  ")

}
 else if(section == "Manga")
{
 alert("we have your favorite books  ")

}

else if(section == "Scientific Books")
{
 alert("we have your favorite books  ")
 
}
else if(section == "Literary Books")
{
 alert("we have your favorite books  ")
 
}
else{
  alert("sorry we don't have this Type of books")
}

}
fav();