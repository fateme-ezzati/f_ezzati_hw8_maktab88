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
        </thead>
        ${userData.map((item, key) => {
        return (`<tr>
                    <td index="${key}">${key + 1}</td>
                    ${Object.values(item).map(data => { return (`<td index="${key}">${data}</td>`) }).join('')}
                </tr>`)
    }).join('')}`
}

makeTable()

// yekbar kar mikone
// let tableTitle = document.querySelector('thead>tr')

table.addEventListener("click", function (e) {
    console.log(e.target.attributes.index.value)
    if (e.target.localName === 'th') {
        let sortItem = e.target.innerHTML
        userData.sort((a, b) => (a[sortItem] > b[sortItem]) ? 1 : ((b[sortItem] > a[sortItem]) ? -1 : 0))
        console.table(userData)
        makeTable()
    }

    if (e.target.localName === 'td') {
        let index = Number(e.target.attributes.index.value)
        generateModal(index, true)
    }
})


function addNewData() {
    generateModal(0, false)
}

function generateModal(index, existed) {
    let modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    mainTag.appendChild(modal)

    modal.innerHTML = `
        <header>user info</header>
        <div class='rowInfo'>
            ${Object.keys(userData[index]).map((item, key) => {
        return (`<label for=${item}>${item}  <input type="text" placeholder=${item} name=${item} value=${existed ? userData[index][item] : ''}  ${item === 'uid' && existed ? 'readOnly' : ""}></label>`)
    }).join('')}
        </div>
        <div class='btnwrapper'><button class="cancel" onclick='cancel()'>cancel</botton> </div>
        `
}

function cancel() {
    let modal = document.getElementsByClassName('modal')[0]
    modal.remove()
}