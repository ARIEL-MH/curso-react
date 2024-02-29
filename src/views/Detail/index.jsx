import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import styles from "./Detail.module.css";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_API_KEY_TICKETMASTER
          }`
        );
        const data = await response.json();
        setEventData(data);
      } catch (e) {
        setEventData({});
        setError(e);
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, []);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando evento...</div>;
  }

  if (Object.keys(error) > 0) {
    return <div>Ha ocurrido un error...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          src={eventData.images?.[0].url}
          className={styles.eventImage}
          alt={eventData.name}
        />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.infoParagraph}>{eventData.info}</p>
        <p className={styles.dateParagraph}>
          {eventData.dates?.start.dateTime
            ? format(
                new Date(eventData.dates?.start.dateTime),
                " d LLLL yyyy H:mm",
                { locale: es }
              )
            : null}
          hrs
        </p>
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMaptitle}>Mapa del evento</h6>
        <img
          src={eventData.seatmap?.staticUrl}
          alt="Seatmap event"
          // srcset=""
          width={500}
        />
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.rangoPrecios}>
          Rango de precios: {eventData.priceRanges?.[0].min}-
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData?.url}>Ir por tus boletos</a>
    </div>
  );
};

export default Detail;
