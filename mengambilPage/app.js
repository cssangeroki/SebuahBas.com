const main = () => {
  var newIcon = document.createElement("img");
  newIcon.src = "../img/bucket.png";
  newIcon.className = "icon";
  var iconList = document.getElementById("iconList");

  iconList.appendChild(newIcon);
};

const letsgo2 = async () => {
  const response = await fetch("http://sebuahbas.com/api/newtoken", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respJson = await response.json();
  console.log(respJson);
  if (respJson.status === "SUCCESS") {
    localStorage.setItem("sebuahbascomtoken", respJson.token);
  }
};
