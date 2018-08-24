document.body.onload = didResize;
document.body.onresize = didResize;

function didResize() {
  var imageSoulmat = document.getElementById("img-soulmat");

  if (window.innerWidth > 1024) {
    imageSoulmat.src = "/images/soulmat.png";
    imageSoulmat.srcset = "/images/soulmat@2x.png 2x, /images/soulmat.png 1x";
  } else {
    imageSoulmat.src = "/images/soulmat_compact.png";
    imageSoulmat.srcset = "/images/soulmat_compact@2x.png 2x, /images/soulmat_compact.png 1x";
  }
}