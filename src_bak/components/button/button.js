import "./styles.scss";
import { ButtonContainer } from "./button.styles";

const Button = (props) => {
    const {children, onClick, preset="primary"} = props;
    return (
        <ButtonContainer 
            onClick={onClick}
            preset={preset}>
            {children}
        </ButtonContainer>
    )
};

export default Button;