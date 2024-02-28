import Events from "../../components/Events";
import Navbar from "../../components/Navbar";
import { useState, useRef, useEffect } from "react";
import useEventsData from "../../hooks/useEventsData";

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  function handleNavbarSearch(term) {
    // console.log(containerRef.current);
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {isLoading ? (
        <div>Cargando resultados...</div>
      ) : (
        <Events searchTerm={searchTerm} events={events} />
      )}
      {!!error && <div>Ha ocurrido un error </div>}
    </>
  );
};

export default Home;
