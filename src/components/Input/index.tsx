import { InputContainer, InputText, IconContainer, ErrorText, Container } from './styles';
import { Controller } from "react-hook-form";
import {IInput} from "./types"

export default function Input({ leftIcon, name, control, errorMessage, ...rest } : IInput) {
    return (
        <Container error={errorMessage}>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field : {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
                />
            </InputContainer>
            {errorMessage ? (<ErrorText><p>{errorMessage}</p></ErrorText>) : null}
        </Container>
    )
}

export { Input }; 