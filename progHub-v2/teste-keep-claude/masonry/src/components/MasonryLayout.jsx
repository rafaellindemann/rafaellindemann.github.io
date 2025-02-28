

// BUGADO
import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

// CSS para o componente
const styles = {
  container: {
    width: '100%',
    padding: '20px'
  },
  grid: {
    width: '100%'  // Isso é importante!
  },
  gridItem: {
    marginBottom: '16px'
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    padding: '16px',
    height: '100%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease'
  },
  cardTitle: {
    marginBottom: '10px',
    color: '#202124'
  },
  cardContent: {
    color: '#5f6368',
    lineHeight: 1.5
  }
};

// Componente Card
const Card = ({ title, content }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardContent}>{content}</p>
  </div>
);

// Componente principal MasonryLayout
const MasonryLayout = ({ cards }) => {
  const gridRef = useRef(null);
  const masonryInstance = useRef(null);

  useEffect(() => {
    // Adicionar regras CSS para responsividade
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .grid {
        width: 100% !important; /* Força a largura total */
      }
      .grid-sizer,
      .grid-item {
        width: 100%;
      }
      @media (min-width: 576px) {
        .grid-sizer,
        .grid-item {
          width: calc(50% - 8px);
        }
      }
      @media (min-width: 768px) {
        .grid-sizer,
        .grid-item {
          width: calc(33.333% - 11px);
        }
      }
      @media (min-width: 992px) {
        .grid-sizer,
        .grid-item {
          width: calc(25% - 12px);
        }
      }
    `;
    document.head.appendChild(styleElement);

    // Inicializar o Masonry quando o componente for montado
    if (gridRef.current) {
      // Certifique-se que o elemento grid tenha largura total
      gridRef.current.style.width = '100%';
      
      masonryInstance.current = new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 16
      });
    }

    // Função para recalcular o layout após o carregamento de imagens ou mudanças
    const recalculateLayout = () => {
      if (masonryInstance.current) {
        masonryInstance.current.layout();
      }
    };

    // Recalcular após carregamento completo
    window.addEventListener('load', recalculateLayout);
    
    // Recalcular após 100ms para garantir que tudo foi carregado
    const timer = setTimeout(recalculateLayout, 100);

    // Adicionar event listener para recalcular em caso de redimensionamento
    window.addEventListener('resize', recalculateLayout);

    return () => {
      // Limpar ao desmontar o componente
      clearTimeout(timer);
      window.removeEventListener('load', recalculateLayout);
      window.removeEventListener('resize', recalculateLayout);
      document.head.removeChild(styleElement);
      if (masonryInstance.current) {
        masonryInstance.current.destroy();
      }
    };
  }, [cards]); // Reconstruir quando os cards mudarem

  return (
    <div style={styles.container}>
      <div className="grid" ref={gridRef} style={{width: '100%'}}>
        <div className="grid-sizer"></div>
        {cards.map((card, index) => (
          <div className="grid-item" key={index} style={styles.gridItem}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryLayout;



// import React, { useEffect, useRef } from 'react';
// import Masonry from 'masonry-layout';

// // CSS para o componente
// const styles = {
//   container: {
//     width: '100%',
//     padding: '20px'
//   },
//   grid: {
//     width: '100%'
//   },
//   gridItem: {
//     marginBottom: '16px'
//   },
//   card: {
//     background: 'white',
//     borderRadius: '8px',
//     padding: '16px',
//     height: '100%',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//     transition: 'box-shadow 0.3s ease'
//   },
//   cardTitle: {
//     marginBottom: '10px',
//     color: '#202124'
//   },
//   cardContent: {
//     color: '#5f6368',
//     lineHeight: 1.5
//   }
// };

// // Componente Card
// const Card = ({ title, content }) => (
//   <div style={styles.card}>
//     <h3 style={styles.cardTitle}>{title}</h3>
//     <p style={styles.cardContent}>{content}</p>
//   </div>
// );

// // Componente principal MasonryLayout
// const MasonryLayout = ({ cards }) => {
//   const gridRef = useRef(null);
//   const masonryInstance = useRef(null);

//   useEffect(() => {
//     // Inicializar o Masonry quando o componente for montado
//     if (gridRef.current) {
//       masonryInstance.current = new Masonry(gridRef.current, {
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true,
//         gutter: 16
//       });
//     }

//     // Função para recalcular o layout após o carregamento de imagens ou mudanças
//     const recalculateLayout = () => {
//       if (masonryInstance.current) {
//         masonryInstance.current.layout();
//       }
//     };

//     // Recalcular após 100ms para garantir que tudo foi carregado
//     const timer = setTimeout(recalculateLayout, 100);

//     // Adicionar event listener para recalcular em caso de redimensionamento
//     window.addEventListener('resize', recalculateLayout);

//     // Limpar ao desmontar o componente
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('resize', recalculateLayout);
//       if (masonryInstance.current) {
//         masonryInstance.current.destroy();
//       }
//     };
//   }, [cards]); // Reconstruir quando os cards mudarem

//   // Criar classes CSS dinâmicas para responsividade
//   useEffect(() => {
//     // Adicionar regras CSS para responsividade
//     const styleElement = document.createElement('style');
//     styleElement.textContent = `
//       .grid-sizer,
//       .grid-item {
//         width: 100%;
//       }
//       @media (min-width: 576px) {
//         .grid-sizer,
//         .grid-item {
//           width: calc(50% - 10px);
//         }
//       }
//       @media (min-width: 768px) {
//         .grid-sizer,
//         .grid-item {
//           width: calc(33.333% - 12px);
//         }
//       }
//       @media (min-width: 992px) {
//         .grid-sizer,
//         .grid-item {
//           width: calc(25% - 12px);
//         }
//       }
//     `;
//     document.head.appendChild(styleElement);

//     return () => {
//       document.head.removeChild(styleElement);
//     };
//   }, []);

//   return (
//     <div style={styles.container}>
//       <div className="grid" ref={gridRef}>
//         <div className="grid-sizer"></div>
//         {cards.map((card, index) => (
//           <div className="grid-item" key={index} style={styles.gridItem}>
//             <Card title={card.title} content={card.content} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default MasonryLayout;