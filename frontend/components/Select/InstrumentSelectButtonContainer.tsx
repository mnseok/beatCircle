import { useEffect, useState } from "react";
import InstrumentSelectButton from "./InstrumentSelectButton";
import { InstrumentSelectButtonContainerWrapper } from "./SelectContainer.styles";

export const InstrumentSelectButtoncontainer = ({
  instrumentList,
  onClick,
}: {
  instrumentList: Array<string>;
  onClick: (InstrumentName: string) => void;
}) => {
  const [InstrumentSelectButtons, setInstrumentSelectButtons] =
    useState<JSX.Element>([]);
  useEffect(() => {
    const InstrumentSelectButtons: Array<JSX.Element> = [];
    for (let i = 0; i < instrumentList.length; i++) {
      InstrumentSelectButtons.push(
        <InstrumentSelectButton
          key={i}
          instrument={instrumentList[i]}
          onClick={onClick}
        />
      );
    }
    setInstrumentSelectButtons(InstrumentSelectButtons);
  }, [instrumentList]);

  return (
    <InstrumentSelectButtonContainerWrapper>
      {InstrumentSelectButtons}
    </InstrumentSelectButtonContainerWrapper>
  );
};
export default InstrumentSelectButtoncontainer;
