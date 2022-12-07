import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 275px;
    height: 45px;
    border-bottom: 1px solid #3B3450;
    display:flex;
    flex-direction: column;
    margin-bottom: 10px;
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
    font-size: 16px;  
`;

export const ErrorText = styled.p`
  color: #FF0000;
  font-size: 12px;
  height: 20px;
`;