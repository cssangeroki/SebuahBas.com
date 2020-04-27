const injectIcon = (DictObj) => {
  if (DictObj["clue"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/clue.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["bascom"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/bucket.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["bascom2"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/bucket.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["skripsi"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/scroll.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["diploma"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/scroll.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["sponge"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/cleaning.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["bisnis"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/office.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
  if (DictObj["cash"].acquired) {
    var newIcon = document.createElement("img");
    newIcon.src = "../img/money.png";
    newIcon.className = "icon";
    var iconList = document.getElementById("iconList");

    iconList.appendChild(newIcon);
  }
};

const tokenFunc = async () => {
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

const tempFunc = () => {
  if (
    localStorage.getItem("sebuahbascomtoken") === null ||
    localStorage.length === 0
  ) {
    tokenFunc();
  } else {
    verification();
  }
};

const verification = async () => {
  const response = await fetch("http://sebuahbas.com/api/permission", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("sebuahbascomtoken"),
      id: 0,
    }),
  });

  const respJson = await response.json();
  console.log(respJson);
  if (respJson.status === "SUCCESS") {
  } else if (respJson.status === "ERROR") {
    tokenFunc();
  }
};

const setTrue = async () => {
  const response = await fetch("http://sebuahbas.com/api/inventory/bascom", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("sebuahbascomtoken"),
      id: 0,
    }),
  });

  const respJson = await response.json();
  console.log(respJson);

  if (respJson.status === "SUCCESS") {
    injectIcon(respJson.data);
    localStorage.setItem("sebuahbascomtoken", respJson.token);
  }
};
