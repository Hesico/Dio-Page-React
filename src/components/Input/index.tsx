import { InputContainer, InputText, IconContainer, ErrorText, Container } from './styles';
import { Controller } from "react-hook-form";
import {IInput} from "./types"

export default function Input({ leftIcon, name, control, errorMessage, ...rest } : IInput) {
    return (
        <Container>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field : {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
                />
            </InputContainer>
            {errorMessage ? (<ErrorText>{errorMessage}</ErrorText>) : null}
        </Container>
    )
}

export { Input }; 