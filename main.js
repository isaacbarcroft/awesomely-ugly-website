let button = document.querySelector('.button');
let img = document.querySelector('.img');
let footer = document.getElementById('footer');
console.log(footer);
footer.addEventListener('mouseover', function(event){
    event.target.innerText = 'Thanks for viewing';
})
button.addEventListener('click', function(event){

    if (img.src = "https://placekitten.com/200/300"){
        img.src = "https://placekeanu.com/200/150"
} else if (img.src ="https://placekeanu.com/200/150"){
    img.src = "https://placekitten.com/200/300";
}
});
