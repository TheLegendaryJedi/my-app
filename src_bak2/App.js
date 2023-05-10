import { useState } from "react";
import Button from "./components/button/button";
import Popup from "./components/popup/popup";
import { PopupContainer } from "./components/popup/popup.styles";
import ProductList from "./components/product-list/product-list";

// jsx uma maneira de termos javascript mas estruturado de uma forma html-esca

// no jsx, quando temos um componente de React (button) o que seriam attrs em html,
// é um acrescento ao objeto de propriedas que o nosso componente(Funciontal Component) recebe

// jsx
// props de um componente
// css vs css modules vs sass vs styled components
// state (react hooks)
// conditional rendering
// map; list; keys

function App() {
  const [popupProperties, setPopupProperties] = useState({});
  return (
    <>
        <FilterMenu />
      <Popup
        title={popupProperties.title}
        description={popupProperties.description}
        type={popupProperties.type}
        setPopupProperties={setPopupProperties}
      />
      <ProductList setPopupProperties={setPopupProperties} />
    </>
  );
}

export default App;
