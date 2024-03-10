import styled from "styled-components";
import colorStore from "../store/ColorStore";

const StyledLine = styled.div`
  font-size: 24px;
  color: ${({ store, ...props }) => props.color || store.light};
  overflow-wrap: break-word;
  margin: ${(props) => props.margin || "0"};
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function Line({ ...props }) {
  return <StyledLine {...props} store={colorStore} />;
}

export default Line;
