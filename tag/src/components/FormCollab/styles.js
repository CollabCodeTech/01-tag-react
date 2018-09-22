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

export const Input = styled.input`
  display: block;
  width: 100%;
  border-bottom: 2px solid var(--color-second);
  background-color: transparent;
  height: 2em;
  font-weight: bold;

  &::selection {
    background-color: var(--color-first);
    color: var(--color-zero);
  }

  &:focus,
  &:hover {
    border-bottom-color: var(--color-first);
  }
`;

export const WrapTag = styled.span`
  position: relative;
  margin-right: 10px;

  transition: opacity 200ms linear;
`;

export const TagInput = styled.input`
  display: none;
`;

export const Tag = styled.label`
  display: inline-block;
  font-size: 18px;
  background-color: var(--color-second-light);
  padding: 8px;
  cursor: pointer;
  animation: vibrationNotChecked 300ms linear;

  &::selection {
    background-color: transparent;
  }
`;

export const Remove = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  line-height: 22px;
  text-align: center;
  background: var(--color-second);
  color: var(--color-zero);
  transform: translateY(-50%);
  font-size: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: translateY(-50%) scale(1.2);
  }

  &::selection {
    background-color: transparent;
  }
`;
