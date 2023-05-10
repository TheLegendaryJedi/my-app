import styled from 'styled-components';
import './styles.scss';

const StyledProductCard = styled.div`
    border-radius: 0.5rem;
    box-shadow: 0 10px 1rem rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin: 10px;
    width: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {   
        width: 225px;
        height: 120px;
        //order-bottom: 1px solid rgba(0,0,0,0.1);
        object-fit: contain;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .product-body {
        padding: 1rem;
    }

    .product-actions {
        text-align: end;
    }

    .product-footer {
        text-align: end;
    }

    .fa-heart {
        margin-top: 0.5rem;
        color: red;

        &--disabled {
            opacity: 0.2;
        }
    }
`;

export {StyledProductCard};