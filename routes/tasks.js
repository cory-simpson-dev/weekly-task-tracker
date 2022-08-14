const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasks') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, tasksController.getTasks)

router.post('/createTask', tasksController.createTask)

router.put('/markSundayComplete', tasksController.markSundayComplete)
router.put('/markSundayIncomplete', tasksController.markSundayIncomplete)
router.put('/markMondayComplete', tasksController.markMondayComplete)
router.put('/markMondayIncomplete', tasksController.markMondayIncomplete)
router.put('/markTuesdayComplete', tasksController.markTuesdayComplete)
router.put('/markTuesdayIncomplete', tasksController.markTuesdayIncomplete)
router.put('/markWednesdayComplete', tasksController.markWednesdayComplete)
router.put('/markWednesdayIncomplete', tasksController.markWednesdayIncomplete)
router.put('/markThursdayComplete', tasksController.markThursdayComplete)
router.put('/markThursdayIncomplete', tasksController.markThursdayIncomplete)
router.put('/markFridayComplete', tasksController.markFridayComplete)
router.put('/markFridayIncomplete', tasksController.markFridayIncomplete)
router.put('/markSaturdayComplete', tasksController.markSaturdayComplete)
router.put('/markSaturdayIncomplete', tasksController.markSaturdayIncomplete)
router.delete('/deleteTask', tasksController.deleteTask)

module.exports = router