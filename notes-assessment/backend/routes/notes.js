const express = require('express');
const router = express.Router();

const notesController  = require('../controllers/notes')

router.get('/all-notes', notesController.getNotes)

router.post('/add-note', notesController.postNote)

router.get('/delete-note/:id', notesController.deleteNote)


module.exports = router;