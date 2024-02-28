import { useState } from "react";

function useEventsData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=GXLc51KXkIk9KT9CqlQnebmD2FDDvW2n&countryCode=MX${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };
  return {
    //
    events: data._embedded?.events || [],
    page: data?.page || [],
    isLoading,
    error,
    fetchEvents,
  };
}

export default useEventsData;
