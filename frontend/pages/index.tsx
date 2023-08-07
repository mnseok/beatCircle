import { BeatCircle } from "@/components/pages/BeatCircle/BeatCircle";
import { Button } from "@/components/pages/BeatCircle/BeatCircle.styles";
import { InstrumentCircle } from "@/components/pages/BeatCircle/InstrumentCircle";
import fs from "fs";
import path from "path";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const radius = 60;
  const numButtons = 16;
  const bpm = 120;
  const instruments = [
    "drumstick",
    "metronome",
    "snare",
    "pop-up",
    "shooting-sound",
    "swoosh-sound",
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
      <div
        style={{
          height: "30vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          padding: "3vh",
          border: "1px solid red",
        }}
      >
        <BeatCircle radius={40} numButtons={numButtons} angle={angle} />
      </div>
      <div>
        <div
          style={{
            height: "50vh",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "start",
            padding: "5vh",
            border: "1px solid blue",
          }}
        >
          {circles}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid purple",
            height: "30vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "5vh",
              border: "1px solid green",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
