# vacina
Uma coleção de links úteis para devs e aprendizes :D




Opção: https://myjson.online/

    - Criei a conta com o login rafaelld pelo google.
    - a leitura com o template de get que tem no próprio bin funcionou;
    - o que o gepeto gerou deu nhaca.
    - Salvei um js pra cada um pra analisar com mais tempo depois.

## 230917 1600
Chaves separadas;
Já lê e escreve, mas o formato da resposta ainda está encapsulado. Preciso remover somente o dado de lá.
Após isso, criar tipo uma libzinha para reaproveitamento. talvez um método setup(binId, accesskey, masterKey).
    - Seria interessante a lib criar o objeto handler 
    - ex: jsonBin.setup(), jsonBin.read(), jsonBin.write()

## 230917 1315
Consegui salvar o hello world da documentação usando a master key
A leitura está funcionando com a access key, mas não com a master

Posso tentar fazer a gravação com a master e a leitura com a access.
    - primeiro preciso gravar um conteúdo de verdade com a master;
    - se isso funcionar, crio uma variável pra cada key e uso cada uma pra uma ação diferente.



## 230917 1200
leitura private funfa. Vetor cai em 
cursosData.record.vacinas

acrescentei um botao para modificar o vetor antes de enviar.

Vou tentar seguir a documentação na função de salvar. 


## 230916 1443: 
usando a access key que eu criei consegui ler private, mas deu erro ao tentar salvar

" teste.js:48     PUT https://api.jsonbin.io/v3/b/6505b84bd972192679c4e9e2 401
salvarDadosNoBin @ teste.js:48
(anonymous) @ VM173:1
teste.js:58 Dados salvos com sucesso: {message: 'You need to pass X-Master-Key or X-Access-Key in the header to update a private bin'} "


## 230916: consegui ler bin público, mas ainda deu erro no bin privado:

lerDadosDoBin()
undefined
teste.js:31     GET https://api.jsonbin.io/v3/b/6505b84bd972192679c4e9e2 401
lerDadosDoBin @ teste.js:31
(anonymous) @ VM576:1
teste.js:36 {message: "X-Access-Key is invalid or the bin doesn't belong to your account"}


troca de ideias com a seniora: https://chat.openai.com/c/491f087b-7c77-46ec-b71d-7734cb430080



