// pages/api/sounds.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const soundsFolderPath = path.join(process.cwd(), "public/sounds");
  const soundFiles = fs
    .readdirSync(soundsFolderPath)
    .filter((file) => file.endsWith(".mp3"));

  res.status(200).json(soundFiles);
}
