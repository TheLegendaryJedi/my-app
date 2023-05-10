import React from 'react';
import { FilterMenuContainer } from './FilterMenu.styled';
import Filter from '../price-filter/Filter';

function FilterMenu({data, setData}) {
    const filtersList = ['0-500', '500-1000', '1000'];
    
    return (
        <FilterMenuContainer>
            <div className='menu__close'>X</div>
            <br></br>
            {filtersList.map((el) => (
            <Filter data={data} setData={setData} name={el} type="range" values={el.split("-")}/>
            )
            )}
        </FilterMenuContainer>
    );
}

export default FilterMenu;
