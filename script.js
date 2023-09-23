
let filtrados = vacinas // mostra os recursos que atendem os filtros aplicados

let filtros = []

function toggleFiltroCursosYT(){
    if(filtros.includes('CursosYT')){
        filtros.splice(filtros.indexOf('CursosYT'),1)
        document.getElementById('btCursosYT').setAttribute('class','botao')
    }else{
        filtros.push('CursosYT')
        document.getElementById('btCursosYT').setAttribute('class','botaoClicado')
        console.log('esle');
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

}

function aplicarFiltroCursosYT(){
    filtrados = filtrados.filter( (reg) => reg.categoria == 'Curso Youtube')
}

function atualizarFiltrosAplicados(){
    if(filtros.length == 0){
        filtrados = vacinas
    }else{
        // limpar os filtrados antes de aplicar novamente
        aplicarFiltroCursosYT()
    }
    
}

window.onload = atualizarFiltrosAplicados()