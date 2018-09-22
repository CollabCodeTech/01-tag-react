import styled from "styled-components";

export const Form = styled.form`
  width: 80vw;
`;

export const Label = styled.label`
  display: block;
  position: relative;
  margin-bottom: var(--spacing-big);

  &:not(:last-of-type) {
    margin-bottom: var(--spacing-medium);
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: var(--color-first);
    transform-origin: center;
    transform: scaleX(0);

    transition: transform 400ms cubic-bezier(0.24, 0.39, 0.81, 1.27);
  }

  &:focus-within:after {
    transform: scaleX(1);
  }
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: var(--spacing-small);
`;

export const Subtitle = styled.span`
  display: block;
  font-size: 14px;
  text-align: center;
  color: var(--color-first);
  font-weight: bold;
  margin-bottom: var(--spacing-medium);
`;
