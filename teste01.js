const binId = '6505b84bd972192679c4e9e2'; // vacinas


const xMasterKey = '$2b$10$C/H.VFdgfTR6E8YtcX7MBOLNtZQOZ07pITaZNATiIlVI0wQPnE.cO'; // usada para escrita
const xAccessKey = '$2b$10$vo5ahIn3aEWhnCYQ9kMg9.v9CrISlIllx9DYFXLw45KDnSdW22RQq'; // usada para leitura

const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;


function lerDadosDoBin() {
    const headers = {
      'X-Access-Key': xAccessKey,
    };
  
    fetch(apiUrl, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Faça algo com os dados lidos
        cursosData = data.record
      })
      .catch((error) => {
        console.error('Erro ao ler dados do bin:', error);
      });
  }

// // Função para salvar dados no bin; Versão gepeto, não funcionou nos testes
// function salvarDadosNoBin(data) {
//   fetch(apiUrl, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       // 'secret-key': apiKey,
//       'secret-key': xMasterKey,
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log('Dados salvos com sucesso:', responseData);
//       // Pode realizar ações adicionais após salvar os dados, se necessário
//     })
//     .catch((error) => {
//       console.error('Erro ao salvar dados no bin:', error);
//     });
// }

function salvarDadosVersaoDocs(){
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText);
    }
  };
  
  req.open("PUT", `https://api.jsonbin.io/v3/b/${binId}`, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader("X-Master-Key", xMasterKey);
  req.send(JSON.stringify(cursosData));  
}

// só pra usar nos testes funcionais
function aumentarUmRegistro(){
  let curso =         {
    "id": 5,
    "tipo": "forum", 
    "nome": "tabnews",
    "descricao": "Plataforma de artigos e trocação de ideias",
    "link": "tabnews.com.br"
}

  cursosData.cursos.push(curso)
}


let cursosData = {
  cursos: [
    {
      id: 0,
      nome: 'HTML m1 do Guanabara',
      descricao: 'O melhor curso para aprender front',
      link: 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
    },
    {
      id: 2,
      nome: 'HTML m2 do Guanabara',
      descricao: 'A sequência do melhor curso para aprender front',
      link: 'https://www.youtube.com/watch?v=vPNIAJ9B4hg&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s',
    }
  ]
};


