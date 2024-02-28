import { useEffect, useState } from "react";

function useEventsData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?apikey=GXLc51KXkIk9KT9CqlQnebmD2FDDvW2n&countryCode=MX"
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    fetchEvents();
  }, []);
  return {
    //
    events: data._embedded?.events || [],
    isLoading,
    error,
  };
}

export default useEventsData;
