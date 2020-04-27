const main = () => {
  var newIcon = document.createElement("img");
  newIcon.src = "../img/bucket.png";
  newIcon.className = "icon";
  var iconList = document.getElementById("iconList");

  iconList.appendChild(newIcon);
};
