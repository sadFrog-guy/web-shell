import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  margin: ${(props) => props.margin || "0"};
  ${(props) => props.width && `width: ${props.width}`}
`;

function Flex(props) {
  return <StyledFlex {...props} />;
}

export default Flex;
