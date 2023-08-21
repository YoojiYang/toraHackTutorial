import { About } from "./components/About";
import { Counter } from "./components/Counter";
import { ToggleButton } from "./components/ToggleButton";
import { GetId } from "./components/GetId";

const Index = (props) =>  {

  const message = "No stress";
  const name = "yooji"

  return (
    <>
      <About message={ message } name={name} />
      <Counter />
      <ToggleButton />
      <GetId />
    </>
  );  
}

export default Index