import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${(props) =>
    props.preset === "primary" ? "lightblue" : "red"};
`;

export { ButtonContainer };
