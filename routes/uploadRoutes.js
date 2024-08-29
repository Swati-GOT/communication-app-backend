const { createUpload, getUploads, getUploadById, updateUpload, deleteUpload, downloadFile } = require("../controller/uploadController");
const { authenticate } = require("../middleware/authenticate");

module.exports = (app) => {
    app.post('/uploads',authenticate, createUpload);
    app.get('/uploads',authenticate, getUploads);
    app.get('/uploads/:id',authenticate, getUploadById)
    app.put('/uploads/:id',authenticate, updateUpload);
    app.delete('/uploads/:id', authenticate,deleteUpload);
    app.get('/download/:file_name', downloadFile);
}