import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div className="CakeBox d-flex justify-content-center m-3">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            <h2>
              Bienvenido a <b>Happy Cake</b>
            </h2>
          </Card.Title>
          <Card.Text className="d-flex justify-content-center">
            El lugar de los pasteles felices
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="top"
          src="https://previews.123rf.com/images/bienchen/bienchen1210/bienchen121000004/15835504-torta-de-cumplea%C3%B1os.jpg"
        />
      </Card>
    </div>
  );
}

export default HomePage;
