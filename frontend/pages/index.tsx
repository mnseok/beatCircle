import { BeatCircle } from "@/components/BeatCircle";
import { InstrumentCircle } from "@/components/InstrumentCircle";
import { HTML5Backend } from "react-dnd-html5-backend";

import InstrumentContainer from "@/components/InstrumentContainer";
import SelectContainer from "@/components/SelectContainer";
import { Body } from "@/styles/Body.styles";
import {
  Header,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
} from "@/styles/Heder.styles";
import { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";

export default function Home() {
  const radius = 30;
  const numButtons = 12;
  const bpm = 120;
  const n_beats = 4;
  const rotation_per_minute = 60 / bpm * n_beats;
  const instruments = [
    // "drumstick",
    "kick",
    "snare-drum",
    "hi-hat",
    "low-floor-tom",
    "ride",
  ];
  const [angle, setAngle] = useState<number>(0);
  const prevTimeRef: React.MutableRefObject<number | undefined> = useRef();

  useEffect(() => {
    const animate = (time: number) => {
      if (!prevTimeRef.current) {
        prevTimeRef.current = time;
      }
      const deltaTime = time - prevTimeRef.current;
      const deltaTime_second = 1000 * deltaTime;
      const angleDelta = ((bpm / (4 * 60)) * 360 * deltaTime * 0.001) % 360;
      setAngle((prevAngle) => (prevAngle + angleDelta) % 360);

      prevTimeRef.current = time;
      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bpm]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Header>
        <HeaderLeft>
          <BeatCircle radius={20} numButtons={numButtons} angle={angle} />
        </HeaderLeft>
        <HeaderCenter>
          C&nbsp;&nbsp;U&nbsp;&nbsp;C&nbsp;&nbsp;U&nbsp;&nbsp;M&nbsp;&nbsp;B&nbsp;&nbsp;E&nbsp;&nbsp;R
        </HeaderCenter>
        <HeaderRight></HeaderRight>
      </Header>

      <Body>
        <DndProvider backend={HTML5Backend}>
          <InstrumentContainer
            radius={radius}
            numButtons={numButtons}
            angle={angle}
          />
          <SelectContainer />
        </DndProvider>
      </Body>
    </div>
  );
}
