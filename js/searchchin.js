/*
The search.js is SearchIndex's core search 
function.Chinese version.
*/

function search(){
	var searchtext = document.getElementById("searchinput").value
     
    document.getElementById("searchbuttoncn").disabled=false;

   if (searchtext == "") {
      console.log("No input.")
   } else { 
       
    window.open("https://cn.bing.com/search?q="+searchtext+"&FORM=BESBTB&ensearch=0")
   
    console.log("Search Url:https://cn.bing.com/search?q="+searchtext+"&FORM=BESBTB&ensearch=0")
	
    console.log(console.error())

   }

}
function prterror(){
	console.error()
}
//Search function