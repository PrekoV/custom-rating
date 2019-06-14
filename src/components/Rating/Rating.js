import React, { useState } from "react";
import {
    UlRow,
    Li,
    Global,
    // FilledItem,
    // HalfFilledItem,
    // EmptyItem,
    Item,
    ItemComponent,
    HalfFilledItemComponent,
    FilledItemComponent,
    HalfEmptyItemComponent
} from "./styled-rating";

export default function Rating({
    component,
    filledComponent,
    symbol = "☆",
    onSetRating,
    filledSymbol = "★",
    rating = 0
}) {
    const [markHovered, setMarkHovered] = useState(0);
    console.log(markHovered);
    return (
        <UlRow className="Rating">
            <Global />
            {[1, 1, 1, 1, 1].map((item, id) => (
                <Li>
                    {/* {component ? (*/}
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
                                            {filledComponent || filledSymbol}
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
                                        {filledComponent || filledSymbol}
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
                                            {filledComponent || filledSymbol}
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
                                        {filledComponent || filledSymbol} 
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
                                    {component || symbol}
                                </HalfEmptyItemComponent>
                            </Item>
                            <ItemComponent
                                onMouseLeave={() => setMarkHovered(0)}
                                onMouseEnter={() => setMarkHovered(id + 1)}
                            >
                                {component || symbol}
                            </ItemComponent>
                        </>
                    {    
                    // ) : (
                    //     <>
                    //         <Item>
                    //             <HalfFilledItem
                    //                 onMouseLeave={() => setMarkHovered(0)}
                    //                 onMouseEnter={() =>
                    //                     setMarkHovered(id + 0.5)
                    //                 }
                    //                 onClick={() => onSetRating(id + 0.5)}
                    //                 color={
                    //                     markHovered
                    //                         ? markHovered >= id + 0.5
                    //                             ? "black"
                    //                             : ""
                    //                         : rating >= id + 0.5
                    //                         ? "black"
                    //                         : ""
                    //                 }
                    //             >
                    //                 {filledSymbol}
                    //             </HalfFilledItem>
                    //         </Item>
                    //         <Item>
                    //             <FilledItem
                    //                 onMouseLeave={() => setMarkHovered(0)}
                    //                 onMouseEnter={() => setMarkHovered(id + 1)}
                    //                 onClick={() => onSetRating(id + 1)}
                    //                 color={
                    //                     markHovered
                    //                         ? markHovered >= id + 1
                    //                             ? "black"
                    //                             : ""
                    //                         : rating >= id + 1
                    //                         ? "black"
                    //                         : ""
                    //                 }
                    //             >
                    //                 {filledSymbol}
                    //             </FilledItem>
                    //         </Item>
                    //         <EmptyItem>{symbol}</EmptyItem>
                     //   </>
                   // )}
                    }
                </Li>
            ))}
        </UlRow>
    );
}
