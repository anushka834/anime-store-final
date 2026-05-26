const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({

  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {

  res.json({
    image: `http://localhost:5000/uploads/${req.file.filename}`
  });

});

module.exports = router;