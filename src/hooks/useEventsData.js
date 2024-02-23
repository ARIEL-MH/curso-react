import eventsJson from "../data/events.json";
import { useEffect, useRef } from "react";

function useEventsData() {
  //ojo si quiero cambiar useState x useRef tengo que preguntamer que erros me van a dar cuando no estamos usando setData
  const data = useRef([]);

  //voy hacer un cargado fictisio despues de 5 segundos
  useEffect(
    //informacion de la api
    () => {
      setTimeout(() => {
        data.current = eventsJson;
      }, 4000);
      //LOAD API CALL
    },
    []
  );
  console.log(data.current); // referencia actualizada no vuelve actualizar el componente hooks producen re-render
  return { events: data.current?._embedded?.events || [] };
}

export default useEventsData;
