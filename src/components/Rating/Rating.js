import React, { useReducer } from "react";
import { UlRow, Global } from "./styled-rating";
import { reducer, initialState } from "./reducer";
import RatingItem from "./RatingItem";

export default function Rating({
    component = "☆",
    filledComponent = "★",
    onSetRating,
    rating = 0
}) {
    const [markHovered, dispatch] = useReducer(reducer, initialState);
    return (
        <UlRow className="Rating">
            <Global />
            {[0, 1, 2, 3, 4].map(item => (
                <RatingItem
                    dispatch={dispatch}
                    id={item}
                    onSetRating={onSetRating}
                    value={markHovered.value}
                    rating={rating}
                    component={component}
                    filledComponent={filledComponent}
                    key={item}
                />
            ))}
        </UlRow>
    );
}
