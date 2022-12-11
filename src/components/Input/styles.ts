import styled, {css} from 'styled-components';
import {IError} from "./types"

export const Container = styled.div<IError>`
    width: 100%;
    max-width: 275px;
    height: 25px;
    border-bottom: 1px solid #3B3450;
    display:flex;
    flex-direction: column;
    margin-bottom: 15px;

    ${({error}) => error && css`
        border-bottom: 1px solid #FF0000;
    `}
`;

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 25px;
    display:flex;
    align-items: center;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    font-size: 18px;  

    &:focus{
        outline-width: 0;
    }
`;

export const ErrorText = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;

    p {
        border-radius: 0 0 0.5rem 0.5rem;
        padding: 0 5px;
        background-color: #FF0000;
        color: #FFF;
        font-size: 12px;
        height: 20px;
    }
`;