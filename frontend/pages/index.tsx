import { BeatCircle } from "@/components/BeatCircle";
import { InstrumentCircle } from "@/components/InstrumentContainer/InstrumentCircle";
import { HTML5Backend } from "react-dnd-html5-backend";

import InstrumentContainer from "@/components/InstrumentContainer/InstrumentContainer";
import SelectContainer from "@/components/Select/SelectContainer";
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
  const radius = 80;
  const [bpm, setBPM] = useState(120); // 초기값은 120
  const [n_beats, setn_beats] = useState(4); // 초기값은 4
  const [nth_partial, setnth_partial] = useState(4);
  const numButtons = n_beats * nth_partial;
  const rotation_per_minute = (60 / bpm) * n_beats;
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
          PUMPKIN
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
