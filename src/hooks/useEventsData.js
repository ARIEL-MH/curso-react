import eventsJson from "../data/events.json";
import { useEffect, useState } from "react";

function useEventsData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(
    //
    () => {
      setTimeout(
        //
        () => {
          try {
            setData(eventsJson);
            setIsLoading(false);
          } catch (error) {
            setError(error);
          }
        },
        4000
      );
    },
    []
  );
  return {
    //
    events: data._embedded?.events || [],
    isLoading,
    error,
  };
}

export default useEventsData;
