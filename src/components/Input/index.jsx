import { InputContainer, InputText, IconContainer, ErrorText, Container } from './styles';
import { Controller } from "react-hook-form";

export default function Input({ leftIcon, name, control, errorMessage, ...rest }) {
    return (
        <Container>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field}{...rest} />}
                />
            </InputContainer>
            {errorMessage ? (<ErrorText>{errorMessage.message}</ErrorText>) : null}
        </Container>
    )
}

export { Input }; 