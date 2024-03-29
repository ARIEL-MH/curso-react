import Events from "../../components/Events";
import Navbar from "../../components/Navbar";
import { useState, useRef, useEffect } from "react";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";

const Home = () => {
  const { events, isLoading, error, fetchEvents, page } = useEventsData();
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

  function handlePageClick({ selected }) {
    // console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  }

  function renderEvents() {
    if (isLoading) {
      return <div>Cargando resultados...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error </div>;
    }

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disablesPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
