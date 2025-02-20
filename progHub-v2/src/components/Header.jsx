import './Header.css'

import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext'

function Header(){
    const { categories, resources, handleFilter } = useContext(GlobalContext)
  return (
    <nav className="navbar-container">
      <div id="botaoHome" onClick={() => handleFilter(null)}>
        <img src="./img/logo_pH_header.png" alt="logo progHub" id="logoHeader" />
      </div>
      <div id="divBtCategorias">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className="botao"
            id={`bt${category}`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* <div id="headerContribuicoes">
        <div className="contribuicoesBotoes">
          <button className="botao" onClick={() => mostrarModal()}>
            <span className="material-icons" id="icone">➕</span>
          </button>
          <button className="botao" onClick={() => modSobre.showModal()}>
            <span className="material-icons" id="icone">❓</span>
          </button>
        </div>
        <div id="divStats"></div>
      </div> */}
    </nav>
  );
};

export default Header;