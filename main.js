// add or change or remove class
userClickadd = function (id, id1, change) {
    document.getElementById(id).classList.add(change);
    document.getElementById(id1).classList.add(change);
}
function userClickchange(id, change) {
    document.getElementById(id).classList.toggle(change);
}
function userClickremove(id, id2, change, id3) {
    document.getElementById(id).classList.remove(change);
    document.getElementById(id2).classList.remove(change);
    document.getElementById(id3).classList.remove(change);
}
//slider bar
var index = 0;

SlideChange = function () {
    var Slide = [
        "img/poster-slide.jpg",
        "img/poster-slide2.jpg",
        "img/poster-slide3.jpg",
        "img/poster-slide4.jpg",
        "img/poster-slide5.jpg",

    ];

    index++;
    document.getElementById('image').src = Slide[index];
    if (index == 4) {
        index = -1;
    }
}
setInterval(SlideChange, 5000);

// add cart 

const btn = document.querySelectorAll('.addcart');
btn.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productimg = product.querySelector('.img__product').src;
        var productname = product.querySelector('.name__product').innerText;
        var productprice = product.querySelector('.price__product').innerText;
        addcart(productimg, productprice, productname);
    })
    index++;
})
function addcart(productimg, productprice, productname) {
    var carthover = document.getElementById('cart__hover')
    const newdiv = document.createElement('div');
    newdiv.innerHTML = '<div class="incart"><img src="'+productimg+'" alt=""><div class="incart__info"><div ><h3>'+productname+'</h3> <span>1</span><i class="far fa-window-close"></i></div><p>'+productprice+' <u>đ</u></p></div></div>';
    carthover.appendChild(newdiv);
    newdiv.classList.add('newbox');
    alert('đã thêm vào giỏ');
}
/*
  <div class="incart"><img src="000" alt=""><div class="incart__info"><div ><h3>111</h3> <span>1</span><i class="far fa-window-close"></i></div><p>222 <u>đ</u></p></div></div>
*/
// main product
var newproduct = document.getElementById("fornew__product");
var salesproduct= document.getElementById("sales__product");
var trendproduct = document.getElementById("fortrend__product");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");


listChange = function(id1, id2, id3, id4, id5, id6) {
    document.getElementById(id1).style = 'color: #c89979;'
    document.getElementById(id2).style = 'color: none;'
    document.getElementById(id3).style = 'color: none;'

    document.getElementById(id4).style = 'display: block; visibility: visible;';
    document.getElementById(id5).style = 'display: none; visibility: hidden;';
    document.getElementById(id6).style = 'display: none; visibility: hidden;';
   

}
// reponsilative small
function menu(){
    document.getElementById('list__chose').classList.add('list__click');
}
function removemenu(){
    document.getElementById('list__chose').classList.remove('list__click');
}
// header bottom
// gioi thieu
// function home(){
//     document.querySelector('.slider').style = 'display: unset;  visibility: unset;'
//    bottom: ; document.querySelector('.content').style = 'display: unset; visibility: unset;';

// }


function introdure(){

    document.querySelector('.slider').style = 'display: none; visibility: hidden;';
    document.querySelector('.content').style = 'display: none; visibility: hidden;';
    document.querySelector('.footer').style = 'display: block !impotant; visibility: unset; bottom: 0;'
    document.querySelector('.js__content-procedure').style = "display: unset; visibility: visible;"
    document.querySelector('#border__botton').classList.remove('border__botton')
    document.querySelector('#jsIntrodure').classList.add('border__botton')

}
