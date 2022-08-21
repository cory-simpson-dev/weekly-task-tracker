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
        document.getElementById(`row${taskId}`).remove()
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

async function addFavoriteTask(){
    const taskNameHyphenated = this.parentNode.id
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
            } 
            this.classList.add('favorited')
            const favoritesDropdown = document.getElementById('favorites')
            // create container row
            let favoritesRow = document.createElement('div')
            favoritesRow.classList.add('row', 'no-margin')
            favoritesRow.setAttribute('id',`row${taskNameHyphenated}`)
            // create title column & attach to row
            let favoritesTitle = document.createElement('div')
            favoritesTitle.classList.add('col', 's8')
            favoritesTitle.innerHTML = taskName
            favoritesRow.appendChild(favoritesTitle)
            // create create button
            let favoritesCreateBtn = document.createElement('div')
            favoritesCreateBtn.classList.add('col', 's2')
            // create create btn anchor and icon
            let createBtn = document.createElement('a')
            createBtn.classList.add('waves-effect', 'waves-light', 'btn', 'no-padding')
            let createIcon = document.createElement('i')
            createIcon.setAttribute('id',`create${taskNameHyphenated}`)
            createIcon.classList.add('material-icons', 'create')
            createIcon.innerHTML = 'add'
            createIcon.addEventListener('click', createFavoriteTask)
            // append create together and add to row
            favoritesRow.appendChild(favoritesCreateBtn).appendChild(createBtn).appendChild(createIcon)
            // create remove button
            let favoritesRemoveBtn = document.createElement('div')
            favoritesRemoveBtn.classList.add('col', 's2')
            // create remove btn anchor and icon
            let removeBtn = document.createElement('a')
            removeBtn.classList.add('waves-effect', 'waves-light', 'btn', 'no-padding')
            let removeIcon = document.createElement('i')
            removeIcon.setAttribute('id',`remove${taskNameHyphenated}`)
            removeIcon.classList.add('material-icons', 'remove')
            removeIcon.innerHTML = 'delete'
            removeIcon.addEventListener('click', removeFavoriteTask)
            // append create together and add to row
            favoritesRow.appendChild(favoritesRemoveBtn).appendChild(removeBtn).appendChild(removeIcon)
            favoritesDropdown.appendChild(favoritesRow)
        }catch(err){
            console.log(err)
        }
}

