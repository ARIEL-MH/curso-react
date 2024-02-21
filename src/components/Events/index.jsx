import EventItem from "./components/EventItem";
import eventsJson from "../../data/events.json";
import { useState } from "react";

// console.log(data);
// const {
//   _embedded: { events },
// } = data;

function Events({ searchTerm }) {
  const [data, setData] = useState(eventsJson);

  const {
    _embedded: { events },
  } = data;

  function handleEventItemClick(id) {
    console.log("evento clickeado", id);
  }

  function renderEvents() {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter(
        //
        (item) => item.name.toLowerCase().includes(searchTerm)
      );
    }

    return eventsFiltered.map(
      //
      (eventItem) => (
        <EventItem
          //onEventClick asi nombrar a el evento
          key={`events-item-${eventItem.id}`}
          id={eventItem.id}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          onEventClick={handleEventItemClick}
          //cuando los nombres de los eventos sean pasados por propiedades tiene que ser on
        />
      )
    );
  }

  return (
    <div>
      <p>Eventos</p>
      {renderEvents()}
    </div>
  );
}

export default Events;
