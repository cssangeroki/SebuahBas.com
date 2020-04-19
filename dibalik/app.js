

const letsgo = () =>{
  fetch('http://sebuahbas.com/api/ok')
  .then((response) =>{
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}



const letsgo2 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/newtoken', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}

const letsgo3 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/name', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token:localStorage.getItem('sebuahbascomtoken'), name: "Kevin"})
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}

const letsgo4 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/permission', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token:localStorage.getItem('sebuahbascomtoken'), id: 0})
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}

const letsgo5 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/permission', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token:localStorage.getItem('sebuahbascomtoken'), id: 4})
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}

const letsgo6 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/permission', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token:localStorage.getItem('sebuahbascomtoken'), id: 1})
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}


const letsgo7 = async () =>{
  const response = await fetch('http://sebuahbas.com/api/decode', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token:localStorage.getItem('sebuahbascomtoken')})
  });

  const respJson = await response.json();
  console.log(respJson);
  if(respJson.status === "SUCCESS"){
    localStorage.setItem('sebuahbascomtoken', respJson.token);
  }
}
