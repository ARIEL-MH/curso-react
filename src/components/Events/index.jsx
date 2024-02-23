import EventItem from "./components/EventItem";

import useEventsData from "../../hooks/useEventsData";

function Events({ searchTerm }) {
  //
  const { events, isLoading, error } = useEventsData();

  function handleEventItemClick(id) {
    console.log("evento clickeado", id);
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
  if (error) {
    return <div>Ha ocurrido un error</div>;
  }
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <p>Eventos</p>
      {renderEvents()}
    </div>
  );
}

export default Events;
