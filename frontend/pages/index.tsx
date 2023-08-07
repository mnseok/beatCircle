import { BeatCircle } from "@/components/BeatCircle";
import { InstrumentCircle } from "@/components/InstrumentCircle";
import {
  Body,
  BodyInstrumentContainer,
  BodyInstrumentWrapper,
  InstrumentContainer,
  SelectContainer,
} from "@/styles/Body.styles";
import {
  Header,
  HeaderCenter,
  HeaderLeft,
  HeaderRight,
} from "@/styles/Heder.styles";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const radius = 30;
  const numButtons = 12;
  const bpm = 120;
  const instruments = [
    // "drumstick",
    "kick",
    "snare-drum",
    "hi-hat",
    "low-floor-tom",
    "ride",
  ];
  const [angle, setAngle] = useState(0);
  const prevTimeRef: React.MutableRefObject<number | undefined> = useRef();

  useEffect(() => {
    const animate = (time: number) => {
      if (!prevTimeRef.current) {
        prevTimeRef.current = time;
      }
      const deltaTime = time - prevTimeRef.current;
      const angleDelta = ((bpm / (4 * 60)) * 360 * deltaTime * 0.001) % 360;
      setAngle((prevAngle) => (prevAngle + angleDelta) % 360);

      prevTimeRef.current = time;
      requestAnimationFrame(animate);
    };
    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bpm]);

  const circles = instruments.map((instrument) => (
    <InstrumentCircle
      key={instrument}
      radius={radius}
      numButtons={numButtons}
      angle={angle}
      instrument={instrument}
    />
  ));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header>
        <HeaderLeft>
          <BeatCircle radius={20} numButtons={numButtons} angle={angle} />
        </HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </Header>

      <Body>
        <InstrumentContainer>{circles}</InstrumentContainer>
        <SelectContainer></SelectContainer>
      </Body>
    </div>
  );
}
