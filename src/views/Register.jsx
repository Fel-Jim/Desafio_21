import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
  return (
    <>
      <h2 className="d-flex justify-content-center m-5">
        Cuentanos, ¿en que te podemos ayudar?
      </h2>
      <Form className="m-5">
        <Form.Group
          className=" row mb-3 justify-content-center"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="d-flex justify-content-center">
            Correo
          </Form.Label>
          <Form.Control
            className=" w-75"
            type="email"
            placeholder="correo@mail.com"
          />
        </Form.Group>
        <Form.Group
          className="row mb-3 justify-content-center"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="d-flex justify-content-center">
            Descripcion
          </Form.Label>
          <Form.Control
            className="w-75"
            as="textarea"
            rows={3}
            placeholder="Ingresar Texto"
          />
        </Form.Group>
        <div className="BotonBox d-flex justify-content-center">
          <Button>Enviar</Button>
        </div>
      </Form>
    </>
  );
}

export default Register;