async function createFavoriteTask(){
    const taskName = this.id.slice(6).split('-').join(' ')
    const taskNameHyphenated = this.id.slice(6)
        try{
            const response = await fetch('tasks/createTaskFromFavorite', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'taskItem': taskName
                })
            })
            const data = await response.json()
            // document.getElementById('welcome').innerHTML = data.id
            console.log(data)
            // create a row
            let newTaskRow = document.createElement('div')
            newTaskRow.classList.add('row')
            newTaskRow.setAttribute('id',`row${data.id}`)
            // create task name div
            let newTaskNameDiv = document.createElement('div')
            newTaskNameDiv.classList.add('col','s5')
            //      create anchor
            let newTaskNameBtn = document.createElement('a')
            newTaskNameBtn.classList.add('dropdown-trigger','btn')
            newTaskNameBtn.setAttribute('data-target',`dropdown${data.id}`)
            newTaskNameBtn.setAttribute('href','#')
            //          add inner text to anchor
            newTaskNameBtn.innerHTML = taskName
            //      create ul with dropdown
            let newTaskDropdown = document.createElement('ul')
            newTaskDropdown.classList.add('dropdown-content')
            newTaskDropdown.setAttribute('id',`dropdown${data.id}`)
            newTaskDropdown.setAttribute('tabindex','0')
            //          create li (favorite)
            let newFavoriteBtn = document.createElement('li')
            newFavoriteBtn.setAttribute('id',`${taskNameHyphenated}`)
            //              create anchor
            let newFavoriteAnchor = document.createElement('a')
            newFavoriteAnchor.classList.add('add',`fav${taskNameHyphenated}`,'favorited')
            //                  add inner text to anchor
            newFavoriteAnchor.innerHTML = 'Favorite'
            //      append anchor to li to ul
            newTaskDropdown.appendChild(newFavoriteBtn).appendChild(newFavoriteAnchor)
            //          create li (reset)
            let newResetBtn = document.createElement('li')
            newResetBtn.setAttribute('id',`res${data.id}`)
            //              create anchor
            let newResetAnchor = document.createElement('a')
            newResetAnchor.classList.add('res')
            //                  add inner text to anchor
            newResetAnchor.innerHTML = 'Reset'
            newResetAnchor.addEventListener('click', resetTaskStatus)
            newTaskDropdown.appendChild(newResetBtn).appendChild(newResetAnchor)
            //          create li (delete)
            let newDeleteBtn = document.createElement('li')
            newDeleteBtn.setAttribute('id',`del${data.id}`)
            //              create anchor
            let newDeleteAnchor = document.createElement('a')
            newDeleteAnchor.classList.add('del')
            //                  add inner text to anchor
            newDeleteAnchor.innerHTML = 'Delete'
            newDeleteAnchor.addEventListener('click', deleteTask)
            newTaskDropdown.appendChild(newDeleteBtn).appendChild(newDeleteAnchor)
            // append task name btn to div
            newTaskNameDiv.appendChild(newTaskNameBtn)
            // append task name dropdown to div
            newTaskNameDiv.appendChild(newTaskDropdown)
            // append task name div to row
            newTaskRow.appendChild(newTaskNameDiv)
            // create sunday status div
            let newSundayStatusDiv = document.createElement('div')
            newSundayStatusDiv.classList.add('col','s1','center','no-padding')
            newSundayStatusDiv.setAttribute('id',`${data.id}`)
            let newSundayStatusIcon = document.createElement('i')
            newSundayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','sunday')
            newSundayStatusIcon.innerHTML = 'remove'
            newSundayStatusIcon.addEventListener('click', toggleSundayStatus)
            newTaskRow.appendChild(newSundayStatusDiv).appendChild(newSundayStatusIcon)
            // append row to #tasksContainer
            document.getElementById('tasksContainer').appendChild(newTaskRow)
            // create monday status div
            let newMondayStatusDiv = document.createElement('div')
            newMondayStatusDiv.classList.add('col','s1','center','no-padding')
            newMondayStatusDiv.setAttribute('id',`${data.id}`)
            let newMondayStatusIcon = document.createElement('i')
            newMondayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','monday')
            newMondayStatusIcon.innerHTML = 'remove'
            newMondayStatusIcon.addEventListener('click', toggleMondayStatus)
            newTaskRow.appendChild(newMondayStatusDiv).appendChild(newMondayStatusIcon)
            // append row to #tasksContainer
            document.getElementById('tasksContainer').appendChild(newTaskRow)
            // create tuesday status div
            let newTuesdayStatusDiv = document.createElement('div')
            newTuesdayStatusDiv.classList.add('col','s1','center','no-padding')
            newTuesdayStatusDiv.setAttribute('id',`${data.id}`)
            let newTuesdayStatusIcon = document.createElement('i')
            newTuesdayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','tuesday')
            newTuesdayStatusIcon.innerHTML = 'remove'
            newTuesdayStatusIcon.addEventListener('click', toggleTuesdayStatus)
            newTaskRow.appendChild(newTuesdayStatusDiv).appendChild(newTuesdayStatusIcon)
            // create wednesday status div
            let newWednesdayStatusDiv = document.createElement('div')
            newWednesdayStatusDiv.classList.add('col','s1','center','no-padding')
            newWednesdayStatusDiv.setAttribute('id',`${data.id}`)
            let newWednesdayStatusIcon = document.createElement('i')
            newWednesdayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','wednesday')
            newWednesdayStatusIcon.innerHTML = 'remove'
            newWednesdayStatusIcon.addEventListener('click', toggleWednesdayStatus)
            newTaskRow.appendChild(newWednesdayStatusDiv).appendChild(newWednesdayStatusIcon)
            // create thursday status div
            let newThursdayStatusDiv = document.createElement('div')
            newThursdayStatusDiv.classList.add('col','s1','center','no-padding')
            newThursdayStatusDiv.setAttribute('id',`${data.id}`)
            let newThursdayStatusIcon = document.createElement('i')
            newThursdayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','thursday')
            newThursdayStatusIcon.innerHTML = 'remove'
            newThursdayStatusIcon.addEventListener('click', toggleThursdayStatus)
            newTaskRow.appendChild(newThursdayStatusDiv).appendChild(newThursdayStatusIcon)
            // create friday status div
            let newFridayStatusDiv = document.createElement('div')
            newFridayStatusDiv.classList.add('col','s1','center','no-padding')
            newFridayStatusDiv.setAttribute('id',`${data.id}`)
            let newFridayStatusIcon = document.createElement('i')
            newFridayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','friday')
            newFridayStatusIcon.innerHTML = 'remove'
            newFridayStatusIcon.addEventListener('click', toggleFridayStatus)
            newTaskRow.appendChild(newFridayStatusDiv).appendChild(newFridayStatusIcon)
            // create saturday status div
            let newSaturdayStatusDiv = document.createElement('div')
            newSaturdayStatusDiv.classList.add('col','s1','center','no-padding')
            newSaturdayStatusDiv.setAttribute('id',`${data.id}`)
            let newSaturdayStatusIcon = document.createElement('i')
            newSaturdayStatusIcon.classList.add(`res${data.id}`,'tiny','material-icons','status','saturday')
            newSaturdayStatusIcon.innerHTML = 'remove'
            newSaturdayStatusIcon.addEventListener('click', toggleSaturdayStatus)
            newTaskRow.appendChild(newSaturdayStatusDiv).appendChild(newSaturdayStatusIcon)
            // append row to #tasksContainer
            document.getElementById('tasksContainer').appendChild(newTaskRow)
            // initialize materialize dropdown
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {
                constrainWidth: false,
                coverTrigger: false,
            });
        } catch(err){
            console.log(err)
        }
}

async function removeFavoriteTask(){
    const taskName = this.id.slice(6).split('-').join(' ')
    const taskNameHyphenated = this.id.slice(6)
    const grabRow = document.getElementById(`row${taskNameHyphenated}`)
    grabRow.remove()
    let removeFavoriteClass = document.querySelectorAll(`.fav${taskNameHyphenated}`)
    // remove class 'favorited'
    Array.from(removeFavoriteClass).forEach((el) => {
        el.classList.remove('favorited')
    })
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
    const taskIdFull = this.parentNode.id
    const allStatus = document.querySelectorAll(`.${taskIdFull}`)
    Array.from(allStatus).forEach((el)=>{
        el.innerHTML = `remove`
        el.classList.remove('complete')
        el.classList.remove('incomplete')
    })
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