const Task = require('../models/Task')

module.exports = {
    getTasks: async (req,res)=>{
        try{
            const taskItems = await Task.find({userId:req.user.id})
            res.render('tasks.ejs', 
                {title: 'Home Page', 
                tasks: taskItems, 
                user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTask: async (req, res)=>{
        try{
            await Task.create({task: req.body.taskItem, userId: req.user.id})
            console.log('Task has been added!')
            res.redirect('/tasks')
        }catch(err){
            console.log(err)
        }
    },
    markSundayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                sundayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markSundayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                sundayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markMondayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                mondayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markMondayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                mondayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markTuesdayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                tuesdayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markTuesdayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                tuesdayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markWednesdayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                wednesdayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markWednesdayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                wednesdayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markThursdayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                thursdayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markThursdayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                thursdayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markFridayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                fridayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markFridayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                fridayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markSaturdayComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                saturdayStatus: 'complete'
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markSaturdayIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                saturdayStatus: 'incomplete'
            })
            // check for all dayStatus = complete and mark completion: false
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTask: async (req, res)=>{
        console.log(req.body.taskIdFromJSFile)
        try{
            await Task.findOneAndDelete({_id:req.body.taskIdFromJSFile})
            console.log('Deleted Task')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    