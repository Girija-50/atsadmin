import multer from "multer";

// Store files in memory
const storage = multer.memoryStorage();

// Upload middleware
export const upload = multer({
  storage,
});