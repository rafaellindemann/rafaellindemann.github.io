
let filtrados = vacinas // mostra os recursos que atendem os filtros aplicados

let filtros = []

function limparTodosFiltros(){
    filtros = []
    document.getElementById('btCurso Youtube').setAttribute('class','botao')
    document.getElementById('btCanal Youtube').setAttribute('class','botao')
    document.getElementById('btCurso').setAttribute('class','botao')
    document.getElementById('btSites').setAttribute('class','botao')
    document.getElementById('btCarreira').setAttribute('class','botao')
    document.getElementById('btJogos').setAttribute('class','botao')
    document.getElementById('btRepositórios').setAttribute('class','botao')
    document.getElementById('btImagens').setAttribute('class','botao')
    document.getElementById('btFerramentas').setAttribute('class','botao')
    document.getElementById('btLivros').setAttribute('class','botao')
    document.getElementById('btExercícios').setAttribute('class','botao')
    document.getElementById('btFóruns').setAttribute('class','botao')
    document.getElementById('btPodcasts').setAttribute('class','botao')
    document.getElementById('btRedes').setAttribute('class','botao')
    document.getElementById('btBalaio').setAttribute('class','botao')


    //att tela?
}

function tratarCliqueCategorias(clicado){ 
    if(filtros.length == 0){ 
        filtros.push(clicado)
        document.getElementById('bt' + clicado).setAttribute('class','botaoClicado')

    }else if(filtros.includes(clicado)){
        limparTodosFiltros();
    }else if(!filtros.includes(clicado)){
        limparTodosFiltros()
        filtros.push(clicado)
        document.getElementById('bt' + clicado).setAttribute('class','botaoClicado')
    }

    // TODO: aplicar o filtro pra gerar o filtrados
    if(filtros.length > 0){
        filtrados = vacinas.filter( (reg) => reg.categoria == filtros[0])
    }else{
        filtrados = vacinas
    }
    // TODO: chamar a escrita na tela
    escreverRegistrosNaTela()
    // TODO: Apagar tudo que não está mais sendo usado

}

// TODO: toggle dos demais botões
function toggleFiltroCursosYT(){
    console.log(filtros);
    if(filtros.includes('Curso Youtube')){
        // filtros.splice(filtros.indexOf('Curso Youtube'),1)
        // document.getElementById('btCursosYT').setAttribute('class','botao')
        filtros = []
        limparTodosFiltros()
    }else{
        limparTodosFiltros()
        filtros.push('Curso Youtube')
        document.getElementById('btCursosYT').setAttribute('class','botaoClicado')
    }
    escreverRegistrosNaTela();
}
function toggleFiltroBalaio(){
    if(filtros.includes('Balaio')){
        // filtros.splice(filtros.indexOf('Balaio'),1)
        // document.getElementById('btBalaio').setAttrbute('class','botao')
        filtros = []
        limparTodosFiltros()
    }else{
        limparTodosFiltros()
        filtros.push('Balaio')
        document.getElementById('btBalaio').setAttribute('class','botaoClicado')
    }
    escreverRegistrosNaTela();
}

function escreverRegistro(reg){
    // document.getElementById('mainRegistros').innerHTML += reg
    // {nome: '', categoria: '', descricao: '', link: '', tags: []},
    let main = document.getElementById('mainRegistros')

    let texto = document.createTextNode(reg.nome)
    let nome = document.createElement('h2')
    nome.appendChild(texto)

    texto = document.createTextNode('Categoria: ' + reg.categoria)
    let categoria = document.createElement('p')
    categoria.appendChild(texto)
    
    texto = document.createTextNode(reg.descricao)
    let descricao = document.createElement('p')
    descricao.appendChild(texto)

    texto = document.createTextNode('Acessar recurso')
    let link = document.createElement('a')
    link.appendChild(texto)
    link.setAttribute('href', reg.link)

    texto = document.createTextNode('#: ' + reg.tags)
    let tags = document.createElement('p')
    tags.appendChild(texto)
    tags.setAttribute('class', 'tags')
    
    let artigo = document.createElement('article')
    artigo.appendChild(nome)
    artigo.appendChild(descricao)
    artigo.appendChild(categoria)
    artigo.appendChild(link)
    artigo.appendChild(tags)
    artigo.setAttribute('class', 'artigo')

    main.appendChild(artigo)
}

function escreverRegistrosNaTela(){
    atualizarFiltrosAplicados();
    document.getElementById('mainRegistros').innerHTML = ''
    filtrados.map((vacina) => escreverRegistro(vacina))

    document.getElementById('divStats').innerHTML = filtrados.length + '/' + vacinas.length
}

function aplicarFiltroCategorias(){
    filtrados = filtrados.filter( (reg) => reg.categoria == filtros[0])
}

function atualizarFiltrosAplicados(){
    if(filtros.length == 0){
        filtrados = vacinas
    }else{
        // limpar os filtrados antes de aplicar novamente
        aplicarFiltroCategorias()
    }
    // TODO: aqui serão aplicados os filtros de pesquisa
    
}

window.onload = atualizarFiltrosAplicados()