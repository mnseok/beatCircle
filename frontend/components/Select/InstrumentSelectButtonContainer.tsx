import { useEffect, useState } from "react";
import InstrumentSelectButton from "./InstrumentSelectButton";

import { Instrument } from "@/types/instrument.type";
import { InstrumentSelectButtonContainerWrapper } from "./InstrumentSelect.styles";

export const InstrumentSelectButtonContainer = ({
  instrumentList,
  onClick,
}: {
  instrumentList: Instrument;
  onClick: (InstrumentName: string) => void;
}) => {
  const InstrumentSelectButtons: Array<JSX.Element> = [];
  for (const name of Object.keys(instrumentList)) {
    InstrumentSelectButtons.push(
      <InstrumentSelectButton
        key={name}
        instrument={{ name, detail: instrumentList[name] }}
        onClick={onClick}
        dragable={instrumentList[name] !== null}
      />
    );
  }
  return (
    <InstrumentSelectButtonContainerWrapper>
      {InstrumentSelectButtons}
    </InstrumentSelectButtonContainerWrapper>
  );
};
export default InstrumentSelectButtonContainer;
