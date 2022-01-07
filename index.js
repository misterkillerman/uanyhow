window.onscroll = function() {scrollFunction()};


function scrollFunction(){
  var scrollTop = document.documentElement.scrollTop;
  var bodyChildren = document.body.children;
  var position = [];

  for (var i = 0; i < bodyChildren.length; i++) {
    var divChildren = bodyChildren[i].children
    for (var k = 0; k < divChildren.length; k++) {
      var position = divChildren[k].offsetTop - 500
      if(i == bodyChildren.length - 1 && k == divChildren.length - 1){
        if(divChildren[k-2].style.opacity == "1"){
          divChildren[k].style.animationName = "slidein"
          divChildren[k].style.animationDuration = "2s"
        }
      } else if (scrollTop > position ) {
        if (divChildren[k].style.animation == null || divChildren[k].style.animation == "") {
          if (divChildren[k].tagName == "IMG") {
            divChildren[k].style.animationName = "slideinIMG2"
            divChildren[k].style.animationDuration = "2s"
          } else if (divChildren[k].className == "imgContainer"){
            divChildren[k].style.animationName = "slideinCON"
            divChildren[k].style.animationDuration = "2s"
            for (var m = 0; m < divChildren[k].children.length; m++) {
              divChildren[k].children[m].style.animationName = "slideinIMG"
              divChildren[k].children[m].style.animationDuration = "2s"
            }
          } else if (divChildren[k].tagName == "A") {
            divChildren[k].style.animationName = ""
          } else {
            divChildren[k].style.animationName = "slidein"
            divChildren[k].style.animationDuration = "2s"
          }
        }
      }
    }
  }
}
