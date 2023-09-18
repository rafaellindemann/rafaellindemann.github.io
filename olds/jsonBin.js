
// tentativa de criação da biblioteca para abstração, mas não deu certo
// parzinho com o testeLib.js

let binId = '6505b84bd972192679c4e9e2'; // vacinas

let xMasterKey = '$2b$10$C/H.VFdgfTR6E8YtcX7MBOLNtZQOZ07pITaZNATiIlVI0wQPnE.cO'; // usada para escrita
let xAccessKey = '$2b$10$vo5ahIn3aEWhnCYQ9kMg9.v9CrISlIllx9DYFXLw45KDnSdW22RQq'; // usada para leitura

let apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

let leitura

function binSetup(bin, master, access){
    binId = bin;
    xMasterKey = master;
    xAccessKey = access;
}

function binWrite(rec){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };
    
    req.open("PUT", `https://api.jsonbin.io/v3/b/${binId}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    // req.setRequestHeader("X-Master-Key", apiKey);
    req.setRequestHeader("X-Master-Key", xMasterKey);
    req.send('{"sample": "Hello World"}');  
    // req.send(JSON.stringify(rec)); 
}

function binRead(){
    const headers = {
        'X-Access-Key': xAccessKey, // Substitua 'SUA_CHAVE_DE_ACESSO' pela sua chave de acesso específica para o bin privado.
      };
    
      fetch(apiUrl, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Faça algo com os dados lidos
        //   cursosData = data
          // return data
          leitura = data.record
        })
        .catch((error) => {
          console.error('Erro ao ler dados do bin:', error);
        });
}