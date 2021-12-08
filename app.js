// ------ Popup ------//


const button = document.querySelector('button')
const popup = document.querySelector('.popupWrapper')
const closeButton = document.querySelector('.popupClose')

button.addEventListener('click', () => {
    saveStorage()
    popup.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})


// ------ LocalStorage - Form ---------//

var vname
var vsurname
var vlegal
var vemail
var vsubscription

function saveStorage(){
    vname=document.getElementById("name").value;
    vsurname=document.getElementById("surname").value;
    vemail=document.getElementById("email").value;
    vlegal=document.getElementById("legal").value;
    vsubscription=document.getElementById("subscription").value;
    localStorage.Name=vname;
    localStorage.Surname=vsurname;
    localStorage.Email=vemail;
    localStorage.Legal=vlegal;
    localStorage.Subscription=vsubscription;

}