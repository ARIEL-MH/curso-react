import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(eventId);
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=GXLc51KXkIk9KT9CqlQnebmD2FDDvW2n`
        );
        const data = await response.json();
        setEventData(data);
      } catch (e) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, []);
  return <div>Detalle</div>;
};

export default Detail;
