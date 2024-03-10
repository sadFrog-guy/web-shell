import { observer } from "mobx-react";
import styled, { css, keyframes } from "styled-components";
import colorStore from "../store/ColorStore";

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledButton = styled.button`
  font-size: 18px;
  border: none;
  outline: none;
  padding: 10px 15px;
  cursor: pointer;
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "none"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  bottom: ${(props) => props.bottom || "none"};

  &:hover {
    animation: ${scaleAnimation} 2s infinite ease-in-out;
  }

  ${(props) =>
    props.outlined &&
    css`
      color: ${({ store, ...props }) => props.color || store.white};
      background: ${({ store }) => store.dark};
      border: 1px solid ${({ store, ...props }) => props.border || store.white};
    `}
`;

const Button = observer((props) => {
  return <StyledButton {...props} store={colorStore} />;
});

export default Button;
