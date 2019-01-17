$(document).ready(function(){
  insertTopNavigator();
  insertHeadData();

});



function insertHeadData() {
  $( "head" ).append( "<link rel=\"icon\" href=\"img/favicon.ico\"> ");
  $( "head" ).append( "<link rel=\"stylesheet\" href=\"css/style.css\"> ");
  $( "head" ).append( "<meta charset=\"utf-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> ");
  $( "head" ).append( " <title>GoodDoggo</title>");


}

function insertTopNavigator() {
  $( ".topnav" ).append( "  <a class=\"button\" href=\"thicc.html\"><img src=\"img/thiccDog.png\" alt=\"Thicc buttn\"></a>");
  $( ".topnav" ).append( "  <a class=\"button\" href=\"puppers.html\"><img src=\"img/puppers.png\" alt=\"puppers buttn\"></a> ");
  $( ".topnav" ).append( "   <a class=\"active\" href=\"index.html\"><img class=\"mainLogo\" src=\"img/GoodDoggo.png\" alt=\"Header pictur of a happy dog\"> </a> ");
  $( ".topnav" ).append( "   <a class=\"button\" href=\"floofs.html\"><img  src=\"img/floofs.png\" alt=\"floof buttn\"></a> ");
  $( ".topnav" ).append( "   <a class=\"button\" href=\"happee.html\"><img src=\"img/happeeDog.png\" alt=\"happee buttn\"></a> ");

}
