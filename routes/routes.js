const express = require('express')
const router = express.Router();

// controllers :
const {createContact} = require('../controller/createContact');
const { getContact, getContactByid } = require('../controller/getContact');
const { updateContact } = require('../controller/updateContact');
const { deleteContact } = require('../controller/deleteContact');




// Routes :
router.get('/',getContact)
router.get('/:id',getContactByid)
router.post('/create',createContact)
router.put('/update/:id',updateContact)
router.delete('/delete/:id',deleteContact)


// Exports all routes 
module.exports = router