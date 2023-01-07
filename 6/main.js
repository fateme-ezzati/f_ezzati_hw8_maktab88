// dynamic code for every kind of user data
// console.table(userData)

let mainTag = document.createElement('main')
document.body.appendChild(mainTag);
mainTag.innerHTML = '<header>userData table  <button class="addData" onclick="addNewData()">add new user</button></header><table id="userData"></table>'
let table = document.getElementById('userData')


function makeTable() {
    table.innerHTML = `
        <thead>
            <th class="title">row</th>
            ${Object.keys(userData[0]).map(item => { return (`<th class="title">${item}</th>`) }).join('')}
            <th>oparation</th>
        </thead>
        ${userData.map((item, key) => {
        return (`<tr>
                    <td index="${key}">${key + 1}</td>
                    ${Object.values(item).map(data => { return (`<td index="${key}">${data}</td>`) }).join('')}
                    <td>
                        <button class="delete" onclick='deleteUserModal(${key})'>d</botton>
                        <button class="addData" onclick='generateModal(${key},true)'>E</botton>
                    </td>
                </tr>`)
    }).join('')}`
}

makeTable()

// yekbar kar mikone
// let tableTitle = document.querySelector('thead>tr')

table.addEventListener("click", function (e) {
    // console.log(e.target.attributes.index.value)
    if (e.target.localName === 'th') {
        let sortItem = e.target.innerHTML
        userData.sort((a, b) => (a[sortItem] > b[sortItem]) ? 1 : ((b[sortItem] > a[sortItem]) ? -1 : 0))
        console.table(userData)
        makeTable()
    }

    // if (e.target.localName === 'td') {
    //     let index = Number(e.target.attributes.index.value)
    //     generateModal(index, true)
    // }
})


function addNewData() {
    generateModal(0, false)
}

function generateModal(index, existed) {
    let modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    mainTag.appendChild(modal)

    modal.innerHTML = `
        <header>user info <button class="cancel" onclick='cancel()'>x</botton> </header>
        <div class='rowInfo'>
            ${Object.keys(userData[index]).map((item, key) => {
        return (`<label for=${item}>${item}  <input type="text" placeholder=${item} name=${item} id=${item}  onchange="handleChange(event,${index})" value=${existed ? userData[index][item] : ''}  ${item === 'uid' && existed ? 'readOnly' : ""}></label>`)
    }).join('')}
        </div>
        <span class='errM'></span>
        <div class='btnwrapper'>
            <button class="addData" onclick='submit(${existed},${userData[index].uid})'>${existed ? 'update' : 'submit'}</botton> 
        </div>
        `
}

function cancel() {
    newData = {}
    let modal = document.getElementsByClassName('modal')[0]
    modal.remove()
}

function deleteUserModal(index) {
    let modal = document.createElement('div')
    modal.setAttribute('class', 'modal deleteModal')
    mainTag.appendChild(modal)
    modal.innerHTML=`
        <p>are you sure?</p>
        <div class='btnwrapper'>
          <button class="delete" onclick='deleteUser(${index})'>yes delete user</botton> 
            <button class="addData" onclick='cancel()'>no</botton> 
        </div>

    `

    // userData.splice(index, 1)
    // console.table(userData)
    // makeTable()
    // cancel()
}

function deleteUser(index){
     userData.splice(index, 1)
    console.table(userData)
    makeTable()
    cancel()
}

let newData = {}
function handleChange(e, index) {
    newData[e.target.id] = e.target.value
    // newData.index = index
}

function submit(existed, id) {
    let valid = validation(existed)
    if (valid.status) {
        // let index = newData.uid
        // delete newData.index
        if (existed) {
            let _id = id
            let index = userData.findIndex(item => item.uid === _id)
            if (index === -1) { return console.log('err') }
            for (const key in newData) {
                userData[index][key] = newData[key];
            }

        } else {
            userData.push(newData)
        }

        makeTable()
        cancel()
    } else {
        let element = document.getElementsByClassName('errM')[0]
        element.innerHTML = valid.msg
    }
}


function validation(existed) {
    if (!existed) {
        if (Object.keys(newData).length !== Object.keys(userData[0]).length)
            return { status: false, msg: 'لطفا تمامی فیلدهارو پر کنید!' }
    }

    for (const key in newData) {
        if (!newData[key]) {
            console.log(newData[key], key)
            return { status: false, msg: ` را پر کنید ${key} لطفا فیلد  ` }
        }
    }

    if (!existed) {
        let index = userData.findIndex(item => Number(item.uid) === Number(newData.uid))
        if (index !== -1) {
            return { status: false, msg: ` ایدی وارد شده موجود میباشد ` }
        }
    }

    if (newData.uid && !parseInt(newData.uid)) {
        return { status: false, msg: ` ایدی وارد شده عدد نیست` }
    }

    if (newData.phoneNumber && !parseInt(newData.phoneNumber)) {
        return { status: false, msg: ` شماره موبایل صحیح نیست` }
    }

    if (newData.postalCode && !parseInt(newData.postalCode)) {
        return { status: false, msg: 'کد پستی صحیح نمیباشد' }
    }


    return { status: true }
}