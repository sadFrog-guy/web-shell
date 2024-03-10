import { observer } from "mobx-react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Console from "./components/Console";
import Flex from "./components/Flex";
import Heading from "./components/Heading";
import useTheme from "./hooks/useTheme";
import colorStore from "./store/ColorStore";
import logStore from "./store/LogStore";

const AppWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

const App = observer(() => {
  // const theme = useTheme();

  // useEffect(() => {
  //   if (theme === "dark") {
  //     colorStore.setDarkTheme();
  //   } else {
  //     colorStore.setLightTheme();
  //   }
  // }, []);

  colorStore.setLightTheme();

  return (
    <AppWrapper>
      <Flex justify="center">
        <Heading />
      </Flex>

      <Flex direction="column" margin="40px 0">
        <Console margin="0 0 20px 0" />

        <Button
          outlined
          position="fixed"
          bottom="30px"
          left="20px"
          onClick={() => logStore.clearLog()}
        >
          Очистить
        </Button>
      </Flex>
    </AppWrapper>
  );
});

export default App;
