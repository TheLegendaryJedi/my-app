import styled from "styled-components";


const FilterMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:2rem;
    border-right:2px solid #eee;
    border-top:2px solid #eee;
    padding: 1rem;
    row-gap: 10px;

    .menu{

        &__close{
            text-align: right;
            
        }
    }
`;

export { FilterMenuContainer };
