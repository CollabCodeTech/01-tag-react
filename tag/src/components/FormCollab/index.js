// rsc
import React from "react";

import {
  Form,
  Label,
  Title,
  Subtitle,
  Input,
  WrapTag,
  TagInput,
  Tag,
  Remove
} from "./styles";

const FormCollab = () => (
  <Form>
    <Label>
      <Title>Quais assuntos você quer aprender?</Title>
      <Subtitle>
        Você pode selecionar as tags que estão ai, ou criar uma nova tag
        escrevendo o nome dela no campo abaixo e apertando o ENTER
      </Subtitle>

      <Input placeholder="Não tem o que você quer? Escreva!" />
    </Label>

    <fieldset>
      <WrapTag>
        <TagInput />
        <Tag>FrontEnd</Tag>
        <Remove>X</Remove>
      </WrapTag>
    </fieldset>
  </Form>
);

export default FormCollab;
