import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const soundsFolderPath = path.join(process.cwd(), "public/sounds");
  const folderList = fs.readdirSync(soundsFolderPath).filter((file) => {
    const filePath = path.join(soundsFolderPath, file);
    return fs.statSync(filePath).isDirectory();
  });

  res.status(200).json(folderList);
}
