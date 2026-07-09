/*import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");*/

import multer from "multer";

const storage = multer.memoryStorage();

// For register page (single file upload)
export const singleUpload = multer({ storage }).single("file");

// For profile update page (resume + profile photo)
export const upload = multer({ storage }).fields([
  { name: "file", maxCount: 1 },          // Resume
  { name: "profilePhoto", maxCount: 1 }   // Profile Photo
]);