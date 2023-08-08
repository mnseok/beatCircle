import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { folderName } = req.query;
  const folderPath = path.join(process.cwd(), `public/sounds/${folderName}`);
  if (!fs.existsSync(folderPath)) {
    res.status(404).json({ error: "Folder not found" });
    return;
  }

  const soundFiles = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".mp3") || file.endsWith(".wav"));

  res.status(200).json(soundFiles);
}
