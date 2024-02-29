import useEventsResults from "../state/events-results";

//Hook para hacer una llamada a la API y guadarlo en tu estado local
function useEventsData() {
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  return {
    events: data?._embedded?.events || [],
    page: data?.page || [],
    isLoading,
    error,
    fetchEvents,
  };
}

export default useEventsData;
