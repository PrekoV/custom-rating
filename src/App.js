import React, { useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Star from "./components/Star";

function App() {
    const [ratingCircleStar, setRatingCircleStar] = useState(0);
	const [ratingStar, setRatingStar] = useState(0);
	const [ratingComponentStar, setComponentRatingStar] = useState(0);

    return (
        <div className="App">
            ~
            <Rating rating={ratingStar} onSetRating={setRatingStar} /> rating:
            {ratingStar}
            <Rating
                rating={ratingCircleStar}
                onSetRating={setRatingCircleStar}
                component={"✩"}
                filledComponent={"✪"}
            />
            rating: {ratingCircleStar}
            <Rating
                rating={ratingComponentStar}
                onSetRating={setComponentRatingStar}
                component={<Star/>}
                filledComponent={<Star color="black"/>}
			/>rating: {ratingComponentStar}
        </div>
    );
}

export default App;
