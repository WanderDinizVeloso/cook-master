const multer = require('multer');
const path = require('path');

const destination = path.resolve(__dirname, '../../uploads/');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, destination);
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;

    callback(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage });