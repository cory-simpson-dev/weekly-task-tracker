const Task = require('../models/Task')
const User = require('../models/User')

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
            res.render('error/404', {
                title: 'Page Not Found',
                layout: './layouts/error'
            })
        }
    },
    createTask: async (req, res)=>{
        try{
            await Task.create({task: req.body.taskItem, userId: req.user.id})
            console.log('Task has been added!')
            res.redirect('/tasks')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    createTaskFromFavorite: async (req, res)=>{
        try{
            await Task.create({task: req.body.taskItem, userId: req.user.id})
            console.log('Favorite task has been added!')
            res.json('Favorite task has been added!')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    addFavoriteTask: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                $push: {favoriteTasks: req.body.favoritedTask}, 
            })
            console.log('New favorite has been saved')
            res.json('New favorite has been saved')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    removeFavoriteTask: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                $pull: {favoriteTasks: req.body.favoritedTask}, 
            })
            console.log('Favorite has been removed')
            res.json('Favorite has been removed')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    updatePreferredComplete: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                preferredComplete: req.body.preferredComplete
            })
            console.log('New Preferred Complete selected')
            res.json('New Preferred Complete selected')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    updatePreferredIncomplete: async (req, res)=>{
        try{
            await User.findOneAndUpdate({_id: req.user.id},{
                preferredIncomplete: req.body.preferredIncomplete
            })
            console.log('New Preferred Incomplete selected')
            res.json('New Preferred Incomplete selected')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    resetTaskStatusAll: async (req, res)=>{
        try{
            await Task.updateMany({userId: req.user.id},{
                mondayStatus: 'unassigned',
                tuesdayStatus: 'unassigned',
                wednesdayStatus: 'unassigned',
                thursdayStatus: 'unassigned',
                fridayStatus: 'unassigned',
                saturdayStatus: 'unassigned',
                sundayStatus: 'unassigned'
            })
            console.log('All task statuses reset')
            res.json('All task statuses reset')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    resetTaskStatus: async (req, res)=>{
        try{
            await Task.findOneAndUpdate({_id: req.body.taskIdFromJSFile},{
                mondayStatus: 'unassigned',
                tuesdayStatus: 'unassigned',
                wednesdayStatus: 'unassigned',
                thursdayStatus: 'unassigned',
                fridayStatus: 'unassigned',
                saturdayStatus: 'unassigned',
                sundayStatus: 'unassigned'
            })
            console.log('Task status reset')
            res.json('Task status reset')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
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
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    },
    deleteTask: async (req, res)=>{
        try{
            await Task.findOneAndDelete({_id:req.body.taskIdFromJSFile})
            console.log('Deleted Task')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
            res.render('error/500', {
                title: 'Internal Server Error',
                layout: './layouts/error'
            })
        }
    }
}    