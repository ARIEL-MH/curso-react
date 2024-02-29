import "./styles.css";

import styles from "./EventItem.module.css";
import { Link } from "react-router-dom";

import useLikeEvents from "../../../../hooks/useLikeEvents";

import HearthFilled from "../../../../assets/hearth-filled.png";
import HearthUnfilled from "../../../../assets/hearth-unfilled.png";

const EventItem = ({ info, name, id, image, onEventClick }) => {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  function handleHeartClick() {
    toggleEventLike();
  }

  return (
    <div
      onClick={() => {
        console.log("padre clicleado");
      }}
      className="event-item-container"
    >
      <div className={styles.imageContainer}>
        <img
          src={isEventLiked ? HearthFilled : HearthUnfilled}
          alt="hearth-filled"
          className={styles.hearthImage}
          onClick={handleHeartClick}
        />
        <img src={image} alt={name} width={200} height={200} />
      </div>
      <div className="event-info-container">
        <h4 className="event-name">{name}</h4>
        <p className="event-info">{info}</p>
        <button onClick={handleSeeMoreClick} className="event-button">
          {/* <Link to={`/detail/:${id}`}>Ver mas</Link> */}
          Ver mas
        </button>
      </div>
    </div>
  );
};
export default EventItem;
