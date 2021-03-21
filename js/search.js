/*
The search.js is SearchIndex's core search 
function.World version.
*/

function search(){
	var searchtext = document.getElementById("searchinput").value
      
   if (searchtext == "") {
      console.log("No input.")
   } else { 
       
    window.open("https://www.bing.com/search?q="+searchtext+"&ensearch=1&FORM=BESBTP")
   
    console.log("Search Url:https://www.bing.com/search?q="+searchtext+"&ensearch=1&FORM=BESBTP")
	
    console.log(console.error())

   }

}
function prterror(){
	console.error()
}
//Search function