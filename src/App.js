import "./App.css";
import Title from "./components/Title";
import Container from "@material-ui/core/Container";
import TabView from "./components/TabView";
function App() {
  return (
    <Container>
      <Title />
      <TabView />
    </Container>
  );
}

export default App;
