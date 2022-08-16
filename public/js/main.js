const deleteBtn = document.querySelectorAll('.del')
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

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTask)
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
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function updatePreferredComplete(){
    const preferredCompleteInnerText = this.id
        try{
            if (!this.classList.contains('selected')) {
                const response = await fetch('tasks/updatePreferredComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'preferredComplete': preferredCompleteInnerText
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

async function updatePreferredIncomplete(){
    const preferredIncompleteInnerText = this.id
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
                location.reload()
            }
        }catch(err){
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markSundayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markMondayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markTuesdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markWednesdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markThursdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markFridayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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
                const data = await response.json()
                console.log(data)
                location.reload()
            } else {
                const response = await fetch('tasks/markSaturdayComplete', {
                    method: 'put',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        'taskIdFromJSFile': taskId
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