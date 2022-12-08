import styled, {css} from "styled-components";
import {IButtonStyled} from "./types"

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100px;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E41050;

        &:hover {
            box-shadow: 0 0 10px #E41050, 0 0 15px #E41050, 0 0 30px #E41050;
            cursor: pointer;  
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`;