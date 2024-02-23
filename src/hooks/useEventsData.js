import eventsJson from "../data/events.json";
import { useState } from "react";

function useEventsData() {
  const [data, setData] = useState(eventsJson);

  const {
    _embedded: { events },
  } = data;

  return { events };
}

export default useEventsData;
