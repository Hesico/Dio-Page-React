import { InputContainer, InputText, IconContainer } from './styles';

export default function Input({ leftIcon, name, control, ...rest }) {
    return (
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest} />
        </InputContainer>
    )
}

export { Input }; 