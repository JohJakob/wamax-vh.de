document.getElementById("button-gallery").onclick = showGallery;
document.getElementById("button-close-gallery").onclick = closeGallery;
document.getElementById("button-prev-gallery").onclick = showPrevImage;
document.getElementById("button-next-gallery").onclick = showNextImage;

var divGallery = document.getElementById("div-gallery");

function showGallery() {
  var ulGallery = document.getElementById("ul-gallery");
  var imageList = divGallery.getElementsByTagName("li");

  for (var i = 1; i <= ulGallery.dataset.count; i++) {
    var li = document.createElement("li");
    var image = document.createElement("img");
    var path = ulGallery.dataset.path;
    var type = ulGallery.dataset.type;

    image.src = path + i + "." + type;
    image.srcset = path + i + "@2x." + type + " 2x, " + path + i + "." + type + " 1x";
    image.alt = "";

    li.appendChild(image);
    ulGallery.appendChild(li);
  }

  divGallery.style.display = "block";
  imageList[0].className = "li-image-visible";
}

function closeGallery() {
  divGallery.style.display = "none";

  document.getElementsByClassName("li-image-visible")[0].className = "";
}

function showPrevImage() {
  var nodes = Array.prototype.slice.call(document.getElementById("ul-gallery").children);
  var ulGallery = document.getElementById("ul-gallery");
  var liVisible = document.getElementsByClassName("li-image-visible")[0];

  var index = nodes.indexOf(liVisible);

  if (index > 0) {
    ulGallery.getElementsByTagName("li")[index - 1].className = "li-image-visible";
    liVisible.className = "";
  } else {
    ulGallery.getElementsByTagName("li")[ulGallery.dataset.count - 1].className = "li-image-visible";
    liVisible.className = "";
  }
}

function showNextImage() {
  var nodes = Array.prototype.slice.call(document.getElementById("ul-gallery").children);
  var ulGallery = document.getElementById("ul-gallery");
  var liVisible = document.getElementsByClassName("li-image-visible")[0];

  var index = nodes.indexOf(liVisible);

  if (index < ulGallery.dataset.count - 1) {
    ulGallery.getElementsByTagName("li")[index + 1].className = "li-image-visible";
    liVisible.className = "";
  } else {
    ulGallery.getElementsByTagName("li")[0].className = "li-image-visible";
    liVisible.className = "";
  }
}