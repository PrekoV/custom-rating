import React, { useState } from "react";
import {
    UlRow,
    Li,
    Global,
    Item,
    ItemComponent,
    HalfFilledItemComponent,
    FilledItemComponent,
    HalfEmptyItemComponent
} from "./styled-rating";

export default function Rating({
    component = "☆",
    filledComponent= "★",
    onSetRating,
    rating = 0
}) {
    const [markHovered, setMarkHovered] = useState(0);
    console.log(markHovered);
    return (
        <UlRow className="Rating">
            <Global />
            {[1, 1, 1, 1, 1].map((item, id) => (
                <Li>
                        <> 
                            {markHovered ? (
                                markHovered >= id + 1 ? (
                                    <Item>
                                        <FilledItemComponent
                                            onMouseLeave={() =>
                                                setMarkHovered(0)
                                            }
                                            onMouseEnter={() =>
                                                setMarkHovered(id + 1)
                                            }
                                            onClick={() => onSetRating(id + 1)}
                                        >
                                            {filledComponent}
                                        </FilledItemComponent>
                                    </Item>
                                ) : (
                                    ""
                                )
                            ) : rating >= id + 1 ? (
                                <Item>
                                    <FilledItemComponent
                                        onMouseLeave={() => setMarkHovered(0)}
                                        onMouseEnter={() =>
                                            setMarkHovered(id + 1)
                                        }
                                    >
                                        {filledComponent}
                                    </FilledItemComponent>
                                </Item>
                            ) : (
                                ""
                            )}
                            {markHovered ? (
                                markHovered >= id + 0.5 ? (
                                    <Item>
                                        <HalfFilledItemComponent
                                            onMouseLeave={() =>
                                                setMarkHovered(0)
                                            }
                                            onMouseEnter={() =>
                                                setMarkHovered(id + 0.5)
                                            }
                                            onClick={() =>
                                                onSetRating(id + 0.5)
                                            }
                                        >
                                            {filledComponent}
                                        </HalfFilledItemComponent>
                                    </Item>
                                ) : (
                                    ""
                                )
                            ) : rating >= id + 0.5 ? (
                                <Item>
                                    <HalfFilledItemComponent
                                        onMouseLeave={() => setMarkHovered(0)}
                                        onMouseEnter={() =>
                                            setMarkHovered(id + 0.5)
                                        }
                                    >
                                        {filledComponent} 
                                    </HalfFilledItemComponent>
                                </Item>
                            ) : (
                                ""
                            )}

                            <Item>
                                <HalfEmptyItemComponent
                                    onMouseLeave={() => setMarkHovered(0)}
                                    onMouseEnter={() =>
                                        setMarkHovered(id + 0.5)
                                    }
                                >
                                    {component }
                                </HalfEmptyItemComponent>
                            </Item>
                            <ItemComponent
                                onMouseLeave={() => setMarkHovered(0)}
                                onMouseEnter={() => setMarkHovered(id + 1)}
                            >
                                {component}
                            </ItemComponent>
                        </>
                </Li>
            ))}
        </UlRow>
    );
}
