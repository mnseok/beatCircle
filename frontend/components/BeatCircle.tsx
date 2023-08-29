import React, { useState } from 'react';
import BeatButtons from "./InstrumentContainer/BeatButton";
import {
  CircleContainer,
  Round,
} from "./InstrumentContainer/BeatCircle.styles";
import { Spinner } from "./InstrumentContainer/Spinner";

interface BeatCircleProps {
  radius: number;
  angle: number;
  numButtons: number;
  bpm: number;
  setBPM: (value: number) => void;
  n_beats: number;
  setn_beats: (value: number) => void;
  nth_partial: number;
  setnth_partial: (value: number) => void;
}

export function BeatCircle({
  radius,
  angle,
  numButtons,
  bpm,
  setBPM,
  n_beats,
  setn_beats,
  nth_partial,
  setnth_partial
}: BeatCircleProps): JSX.Element {
  const wrapperSize = radius * 2.5;
  const center = wrapperSize / 2;
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setIntervalId(setInterval(() => setBPM(prev => prev + 1), 100));
    } else {
      setIntervalId(setInterval(() => setBPM(prev => prev - 1), 100));
    }
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleContainer
        style={{ width: ` ${wrapperSize}px`, height: `${wrapperSize}px` }}
      >
        <Round
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            border: `${radius * 0.02}px solid #cdcdcd`,
            top: `${center - radius}px`,
            left: `${center - radius}px`,
          }}
        ></Round>
        <BeatButtons
          numButtons={numButtons}
          center={center}
          roundRadius={radius}
          activateButtonIndices={[0, 4, 8, 12,16,20,24,28,32,36]}
          handleButtonClick={() => {}}
        ></BeatButtons>
        
        <Spinner radius={radius} angle={angle} center={center} />
      </CircleContainer>

      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'row' }}>
        {[
          { label: 'BPM [', value: bpm, setter: setBPM, min: 1, type: 'button' },
          { label: 'BEAT [', value: n_beats, setter: setn_beats, min: 1, type: 'button' },
          { label: 'DIV [', value: nth_partial, setter: setnth_partial, min: 1, type: 'button' }
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px', marginRight:'0px'}}>
            <span>{item.label}</span>
            <button 
              style={{ backgroundColor: 'blue', borderRadius: '50%', width: '10px', height: '10px', border: 'none' }}
              onMouseDown={() => handleMouseDown('decrease')}
              onMouseUp={handleMouseUp}
              onClick={() => item.setter(prev => prev > item.min ? prev - 1 : prev)}
            ></button>
            <div style={{ margin: '0 5px' }}>{item.value}</div>
            <button 
              style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px', border: 'none' }}
              onMouseDown={() => handleMouseDown('increase')}
              onMouseUp={handleMouseUp}
              onClick={() => item.setter(prev => prev + 1)}
            ></button>]
          </div>
        ))}
      </div>
    </div>
  );
}
