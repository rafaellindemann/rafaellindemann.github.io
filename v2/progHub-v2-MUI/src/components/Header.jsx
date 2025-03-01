// layout do header ainda não tá aceitável
// acrescentar botões pra limpar filtros


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
  const { categories, resources, handleFilter } = useContext(GlobalContext);
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

  const handleCategoryClick = (category) => {
    handleFilter(category);
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
                <Button key={category} onClick={() => handleFilter(category)}>
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        )}

        {/* Botões de ação (sempre visíveis, mesmo no mobile) */}
        <Box 
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
        </Box>
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
//   const { categories, resources, handleFilter } = useContext(GlobalContext);
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

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#FFFFFF",
//         color: "text.primary",
//         boxShadow: 1,
//         padding: 1,
//       }}
//     >
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "0 16px",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Logo à esquerda */}
//         <Box
//           onClick={() => handleFilter(null)}
//           sx={{
//             cursor: "pointer",
//             display: "flex",
//             alignItems: "center",
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
//           <>
//             <IconButton
//               color="primary"
//               aria-label="menu"
//               onClick={handleMenuClick}
//               edge="start"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
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
//           <Box 
//             sx={{ 
//               display: "flex", 
//               justifyContent: "center", 
//               flexGrow: 1 
//             }}
//           >
//             <ButtonGroup
//               disableElevation
//               variant="contained"
//               color="primary"
//               sx={{
//                 flexWrap: "wrap",
//                 justifyContent: "center",
//                 "& .MuiButtonGroup-grouped": {
//                   margin: "4px 0", // Para evitar que os botões fiquem muito juntos quando quebram para a próxima linha
//                 },
//               }}
//             >
//               {categories.map((category) => (
//                 <Button key={category} onClick={() => handleFilter(category)}>
//                   {category}
//                 </Button>
//               ))}
//             </ButtonGroup>
//           </Box>
//         )}

//         {/* Botões de ação à direita */}
//         <Box 
//           sx={{ 
//             display: "flex", 
//             alignItems: "center",
//             // Esconder os botões de ação em telas muito pequenas
//             display: { xs: isMobile ? "none" : "flex", sm: "flex" } 
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
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;


