import { BodyInstrumentContainer } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { InstrumentCircle } from "./InstrumentCircle";
import shortid from "shortid";

const InstrumentContainer = ({
  radius,
  numButtons,
  angle,
}: {
  radius: number;
  numButtons: number;
  angle: number;
}) => {
  const [selectedInstruments, setSelectedInstruments] = useState(
    Array<{ name: string; path: string; id: string }>
  );
  const [circles, setCircles] = useState([]);
  const [, dropRef] = useDrop({
    accept: "instrumentButton",
    drop: (item) => {
      setSelectedInstruments((prevInstruments) => {
        if (prevInstruments.length < 12) {
          return [...prevInstruments, { ...item, id: shortid.generate() }];
        }
        return prevInstruments;
      });
    },
  });

  const deleteCircle = (idToDelete: string) => {
    setSelectedInstruments((prevInstruments) => {
      const updatedInstruments = prevInstruments.filter(
        (instrument) => instrument.id !== idToDelete
      );
      return updatedInstruments;
    });
  };

  useEffect(() => {
    const updatedCircles = selectedInstruments.map((instrument, index) => (
      <InstrumentCircle
        key={instrument.id} // 사용하는 shortid 대신 악기 이름을 키로 사용
        radius={radius}
        numButtons={numButtons}
        angle={angle}
        instrumentInfo={instrument}
        onDelete={() => deleteCircle(instrument.id)}
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
