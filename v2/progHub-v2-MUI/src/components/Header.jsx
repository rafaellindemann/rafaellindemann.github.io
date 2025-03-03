// acrescentar botões pra limpar filtros
// Acrescentar contador de registros
// Acrescentar botões de modal da biscoitagem ou card
// ajeitar o layout do header para o flexbox não ficar estranho
// mudar a cor do botao do hamburger


import React, { useContext, useState } from "react";
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import HelpIcon from "@mui/icons-material/Help";
import { GlobalContext } from "../contexts/GlobalContext";

function Header() {
  const { categories, resources, handleFilter, filters } = useContext(GlobalContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Para o menu mobile
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Verifica se uma categoria está selecionada
  const isCategorySelected = (category) => {
    return filters && filters.includes(category);
  };

  // Função para alternar entre filtrar e limpar filtro
  const toggleFilter = (category) => {
    if (isCategorySelected(category)) {
      // Se a categoria já está selecionada, limpa o filtro
      handleFilter(null);
    } else {
      // Se não está selecionada, aplica o filtro
      handleFilter(category);
    }
  };

  // Versão para o menu mobile que também fecha o menu
  const handleCategoryClick = (category) => {
    toggleFilter(category);
    handleMenuClose();
  };

  // Funções temporárias para os botões de ação
  const mostrarModal = () => {
    console.log("Abrir modal de adição");
    // Implementação futura
  };

  const mostrarSobre = () => {
    console.log("Abrir modal sobre");
    // Implementação futura
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        backgroundColor: "snow",
        bgcolor: '#6B8E23', 
        color: "text.primary",
        boxShadow: 1,
        padding: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2, // Espaçamento entre os elementos
          padding: "0 16px",
        }}
      >
        {/* Logo à esquerda (sempre visível) */}
        <Box
          onClick={() => handleFilter(null)}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            order: 1, // Ordem de exibição: primeiro
          }}
        >
          <img
            src="./img/JAMANJO-2-23-2025.png"
            alt="logo progHub"
            style={{ height: "40px" }}
          />
        </Box>

        {/* Menu mobile ou botões centralizados */}
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              order: 2, // Ordem de exibição: segundo
            }}
          >
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  selected={isCategorySelected(category)}
                  sx={{
                    backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                    "&.Mui-selected": {
                      color: "secondary.main",
                      fontWeight: "bold",
                    }
                  }}
                >
                  <Typography variant="body1">{category}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box 
            sx={{ 
              display: "flex",
              flexGrow: 1, // Permite crescer e ocupar espaço disponível
              justifyContent: "flex-start", // Alinha à esquerda após o logo
              flexWrap: "wrap",
              order: 2, // Ordem de exibição: segundo
            }}
          >
            <ButtonGroup
              disableElevation
              variant="contained"
              color="primary"
              sx={{
                flexWrap: "wrap",
                "& .MuiButtonGroup-grouped": {
                  margin: "4px 2px", // Espaçamento vertical e horizontal
                },
              }}
            >
              {categories.map((category) => (
                <Button 
                  key={category} 
                  onClick={() => toggleFilter(category)}
                  sx={{
                    color: isCategorySelected(category) ? "secondary.main" : "white",
                    fontWeight: isCategorySelected(category) ? "bold" : "normal",
                    backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
                    '&:hover': {
                      backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        )}

        {/* Botões de ação (sempre visíveis, mesmo no mobile) */}
        {/* <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center",
            marginLeft: "auto", // Empurra para a extrema direita quando possível
            order: 3, // Ordem de exibição: terceiro
          }}
        >
          <ButtonGroup>
            <IconButton color="primary" onClick={mostrarModal}>
              <AddIcon />
            </IconButton>
            <IconButton color="primary" onClick={mostrarSobre}>
              <HelpIcon />
            </IconButton>
          </ButtonGroup>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;



// import React, { useContext, useState } from "react";
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
//   Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AddIcon from "@mui/icons-material/Add";
// import HelpIcon from "@mui/icons-material/Help";
// import { GlobalContext } from "../contexts/GlobalContext";

// function Header() {
//   const { categories, resources, handleFilter, filters } = useContext(GlobalContext);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

//   // Funções temporárias para os botões de ação
//   const mostrarModal = () => {
//     console.log("Abrir modal de adição");
//     // Implementação futura
//   };

//   const mostrarSobre = () => {
//     console.log("Abrir modal sobre");
//     // Implementação futura
//   };

//   // Verifica se uma categoria está selecionada
//   const isCategorySelected = (category) => {
//     return filters && filters.includes(category);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#FFFFFF",
//         backgroundColor: "snow",
//         bgcolor: '#6B8E23', 
//         color: "text.primary",
//         boxShadow: 1,
//         padding: 1,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 2, // Espaçamento entre os elementos
//           padding: "0 16px",
//         }}
//       >
//         {/* Logo à esquerda (sempre visível) */}
//         <Box
//           onClick={() => handleFilter(null)}
//           sx={{
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
//             order: 1, // Ordem de exibição: primeiro
//           }}
//         >
//           <img
//             src="./img/JAMANJO-2-23-2025.png"
//             alt="logo progHub"
//             style={{ height: "40px" }}
//           />
//         </Box>

//         {/* Menu mobile ou botões centralizados */}
//         {isMobile ? (
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               order: 2, // Ordem de exibição: segundo
//             }}
//           >
//             <IconButton
//               color="primary"
//               aria-label="menu"
//               onClick={handleMenuClick}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
//               {categories.map((category) => (
//                 <MenuItem
//                   key={category}
//                   onClick={() => handleCategoryClick(category)}
//                   selected={isCategorySelected(category)}
//                   sx={{
//                     backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
//                     "&.Mui-selected": {
//                       color: "secondary.main",
//                       fontWeight: "bold",
//                     }
//                   }}
//                 >
//                   <Typography variant="body1">{category}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         ) : (
//           <Box 
//             sx={{ 
//               display: "flex",
//               flexGrow: 1, // Permite crescer e ocupar espaço disponível
//               justifyContent: "flex-start", // Alinha à esquerda após o logo
//               flexWrap: "wrap",
//               order: 2, // Ordem de exibição: segundo
//             }}
//           >
//             <ButtonGroup
//               disableElevation
//               variant="contained"
//               color="primary"
//               sx={{
//                 flexWrap: "wrap",
//                 "& .MuiButtonGroup-grouped": {
//                   margin: "4px 2px", // Espaçamento vertical e horizontal
//                 },
//               }}
//             >
//               {categories.map((category) => (
//                 <Button 
//                   key={category} 
//                   onClick={() => handleFilter(category)}
//                   sx={{
//                     color: isCategorySelected(category) ? "secondary.main" : "primary",
//                     fontWeight: isCategorySelected(category) ? "bold" : "normal",
//                     backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.2)' : 'inherit',
//                     '&:hover': {
//                       backgroundColor: isCategorySelected(category) ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </ButtonGroup>
//           </Box>
//         )}

//         {/* Botões de ação (sempre visíveis, mesmo no mobile) */}
//         {/* <Box 
//           sx={{ 
//             display: "flex", 
//             alignItems: "center",
//             marginLeft: "auto", // Empurra para a extrema direita quando possível
//             order: 3, // Ordem de exibição: terceiro
//           }}
//         >
//           <ButtonGroup>
//             <IconButton color="primary" onClick={mostrarModal}>
//               <AddIcon />
//             </IconButton>
//             <IconButton color="primary" onClick={mostrarSobre}>
//               <HelpIcon />
//             </IconButton>
//           </ButtonGroup>
//         </Box> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;




