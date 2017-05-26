document.addEventListener('DOMContentLoaded', function(){

  /*------------------
  DISPLAYING MENU IN MOBILE VIEW
  --------------------*/
  const menuBtn = document.querySelector(".navbar__listTitle");
  const menuUl = document.querySelector(".navbar__list");
  // console.log(menuBtn, menuUl);
  menuBtn.addEventListener("click", function() {
    // console.log("menu clicked");
    menuUl.classList.toggle("navbar__menuDisplayed");
  }); //closing addEventListener for manu button

  const teamThumbs = document.querySelectorAll(".team__thumbnails img");
  const teamImgs = document.querySelectorAll(".team__figures figure");

  let arrOfThumbs = [];
  for (var i = 0; i < teamThumbs.length; i++) {
    arrOfThumbs.push(teamThumbs[i]);
  }

  function getNumberOfThumbnail( array, clickedElement) {
    let index = array.indexOf(clickedElement);
    console.log(index);
    // return index;
  }

  // for (var i = 0; i < arrOfThumbs.length; i++) {
  //   arrOfThumbs[i].addEventListener("click", function getNumberOfThumbnail(arrOfThumbs, arrOfThumbs[i]));
  // };

  //maybe looking for dataset of value containing url of this img, and looking then in another array for the same url in dataset of images array


}); // closing DOM
