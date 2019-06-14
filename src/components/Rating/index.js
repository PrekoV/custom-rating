import React from 'react'
import Rating from './Rating';

export default function CustomRating() {
    const [rating, setRating] = useState(0)
    return (
        <div className="CustomRating">
            <Rating rating={rating} onSetRating={setRating}/>
            <Rating onSetRating={setRating} symbol={"✩"} filledSymbol={'✪'}/>
        </div>
    )
}
