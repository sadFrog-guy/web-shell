import { observer } from "mobx-react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import colorStore from "../store/ColorStore";
import randomChoice from "../utils/randomChoice";

const StyledColorWrap = styled.div`
  color: ${({ store }) => store.light};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Heading = observer(() => {
  const variants = [
    "I miss the old Kanye",
    "Runaway fast as you can",
    "Can we get much higher?",
    "Now I ain't sayin' she a gold digger",
    "I HATE NIGGERS",
  ];
  const choice = randomChoice(variants);
  const date = new Date();

  return (
    <StyledColorWrap store={colorStore}>
      <TypeAnimation
        sequence={[
          "",
          1000,
          `Conso`,
          500,
          `Console cmd`,
          400,
          `Console cmd, ${date.getFullYear()}. Adilet Kasymbaev`,
          20000,
          choice,
          8000,
        ]}
        speed={20}
        wrapper="div"
        repeat={Infinity}
      />
    </StyledColorWrap>
  );
});

export default Heading;
