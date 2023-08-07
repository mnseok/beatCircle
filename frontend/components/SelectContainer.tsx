import { BodySelectContainer } from "@/styles/Body.styles";
import InstrumentButton from "./InstrumentButton";

const SelectContainer = () => {
  return (
    <BodySelectContainer>
      <InstrumentButton instrumentName="ride" />
      <InstrumentButton instrumentName="snare" />
    </BodySelectContainer>
  );
};

export default SelectContainer;
