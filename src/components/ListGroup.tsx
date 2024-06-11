function ListGroup() {
  let items = ["Tirunelveli", "Chennai", "Madurai", "Trichy"];
  //   items = [];
  //   const message = items.length === 0 ? <p>No list found</p> : null;
  //   function getMessage() {
  //     return items.length === 0 ? <p>No list found</p> : null;
  //   }
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No list found</p>}
      <ul className="list-group list-group-flush">
        {items.map((items) => (
          <li
            className="list-group-item"
            key={items}
            onClick={() => console.log("Hello")}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
