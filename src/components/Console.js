import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colorStore from "../store/ColorStore";
import logStore from "../store/LogStore";
import { hackerText } from "../utils/hackerText";
import { npmInstallPackage, npmUpdatePackages } from "../utils/npmText";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.input`
  width: 100%;
  font-size: 24px;
  border: none;
  color: ${({ store, ...props }) => props.color || store.light};
  background: ${({ store, ...props }) => props.background || store.dark};
  outline: none;
  resize: none;
  margin: ${(props) => props.margin || "0"};
`;

const LogContainer = styled.div`
  width: 100%;
  max-height: 300px;
`;

const Console = observer(({ color, ...props }) => {
  const path = "C/users/TechLine> ";
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const logEnd = useRef(null);

  useEffect(() => {
    logEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [logStore.log]);

  const logHacker = (i) => {
    setDisabled(true);

    setTimeout(() => {
      if (i < hackerText.length) {
        logStore.setLog([...logStore.log, hackerText[i]]);
        setInput("");

        logHacker(i + 1);
      } else {
        setDisabled(false);
        return 0;
      }
    }, 100);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      const secretCode = "extra adikokey supah macho hacker code //002";
      const logMessage = path + input;

      if (input === secretCode) {
        logHacker(0);

        setDisabled(false);
      } else if (input.includes("чычкак")) {
        logStore.setLog([...logStore.log, path + input, "Я знаю :]"]);
        setInput("");
      } else if (input.includes("формула площади круга")) {
        logStore.setLog([...logStore.log, path + input, "A=πr/2"]);
        setInput("");
      } else if (input.includes("npm install")) {
        logStore.setLog([...logStore.log, logMessage, npmInstallPackage]);
        setInput("");
      } else if (input === "npm update") {
        logStore.setLog([...logStore.log, logMessage, npmUpdatePackages]);
        setInput("");
      } else {
        logStore.setLog([...logStore.log, path + input]);
        setInput("");
      }
    }
  };

  return (
    <Flex width="100%" direction="column" margin="0 10px">
      <LogContainer>
        {logStore.log.map((logEntry, index) => (
          <Line key={index} margin="0 0 20px 0">
            {logEntry}
          </Line>
        ))}

        <Flex width="100%">
          <Line width="100%" margin="0 4px 0 0" color={color}>
            {path}
          </Line>
          &nbsp;
          <StyledConsole
            ref={logEnd}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={input}
            disabled={disabled}
            store={colorStore}
            {...props}
          />
        </Flex>
      </LogContainer>
    </Flex>
  );
});
export default Console;
