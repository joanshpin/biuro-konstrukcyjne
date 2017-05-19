document.addEventListener('DOMContentLoaded', function(){

  /*------------------
  DISPLAYING MENU IN MOBILE VIEW
  --------------------*/
  const menuBtn = document.querySelector(".navbar__listTitle");
  const menuUl = document.querySelector(".navbar__list");
  console.log(menuBtn, menuUl);
  menuBtn.addEventListener("click", function() {
    console.log("menu clicked");
    menuUl.classList.toggle("navbar__menuDisplayed");
  }); //closing addEventListener for manu button




}); // closing DOM
