import styled from "styled-components";

const CardContainer = styled.article`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.35);
  

  img {
    width: 100%;
  }
`;

export { CardContainer };
