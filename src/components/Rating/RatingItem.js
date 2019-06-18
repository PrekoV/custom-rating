import React from "react";
import { Item, ItemFilled, ItemWrapper } from "./styled-rating";

export default function RatingItem({
    dispatch,
    id,
    onSetRating,
    value,
    rating,
    component,
    filledComponent
}) {
    return (
        <Item>
            <ItemWrapper
                onMouseLeave={() => dispatch({ type: "UNHOVERED" })}
                onMouseEnter={() =>
                    dispatch({ type: "HALF_HOVERED", payload: id })
                }
                onClick={() => onSetRating(value)}
                width={"50%"}
                position={"absolute"}
                ZI={999}
            >
                {component}
                <ItemFilled
                    visibility={
                        value >= id + 0.5
                            ? "visible"
                            : rating >= id + 0.5 && !value
                            ? "visible"
                            : "hidden"
                    }
                    width={"50%"}
                >
                    {filledComponent}
                </ItemFilled>
            </ItemWrapper>
            <ItemWrapper
                onMouseLeave={() => dispatch({ type: "UNHOVERED" })}
                onMouseEnter={() => dispatch({ type: "HOVERED", payload: id })}
                onClick={() => onSetRating(value)}
            >
                {component}

                <ItemFilled
                    width={"100%"}
                    visibility={
                        value >= id + 1
                            ? "visible"
                            : rating >= id + 1 && !value
                            ? "visible"
                            : "hidden"
                    }
                >
                    {filledComponent}
                </ItemFilled>
            </ItemWrapper>
        </Item>
    );
}
