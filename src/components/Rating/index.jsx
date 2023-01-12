import './rating.css'
import redStar from "../../assets/img/redStar.svg";
import greyStar from "../../assets/img/greyStar.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating__container">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redStar}
            alt="fullStar"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greyStar}
            alt="emptyStar"
          />
        )
      )}
    </div>
  );
};

export default Rating;