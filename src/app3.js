import "./app3.css"

const $square = $('#app3 .square')

$square.on('click',()=>{
    $square.toggleClass('active')
    //toggleClass 如果没有就加上，有就删除
})