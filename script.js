
let premium = document.getElementsByTagName('div')[0]
premium.addEventListener('mouseover', onOver0)
premium.addEventListener('mouseout', onOut0)

let suporte = document.getElementsByTagName('div')[1]
suporte.addEventListener('mouseover', onOver1)
suporte.addEventListener('mouseout', onOut1)

let baixar = document.getElementsByTagName('div')[2]
baixar.addEventListener('mouseover', onOver2)
baixar.addEventListener('mouseout', onOut2)

let ins = document.getElementsByTagName('div')[4]
ins.addEventListener('mouseover', onOver4)
ins.addEventListener('mouseout', onOut4)

let ent = document.getElementsByTagName('div')[5]
ent.addEventListener('mouseover', onOver5)
ent.addEventListener('mouseout', onOut5)

function onOver0() {
    this.style.color = 'green'
}

function onOut0() {
    this.style.color = 'white'
}

function onOver1() {
    this.style.color = 'green'
}

function onOut1() {
    this.style.color = 'white'
}

function onOver2() {
    this.style.color = 'green'
}

function onOut2() {
    this.style.color = 'white'
}

function onOver4() {
    this.style.color = 'green'
}

function onOut4() {
    this.style.color = 'white'
}

function onOver5() {
    this.style.color = 'green'
}

function onOut5() {
    this.style.color = 'white'
}