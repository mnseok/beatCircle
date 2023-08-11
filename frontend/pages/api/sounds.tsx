import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { instrumentName } = req.query;
  const instrumentPath = path.join(
    process.cwd(),
    `public/sounds/${instrumentName}`
  );
  if (!fs.existsSync(instrumentPath)) {
    res.status(404).json({ error: "instrument not found" });
    return;
  }

  const soundFiles = fs
    .readdirSync(instrumentPath)
    .filter((file) => file.endsWith(".mp3") || file.endsWith(".wav"));

  res.status(200).json(soundFiles);
}
