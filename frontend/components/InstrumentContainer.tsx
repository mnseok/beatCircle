import { BodyInstrumentContainer } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { InstrumentCircle } from "./InstrumentCircle";
import shortid from "shortid";

const InstrumentContainer = ({ radius, numButtons, angle }) => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [circles, setCircles] = useState([]);
  const [, dropRef] = useDrop({
    accept: "instrumentButton",
    drop: (item) => {
      setSelectedInstruments((prevInstruments) => [
        ...prevInstruments,
        item.instrumentName,
      ]);
    },
  });

  useEffect(() => {
    const updatedCircles = selectedInstruments.map((instrument, index) => (
      <InstrumentCircle
        key={index} // 사용하는 shortid 대신 악기 이름을 키로 사용
        radius={radius}
        numButtons={numButtons}
        angle={angle}
        instrument={instrument}
      />
    ));
    setCircles(updatedCircles);
  }, [selectedInstruments, angle]);

  return (
    <BodyInstrumentContainer ref={(node) => dropRef(node)}>
      {circles}
    </BodyInstrumentContainer>
  );
};

export default InstrumentContainer;
