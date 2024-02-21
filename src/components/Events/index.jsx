import EventItem from "./components/EventItem";
import eventsJson from "../../data/events.json";
import { useState } from "react";

// console.log(data);
// const {
//   _embedded: { events },
// } = data;

function Events() {
  const [data, setData] = useState(eventsJson);

  const {
    _embedded: { events },
  } = data;

  function handleEventItemClick(id) {
    console.log("evento clickeado", id);
  }

  return (
    <div>
      <p>Eventos</p>
      {events.map(
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
      )}
    </div>
  );
}

export default Events;

//cuando la informacion tiende a cambiar de momento la info es estatica pero no tiene nada de malo si lo quieres guardar en un state
//la diferemcia es que eso no va actualizarse uso del estado sin actualizarse no que esta fuera de la funcion no es reactivo
