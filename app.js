function toggleOpacity(){
  var img = document.getElementsByClassName('skillImgs');
  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", function(e) {
      e.target.classList.add("imgOpacity");
    });
    img[i].addEventListener("mouseout", function(e) {
      e.target.classList.remove("imgOpacity");
    });
  }
};
