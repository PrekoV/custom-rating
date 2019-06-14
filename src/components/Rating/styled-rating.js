import styled, { createGlobalStyle } from "styled-components";

export const UlRow = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    height: 100px;
`;

export const Li = styled.li`
    list-style: none;
    font-size: 30px;
    cursor: pointer;
`;

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export const FilledItem = styled.div`
    color: ${props => props.color || 'transparent'};
    width: 100%;
    position: absolute;
    overflow: hidden;
    &:hover {
        color: black;
    }
`;

export const HalfFilledItem = styled.div`
    color: ${props => props.color || 'transparent'};
    z-index: 9999;
    position: absolute;
    width: 50%;
    overflow: hidden;
    &:hover {
        color: black;
    }
`;

export const EmptyItem = styled.div`
    width: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
`;

export const Item = styled.div`
    width: 100%;
    position: relative;
`;

export const ItemComponent = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const HalfFilledItemComponent  = styled.div`
    z-index: 9999;
    position: absolute;
    top: 0;
    width: 50%;
    overflow: hidden;
`;

export const HalfEmptyItemComponent  = styled.div`
    z-index: 9998;
    position: absolute;
    top: 0;
    width: 50%;
    overflow: hidden;
`;


export const FilledItemComponent  = styled.div`
    position: absolute;
    z-index: 9999;
    /* top: 0; */
    width: 100%;
    overflow: hidden;
`;