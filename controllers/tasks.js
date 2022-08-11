const Task = require('../models/Task')

module.exports = {
    getTasks: async (req,res)=>{
        console.log(req.user)
        try{
            const taskItems = await Task.find({userId:req.user.id})
            res.render('tasks.ejs', {tasks: taskItems, user: req.user})
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
    // might need to add for each day of week
    markComplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                completed: true
            })
            // check for all dayStatus = complete and mark completion: true
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id:req.body.taskIdFromJSFile},{
                completed: false
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