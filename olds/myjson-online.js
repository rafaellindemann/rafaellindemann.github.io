// código disponibilizado no bin. Mas só faz get 

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};

fetch("https://api.myjson.online/v1/records/7cfd121d-10c9-4e8d-8c30-d29932e480bd", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));