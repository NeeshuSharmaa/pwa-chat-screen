import { Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import SendMsg from "./components/SendMsg";

function App() {
  return (
    <Flex flexDirection="column" paddingBottom="3.5rem">
      <Header />

      <SendMsg />
    </Flex>
  );
}
export default App;
