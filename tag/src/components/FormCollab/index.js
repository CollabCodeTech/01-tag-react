// rsc
import React from "react";

import { Form, Label, Title, Subtitle } from "./styles";

const FormCollab = () => (
  <Form>
    <Label>
      <Title>Quais assuntos você quer aprender?</Title>
      <Subtitle>
        Você pode selecionar as tags que estão ai, ou criar uma nova tag
        escrevendo o nome dela no campo abaixo e apertando o ENTER
      </Subtitle>
    </Label>
  </Form>
);

export default FormCollab;
