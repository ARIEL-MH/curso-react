function EventItem({ info, name, id, image, onEventClick }) {
  //

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    //pilas detener propagacion es una funcion cuando le guarde o de click la propagacion se va tener y el padre no va poder cachar ese evento que fue clicliado a bajo no debemos colisionar eventos del mismo tipo por que no va dar un
    onEventClick(id);
  };
  return (
    //pilas aqui esta haciendo el ejemplo de propagacion das click en el vermas y se hace la propagacion eso es un error
    <div
      onClick={
        //
        () => {
          console.log("padre clicleado");
        }
      }
    >
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
    </div>
  );
}
export default EventItem;
