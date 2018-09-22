import React, { Component } from "react";

import {
  Form,
  Label,
  Title,
  Subtitle,
  Input,
  WrapTag,
  Tag,
  Remove
} from "./styles";

class FormCollab extends Component {
  state = {
    tags: [
      { name: "Front-end", active: false },
      { name: "Back-end", active: false },
      { name: "JavaScript", active: false },
      { name: "CSS", active: false },
      { name: "HTML", active: false },
      { name: "React", active: false }
    ]
  };

  handleClick = ({ target: { textContent } }) => {
    const newTags = this.state.tags.map(
      tag =>
        tag.name === textContent ? { name: tag.name, active: !tag.active } : tag
    );

    this.setState({
      tags: newTags
    });
  };

  render() {
    return (
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
          {this.state.tags.map(tag => (
            <WrapTag key={tag.name}>
              <Tag active={tag.active} onClick={this.handleClick}>
                {tag.name}
              </Tag>
              <Remove>X</Remove>
            </WrapTag>
          ))}
        </fieldset>
      </Form>
    );
  }
}

export default FormCollab;

// const FormCollab = () => (
//   <Form>
//     <Label>
//       <Title>Quais assuntos você quer aprender?</Title>
//       <Subtitle>
//         Você pode selecionar as tags que estão ai, ou criar uma nova tag
//         escrevendo o nome dela no campo abaixo e apertando o ENTER
//       </Subtitle>

//       <Input placeholder="Não tem o que você quer? Escreva!" />
//     </Label>

//     <fieldset>
//       <WrapTag>
//         <TagInput />
//         <Tag>BackEnd</Tag>
//         <Remove>X</Remove>
//       </WrapTag>
//     </fieldset>
//   </Form>
// );
