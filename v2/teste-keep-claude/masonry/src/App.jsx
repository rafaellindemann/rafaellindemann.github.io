import MasonryLayout from './components/MasonryLayout';
import MasonryLayoutPuroCSS from './components/MasonryLayoutPuroCSS';

function App() {
  const cardData = [
    { title: 'Título do Card 1', content: 'Conteúdo curto.Conteúdo curto.Conteúdo curto.Conteúdo curto.' },
    { title: 'Título do Card 2', content: 'Conteúdo médio com mais algumas palavras para mostrar a diferença de altura entre os cards.' },
    { title: 'Título do Card 3', content: 'Conteúdo pequeno.' },
    { title: 'Título do Card 4', content: 'Este é um exemplo de um card com conteúdo longo. O layout masonry permite que os cards se organizem de forma eficiente.' },
    { title: 'Título do Card 1', content: 'Conteúdo curto.Conteúdo curto.Conteúdo curto.' },
    { title: 'Título do Card 2', content: 'Conteúdo médio com mais algumas palavras para mostrar a diferença de altura entre os cards.' },
    { title: 'Título do Card 3', content: 'Conteúdo pequeno.' },
    { title: 'Título do Card 4', content: 'Este é um exemplo de um card com conteúdo longo. O layout masonry permite que os cards se organizem de forma eficiente.' },
    { title: 'Título do Card 1', content: 'Conteúdo curto.' },
    { title: 'Título do Card 2', content: 'Conteúdo médio com mais alguConteúdo curto.mas palavras para mostrar a diferença de altura entre os cards.' },
    { title: 'Título do Card 3', content: 'ConteúdoConteúdo curto.Conteúdo curto.VConteúdo curto.Conteúdo curto. pequeno.' },
    { title: 'Título do Card 4', content: 'Este é um exemplo de um carConteúdo curto.Conteúdo curto.d com conteúdo longo. O layout masonry permite que os cards se organizem de forma eficiente.' },
    { title: 'Título do Card 1', content: 'ConConteúdo curto.Conteúdo curto.teúdo curto.' },
    { title: 'Título do Card 2', content: 'Conteúdo médio com mais alConteúdo curto.Conteúdo curto.gumas palavras para mostrar a diferença de altura entre os cards.' },
    { title: 'Título do Card 3', content: 'Conteúdo pequeConteúdo curto.no.' },
    { title: 'Título do Card 4', content: 'Este é um exemplo de um card coConteúdo curto.m conteúdo longo. O layout masonry permite que os cards se organizem de forma eficiente.' },
  ];

  return (
    <div className="App">
      {/* <MasonryLayout cards={cardData} /> */}
      <MasonryLayoutPuroCSS cards={cardData}/>
    </div>
  );
}

export default App;