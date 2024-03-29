import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";

function Events({ searchTerm, events }) {
  //
  const navigate = useNavigate();

  function handleEventItemClick(id) {
    navigate(`detail/${id}`);
  }

  function renderEvents() {
    //cuando yo creo una funcion que va renderizar un componente pongo render
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      //estoy filtrando
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
