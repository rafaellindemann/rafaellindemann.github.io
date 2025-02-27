import React, { useContext, useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  ButtonGroup,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalContext } from '../contexts/GlobalContext';

function Header() {
  const { categories, resources, handleFilter } = useContext(GlobalContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Para o menu mobile
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleCategoryClick = (category) => {
    handleFilter(category);
    handleMenuClose();
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#FFFFFF',
        color: 'text.primary',
        boxShadow: 1,
        padding: 1
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <Box 
          onClick={() => handleFilter(null)} 
          sx={{ 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center' 
          }}
        >
          <img 
            src="./img/logo_pH_header.png" 
            alt="logo progHub" 
            style={{ height: '40px' }} 
          />
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={handleMenuClick}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              {categories.map((category) => (
                <MenuItem 
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                >
                  <Typography variant="body1">{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <ButtonGroup variant="outlined" color="primary">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        )}
        
        {/* Área comentada no código original */}
        {/* <Box>
          <ButtonGroup>
            <IconButton color="primary" onClick={() => mostrarModal()}>
              <AddIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => modSobre.showModal()}>
              <HelpIcon />
            </IconButton>
          </ButtonGroup>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;


// import React, { useContext } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Button, 
//   Box, 
//   ButtonGroup,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   Menu,
//   MenuItem,
//   Typography
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { GlobalContext } from '../contexts/GlobalContext';
// import { useState } from 'react';

// function Header() {
//   const { categories, resources, handleFilter } = useContext(GlobalContext);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
//   // Para o menu mobile
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
  
//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
  
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
  
//   const handleCategoryClick = (category) => {
//     handleFilter(category);
//     handleMenuClose();
//   };

//   return (
//     <AppBar 
//       position="static" 
//       sx={{ 
//         backgroundColor: theme.palette.mode === 'light' ? '#8B4513' : '#5D4037',
//         padding: 1
//       }}
//     >
//       <Toolbar sx={{ 
//         display: 'flex', 
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap'
//       }}>
//         <Box 
//           onClick={() => handleFilter(null)} 
//           sx={{ 
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center' 
//           }}
//         >
//           <img 
//             src="./img/logo_pH_header.png" 
//             alt="logo progHub" 
//             style={{ height: '40px' }} 
//           />
//         </Box>
        
//         {isMobile ? (
//           <>
//             <IconButton
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenuClick}
//               edge="start"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleMenuClose}
//             >
//               {categories.map((category) => (
//                 <MenuItem 
//                   key={category}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <Typography variant="body1">{category}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </>
//         ) : (
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//             <ButtonGroup variant="contained" color="primary">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   onClick={() => handleFilter(category)}
//                   sx={{ 
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                     }
//                   }}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </ButtonGroup>
//           </Box>
//         )}
        
//         {/* Área comentada no código original */}
//         {/* <Box>
//           <ButtonGroup>
//             <IconButton color="inherit" onClick={() => mostrarModal()}>
//               <AddIcon />
//             </IconButton>
//             <IconButton color="inherit" onClick={() => modSobre.showModal()}>
//               <HelpIcon />
//             </IconButton>
//           </ButtonGroup>
//         </Box> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;


// import './Header.css'

// import { useContext } from "react";
// import { GlobalContext } from '../contexts/GlobalContext'

// function Header(){
//     const { categories, resources, handleFilter } = useContext(GlobalContext)
//   return (
//     <nav className="navbar-container">
//       <div id="botaoHome" onClick={() => handleFilter(null)}>
//         <img src="./img/logo_pH_header.png" alt="logo progHub" id="logoHeader" />
//       </div>
//       <div id="divBtCategorias">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => handleFilter(category)}
//             className="botao"
//             id={`bt${category}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       {/* <div id="headerContribuicoes">
//         <div className="contribuicoesBotoes">
//           <button className="botao" onClick={() => mostrarModal()}>
//             <span className="material-icons" id="icone">➕</span>
//           </button>
//           <button className="botao" onClick={() => modSobre.showModal()}>
//             <span className="material-icons" id="icone">❓</span>
//           </button>
//         </div>
//         <div id="divStats"></div>
//       </div> */}
//     </nav>
//   );
// };

// export default Header;