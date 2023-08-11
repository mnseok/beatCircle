import { SelectContainerWrapper } from "@/styles/Body.styles";
import { useEffect, useState } from "react";
import { Instrument } from "@/types/instrument.type";
import DetailSelectButtonContainer from "./DetailSelectButtonContainer";

import InstrumentSelectButtonContainer from "./InstrumentSelectButtonContainer";

const SelectContainer = () => {
  const [instrumentList, setInstrumentList] = useState<Instrument>({});
  useEffect(() => {
    async function fetchInstrumentList() {
      const response = await fetch("/api/soundFolders");
      const data = await response.json();
      const instrumentList: Instrument = {};
      data.forEach((instrument: string) => {
        if (instrument) instrumentList[instrument] = null;
      });
      setInstrumentList(instrumentList);
    }
    fetchInstrumentList();
  }, []);

  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(
    null
  );
  const handleInstrumentSelectButtonClick = (instrumentName: string) => {
    setSelectedInstrument(
      instrumentName !== selectedInstrument ? instrumentName : null
    );
  };

  const handleDetailSelectButtonClick = (
    instrumentName: string,
    detailName: string
  ) => {
    setInstrumentList((prev) => {
      return { ...prev, [selectedInstrument]: detailName };
    });
    setSelectedInstrument(null);
  };

  return (
    <SelectContainerWrapper>
      <DetailSelectButtonContainer
        instrumentName={selectedInstrument}
        handleDetailSelectButtonClick={handleDetailSelectButtonClick}
      ></DetailSelectButtonContainer>

      <InstrumentSelectButtonContainer
        instrumentList={instrumentList}
        onClick={handleInstrumentSelectButtonClick}
      />
    </SelectContainerWrapper>
  );
};

export default SelectContainer;
