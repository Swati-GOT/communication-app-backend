const Upload = require('../models/uploadModel');
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const _ = require('lodash');

// Create a new upload
const createUpload = async (req, res) => {
  try {
    const form = new formidable.IncomingForm({});

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({ status: 'error', message: err.message });
      }
      const oldPath = files.file_name[0].filepath;
      const newPath = path.join(__dirname, '../uploads', files.file_name[0].originalFilename);

      fs.copyFile(oldPath, newPath, async (err) => {
        if (err) {
          return res.status(500).json({ status: 'error', message: err.message });
        }

        const { label } = fields;
        const file_name = files.file_name[0].originalFilename;
        const download_url = newPath;

        const uploads = await Upload.create({ label: label[0], file_name, download_url })
        res.status(200).json(uploads);
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create upload' });
  }
};

// Get all uploads
const getUploads = async (req, res) => {
  try {
    const uploads = await Upload.findAll();
    res.status(200).json(uploads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve uploads' });
  }
};

// Get a upload by ID
const getUploadById = async (req, res) => {
  try {
    const upload = await Upload.findByPk(req.params.id);
    if (upload) {
      res.status(200).json(upload);
    } else {
      res.status(404).json({ error: 'Upload not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve upload' });
  }
};

// Update a upload by ID
const updateUpload = async (req, res) => {
  try {
    const form = new formidable.IncomingForm({});

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ status: 'error', message: err.message });
      }
      const updateData = {};
      if (!_.isEmpty(files)) {
        const oldPath = files.file_name[0].filepath;
        const newPath = path.join(__dirname, '../uploads', files.file_name[0].originalFilename);
        fs.copyFileSync(oldPath, newPath);
        updateData.file_name = files.file_name[0].originalFilename;
        updateData.download_url = newPath;
      }
      if (!_.isEmpty(fields)) {
        const { label } = fields;
        updateData.label = label[0];
      }
      await Upload.update(updateData, { where: { id: req.params.id } })
      res.status(200).json({ mesage: "File Uploaded Successfully" });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create upload' });
  }

};

// Delete a upload by ID
const deleteUpload = async (req, res) => {
  try {
    const upload = await Upload.findByPk(req.params.id);
    if (upload) {
      await upload.destroy();
      fs.unlinkSync(upload.download_url);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Upload not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Upload' });
  }
};

const downloadFile = async (req, res) => {
  try {
    const filePath = path.join(__dirname, `../uploads/${req.params.file_name}`)
    if (filePath) {
      res.download(filePath);
    } else {
      res.status(404).send('File not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to download file' });
  }
}

module.exports = {
  createUpload,
  getUploads,
  getUploadById,
  updateUpload,
  deleteUpload,
  downloadFile
};
