const deleteBtn = document.querySelectorAll('.del')
const addFavoriteTaskBtn = document.querySelectorAll('.add')
const createFavoriteTaskBtn = document.querySelectorAll('.create')
const removeFavoriteTaskBtn = document.querySelectorAll('.remove')
const resetTaskStatusBtn = document.querySelectorAll('.res')
const resetTaskStatusAllBtn = document.querySelector('#reset-all')
const updatePreferredCompleteIcon = document.querySelectorAll('.preferred-complete')
const updatePreferredIncompleteIcon = document.querySelectorAll('.preferred-incomplete')
const sundayTaskStatus = document.querySelectorAll('.sunday')
const mondayTaskStatus = document.querySelectorAll('.monday')
const tuesdayTaskStatus = document.querySelectorAll('.tuesday')
const wednesdayTaskStatus = document.querySelectorAll('.wednesday')
const thursdayTaskStatus = document.querySelectorAll('.thursday')
const fridayTaskStatus = document.querySelectorAll('.friday')
const saturdayTaskStatus = document.querySelectorAll('.saturday')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        constrainWidth: false,
        coverTrigger: false,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        inDuration: 300,
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

resetTaskStatusAllBtn.addEventListener('click', resetTaskStatusAll)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTask)
})
Array.from(addFavoriteTaskBtn).forEach((el)=>{
    el.addEventListener('click', addFavoriteTask)
})
Array.from(createFavoriteTaskBtn).forEach((el)=>{
    el.addEventListener('click', createFavoriteTask)
})
Array.from(removeFavoriteTaskBtn).forEach((el)=>{
    el.addEventListener('click', removeFavoriteTask)
})
Array.from(resetTaskStatusBtn).forEach((el)=>{
    el.addEventListener('click', resetTaskStatus)
})
Array.from(updatePreferredCompleteIcon).forEach((el)=>{
    el.addEventListener('click', updatePreferredComplete)
})
Array.from(updatePreferredIncompleteIcon).forEach((el)=>{
    el.addEventListener('click', updatePreferredIncomplete)
})
Array.from(sundayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleSundayStatus)
})
Array.from(mondayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleMondayStatus)
})
Array.from(tuesdayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleTuesdayStatus)
})
Array.from(wednesdayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleWednesdayStatus)
})
Array.from(thursdayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleThursdayStatus)
})
Array.from(fridayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleFridayStatus)
})
Array.from(saturdayTaskStatus).forEach((el)=>{
    el.addEventListener('click', toggleSaturdayStatus)
})

async function deleteTask(){
    const taskId = this.parentNode.id.slice(3)
    try{
        const response = await fetch('tasks/deleteTask', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'taskIdFromJSFile': taskId
            })
        })
        document.getElementById(`row${taskId}`).style.display = "none"
        const data = await response.json()
        console.log(data)
        // location.reload()
    }catch(err){
        console.log(err)
    }
}

async function addFavoriteTask(){
    const taskName = this.parentNode.id.split('-').join(' ')
        try{
            if (!this.classList.contains('favorited')) {
                const response = await fetch('tasks/addFavoriteTask', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'favoritedTask': taskName
                    })
                })
                const data = await response.json()
                console.log(data)
                location.reload()
            } 
        }catch(err){
            console.log(err)
        }
}

async function createFavoriteTask(){
    const taskName = this.id.slice(6).split('-').join(' ')
        try{
            const response = await fetch('tasks/createTaskFromFavorite', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'taskItem': taskName
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        } catch(err){
            console.log(err)
        }
}

async function removeFavoriteTask(){
    const taskName = this.id.slice(6).split('-').join(' ')
        try{
            const response = await fetch('tasks/removeFavoriteTask', {
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'favoritedTask': taskName
                })
            })
            const data = await response.json()
            console.log(data)
            // location.reload()
        }catch(err){
            console.log(err)
        }
}

async function updatePreferredComplete(){
    const preferredCompleteInnerText = this.id
    const updatePreferredCompleteLocal = document.querySelectorAll('.complete')
    const allPreferredCompletes = document.querySelectorAll('.preferred-complete')
    Array.from(updatePreferredCompleteLocal).forEach((el)=>{
        el.innerHTML = `${preferredCompleteInnerText}`
    })
    Array.from(allPreferredCompletes).forEach((el)=>{
        el.style.color = 'white'
    })
    this.style.color = 'black'
        try{
            if (!this.classList.contains('selected')) {
                const response = await fetch('tasks/updatePreferredComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'preferredComplete': preferredCompleteInnerText
                    })
                })
                // select all .complete and change inner text to this.id preferredCompleteInnerTextFixed
                const data = await response.json()
                console.log(data)
                // location.reload()
            } 
        }catch(err){
            console.log(err)
        }
}

async function updatePreferredIncomplete(){
    const preferredIncompleteInnerText = this.id
    const updatePreferredIncompleteLocal = document.querySelectorAll('.incomplete')
    const allPreferredIncompletes = document.querySelectorAll('.preferred-incomplete')
    Array.from(updatePreferredIncompleteLocal).forEach((el)=>{
        el.innerHTML = `${preferredIncompleteInnerText}`
    })
    Array.from(allPreferredIncompletes).forEach((el)=>{
        el.style.color = 'white'
    })
    this.style.color = 'black'
        try{
            if (!this.classList.contains('selected')) {
                const response = await fetch('tasks/updatePreferredIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'preferredIncomplete': preferredIncompleteInnerText
                    })
                })
                const data = await response.json()
                console.log(data)
                // location.reload()
            }
        }catch(err){
            console.log(err)
        }
}

async function resetTaskStatus(){
    const taskId = this.parentNode.id.slice(3)
    // const allStatus = document.querySelectorAll(`i.${taskId}`)
        try{
            const response = await fetch('tasks/resetTaskStatus', {
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'taskIdFromJSFile': taskId
                })
            })
            const data = await response.json()
            console.log(data)
            // location.reload()
        } catch(err){
            console.log(err)
        }
}

async function resetTaskStatusAll(){
    const allStatus = document.querySelectorAll('.status')
    Array.from(allStatus).forEach((el)=>{
        el.innerHTML = `remove`
        el.classList.remove('complete')
        el.classList.remove('incomplete')
    })
        try{
            const response = await fetch('tasks/resetTaskStatusAll', {
                method: 'put',
                headers: {'Content-type': 'application/json'}
            })
            const data = await response.json()
            console.log(data)
        } catch(err){
            console.log(err)
        }
}

async function toggleSundayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markSundayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
                // location.reload()
            } else {
                const response = await fetch('tasks/markSundayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                // global variable declared in main.ejs
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
                // location.reload()
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleMondayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markMondayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markMondayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleTuesdayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markTuesdayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markTuesdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleWednesdayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markWednesdayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markWednesdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleThursdayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markThursdayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markThursdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleFridayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markFridayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markFridayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}

async function toggleSaturdayStatus(){
    const taskId = this.parentNode.id
        try{
            if (this.classList.contains('complete')) {
                const response = await fetch('tasks/markSaturdayIncomplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('complete')
                this.classList.add('incomplete')
                this.innerText = `${userPreferredIncompleteIcon}`
                const data = await response.json()
                console.log(data)
            } else {
                const response = await fetch('tasks/markSaturdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
                    })
                })
                this.classList.remove('incomplete')
                this.classList.add('complete')
                this.innerText = `${userPreferredCompleteIcon}`
                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
}