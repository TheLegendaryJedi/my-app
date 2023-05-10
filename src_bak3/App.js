import { useEffect, useState } from 'react';
import { products } from "./components/product-list/data";
import {createBrowserRouter} from 'react-router-dom';

import Popup from './components/popup/popup';
import ProductList from './components/product-list/product-list';
import FilterMenu from './components/filter-menu/FilterMenu';
import { createBrowserRouter } from 'react-router-dom';

// jsx uma maneira de termos javascript mas estruturado de uma forma html-esca

// no jsx, quando temos um componente de React (button) o que seriam attrs em html,
// é um acrescento ao objeto de propriedas que o nosso componente(Funciontal Component) recebe

// jsx
// props de um componente
// css vs css modules vs sass vs styled components
// state (react hooks)
// conditional rendering
// map; list; keys

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello</div>
    }
]);

function App() {
    // useState -> manutenção de um estado
    const [popupProperties, setPopupProperties] = useState({});
    const [data, setData] = useState([]);

    // useEffect -> reação
    useEffect(() => {
        setData(products)
        }, []
    );

    return (
        <>
            <Popup
                title={popupProperties.title}
                description={popupProperties.description}
                type={popupProperties.type}
                setPopupProperties={setPopupProperties}
            />
            <div style={{display:'flex'}}>
                <FilterMenu setData={setData} />
                <ProductList setPopupProperties={setPopupProperties} data={data} />
            </div>
        </>
    );
}

/**
 * App.js (gere o estado do popup)
 *  Popup
 *  ProductList // passa a gestao do estado de popup
 *    ProductCard // passa a gestao do estado de popup
 */

export default App;
