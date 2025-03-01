import React, { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { Masonry } from '@mui/lab';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

// Componente Card envolvido com motion
const MotionCard = motion(({ resource, ...rest }) => (
  <div {...rest}>
    <Card r={resource} />
  </div>
));

function Body() {
  const { categories, resources, handleFilter, filteredResources, setFilteredResources } = useContext(GlobalContext);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Calculando colunas responsivas
  const getColumnCount = () => {
    if (window.innerWidth < 600) return 1; // xs
    if (window.innerWidth < 960) return 2; // sm
    if (window.innerWidth < 1280) return 3; // md
    return 4; // lg e acima
  };

  const [columns, setColumns] = useState(getColumnCount());

  // Gerenciar redimensionamento
  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumnCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gerenciar filteredResources e carregamento inicial
  useEffect(() => {
    if (isInitialLoad) {
      // Carregamento inicial - mostrar todos os itens sem animação de scroll
      setVisibleItems(filteredResources);
      setIsInitialLoad(false);
    } else {
      // Mudança de filtro - reset e animação
      setVisibleItems([]);
      
      // Pequena pausa antes de mostrar os novos itens
      const timer = setTimeout(() => {
        setVisibleItems(filteredResources);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [filteredResources, isInitialLoad]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05, // Reduzido para acelerar a animação
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default', 
        color: 'text.primary',
        minHeight: '100vh',
        py: 3
      }}
    >
      <Container maxWidth="xl">
        <AnimatePresence>
          <Masonry 
            columns={columns} 
            spacing={2}
            sx={{ margin: 0 }}
          >
            {visibleItems.map((resource, index) => (
              <MotionCard
                key={resource.id}
                resource={resource}
                custom={Math.min(index, 10)} // Limita o atraso máximo
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                layout
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              />
            ))}
          </Masonry>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default Body;



// import React, { useContext, useEffect, useState } from 'react';
// import { Box, Container } from '@mui/material';
// import { Masonry } from '@mui/lab';
// import { GlobalContext } from '../contexts/GlobalContext';
// import Card from './Card';
// import { TransitionGroup } from 'react-transition-group';
// import { motion, AnimatePresence } from 'framer-motion';

// // Componente Card envolvido com motion
// const MotionCard = motion(({ resource, ...rest }) => (
//   <div {...rest}>
//     <Card r={resource} />
//   </div>
// ));

// function Body() {
//   const { categories, resources, handleFilter, filteredResources, setFilteredResources } = useContext(GlobalContext);
//   const [visibleItems, setVisibleItems] = useState([]);
  
//   // Calculando colunas responsivas
//   const getColumnCount = () => {
//     if (window.innerWidth < 600) return 1; // xs
//     if (window.innerWidth < 960) return 2; // sm
//     if (window.innerWidth < 1280) return 3; // md
//     return 4; // lg e acima
//   };

//   const [columns, setColumns] = useState(getColumnCount());

//   // Gerenciar redimensionamento
//   useEffect(() => {
//     const handleResize = () => {
//       setColumns(getColumnCount());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Implementar carregamento lazy no scroll
//   useEffect(() => {
//     // Começar com apenas os primeiros itens
//     setVisibleItems(filteredResources.slice(0, 8));
    
//     const handleScroll = () => {
//       const scrollPosition = window.innerHeight + window.scrollY;
//       const pageHeight = document.body.offsetHeight;
      
//       // Se chegou perto do final da página, mostrar mais itens
//       if (pageHeight - scrollPosition < 500) {
//         // Adicionar mais 4 itens
//         setVisibleItems(prev => {
//           if (prev.length < filteredResources.length) {
//             return [...prev, ...filteredResources.slice(prev.length, prev.length + 4)];
//           }
//           return prev;
//         });
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [filteredResources]);

//   // Efeito para animação quando filtros mudam
//   useEffect(() => {
//     // Reset dos itens visíveis quando muda o filtro
//     setVisibleItems([]);
    
//     // Pequena pausa antes de mostrar os novos itens
//     const timer = setTimeout(() => {
//       setVisibleItems(filteredResources.slice(0, 8));
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, [filteredResources]);

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: i => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }),
//     exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
//   };

//   return (
//     <Box 
//       sx={{ 
//         bgcolor: 'background.default', 
//         color: 'text.primary',
//         minHeight: '100vh',
//         py: 3
//       }}
//     >
//       <Container maxWidth="xl">
//         <AnimatePresence>
//           <Masonry 
//             columns={columns} 
//             spacing={2}
//             sx={{ margin: 0 }}
//           >
//             {visibleItems.map((resource, index) => (
//               <MotionCard
//                 key={resource.id}
//                 resource={resource}
//                 // custom={index % 8} // Para escalonar as animações
//                 custom={index % 18} // Para escalonar as animações
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={cardVariants}
//                 layout
//                 whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
//               />
//             ))}
//           </Masonry>
//         </AnimatePresence>
//       </Container>
//     </Box>
//   );
// }

// export default Body;


