var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){

    popupbox.style.display="block"
    popupoverlay.style.display="block"
})



var cancelpoupup=document.getElementById("cancel-popup")
 cancelpoupup.addEventListener("click",function(event){
    event.preventDefault()
       popupbox.style.display="none"
 popupoverlay.style.display="none"
 })


 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-titele-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var bookdescriptioninput=document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
event.preventDefault(event);
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deleteBook(event)">Delete</button>`
container.append(div)
popupbox.style.display="none"
popupoverlay.style.display="none"

 })

 function deleteBook(event){

    event.target.parentElement.remove()
 }