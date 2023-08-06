import { BeatCircle } from "../components/pages/BeatCircle/BeatCircle";

export default function Home() {
  return (
    <>
      <BeatCircle radius={100} numButtons={16} bpm={60} />
    </>
  );
}
