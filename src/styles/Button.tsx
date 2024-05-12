import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  color: white;
  font-size: var(--fs-med);
  padding: var(--size-400) var(--size-700);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 1);
  transition: all 200ms ease-in-out;
  &:hover {
    scale: 1.05;
    background-color: var(--clr-secondary);
  }
  &:active {
    scale: 0.95;
  }
`;

export default StyledButton;
