// URL do serviço myjson.online
const apiUrl = 'https://api.myjson.com/bins';

const BIN_ID = '7cfd121d-10c9-4e8d-8c30-d29932e480bd'

// Função para ler dados de um bin específico no myjson.online
function lerDadosDoBin(binId) {
  const binUrl = `${apiUrl}/${binId}`;

  fetch(binUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('Dados lidos do bin:', data);
      // Faça algo com os dados lidos
    })
    .catch((error) => {
      console.error('Erro ao ler dados do bin:', error);
    });
}

// Função para gravar dados em um novo bin no myjson.online
function gravarDadosNoBin(data) {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Dados gravados com sucesso. Bin ID:', responseData.uri);
      // Faça algo após gravar os dados, se necessário
    })
    .catch((error) => {
      console.error('Erro ao gravar dados no bin:', error);
    });
}

// Exemplo de uso:

// Dados que você deseja gravar
const cursosData = {
  cursos: [
    {
      id: 1,
      nome: 'Curso de JavaScript',
      descricao: 'Um curso introdutório de JavaScript',
      link: 'https://example.com/javascript-course',
    },
    {
      id: 2,
      nome: 'Curso de HTML e CSS',
      descricao: 'Aprenda HTML e CSS do zero',
      link: 'https://example.com/html-css-course',
    },
  ],
};

// Para gravar dados em um novo bin
gravarDadosNoBin(cursosData);

// Para ler dados de um bin existente
// Substitua 'BIN_ID' pelo ID do bin que você deseja ler
lerDadosDoBin(BIN_ID);
