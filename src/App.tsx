import { Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import SendMsg from "./components/SendMsg";
import Chats from "./components/Chats";

function App() {
  return (
    <Flex flexDirection="column" paddingBottom="3.5rem">
      <Header />
      <Chats />
      <SendMsg />
    </Flex>
  );
}
export default App;
