// FUNCIONA

import React from 'react';

// CSS para o componente
const styles = {
  container: {
    width: '100%',
    padding: '20px'
  },
  grid: {
    columnCount: 1,
    columnGap: '16px',
    width: '100%',
    '@media (min-width: 576px)': {
      columnCount: 2
    },
    '@media (min-width: 768px)': {
      columnCount: 3
    },
    '@media (min-width: 992px)': {
      columnCount: 4
    }
  },
  gridItem: {
    breakInside: 'avoid',
    marginBottom: '16px'
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    padding: '16px',
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
const MasonryLayoutPuroCSS = ({ cards }) => {
  // Criar classes CSS dinâmicas para responsividade
  React.useEffect(() => {
    // Adicionar regras CSS para responsividade
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .masonry-grid {
        column-count: 1;
        column-gap: 16px;
        width: 100%;
      }
      
      @media (min-width: 576px) {
        .masonry-grid {
          column-count: 2;
        }
      }
      
      @media (min-width: 768px) {
        .masonry-grid {
          column-count: 3;
        }
      }
      
      @media (min-width: 992px) {
        .masonry-grid {
          column-count: 4;
        }
      }
      
      .masonry-item {
        break-inside: avoid;
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div className="masonry-grid">
        {cards.map((card, index) => (
          <div className="masonry-item" key={index}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryLayoutPuroCSS;