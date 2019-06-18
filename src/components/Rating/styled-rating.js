import styled, { createGlobalStyle } from "styled-components";

export const UlRow = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    max-height: 100px;
`;

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
export const ItemFilled= styled.div`
    position: absolute;
    z-index: 9999;
    top: 0;
    width: ${props => props.width || "100%"};
    visibility: ${props => props.visibility || "hidden"};
`;

export const ItemWrapper = styled.div`
    position: ${props => props.position || 'relative'};
    top: 0;
    z-index: ${props => props.ZI || 0};
    width: ${props => props.width || "100%"};
    overflow: hidden;
`;

export const Item = styled.div`
    width: fit-content;
    position: relative;
    list-style: none;
    font-size: 30px;
    cursor: pointer;
`;
