// function noSelect() {
//     return false
// }
window.onselectstart =  () =>{
    return false
}

// document.addEventListener('selectstart', function (e) {



// })
document.addEventListener('contextmenu', (e) => {
    // console.log(e);

    e.preventDefault();
    // e.stopPropagation()
})
// if (window.sidebar) {
//     document.onmousemove = noSelect;
// }