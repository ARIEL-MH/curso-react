import "./styles.css";
import styles from "./EventItem.module.css";
import { Link } from "react-router-dom";

function EventItem({ info, name, id, image, onEventClick }) {
  //

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };
  return (
    <div
      onClick={
        //
        () => {
          console.log("padre clicleado");
        }
      }
      className="event-item-container"
    >
      <img src={image} alt={name} width={200} height={200} />
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
}
export default EventItem;
