function lerDadosDoBin() {
    const headers = {
      'X-Access-Key': 'SUA_CHAVE_DE_ACESSO', // Substitua 'SUA_CHAVE_DE_ACESSO' pela sua chave de acesso específica para o bin privado.
    };
  
    fetch(apiUrl, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Faça algo com os dados lidos
      })
      .catch((error) => {
        console.error('Erro ao ler dados do bin:', error);
      });
  }