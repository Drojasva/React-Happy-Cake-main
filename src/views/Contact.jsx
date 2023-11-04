import {InputGroup, Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Contact = () => {
  return (
    <main className="d-flex flex-column align-items-center container">
      <article className="d-flex flex-column justify-content-center gap-2 text-center">
        <header className="p-5">
          <h5>
            Cuentanos, ¿En qué te podemos ayudar?
          </h5>
        </header>
        <main className="text-center">
          <div className="w-100">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <Form.Control
                placeholder="Escribe tu correo..."
              />
            </InputGroup>
            <InputGroup>
              <Form.Control as="textarea" placeholder="Cuentanos!"/>
            </InputGroup>
            <Button variant="danger" className="mt-2">Enviar</Button>
          </div>
        </main>
      </article>
    </main>
);
};