// function noSelect() {
//     return false
// }
window.onselectstart = () => {
    return false
}

// document.addEventListener('selectstart', function (e) {



// })
document.addEventListener('contextmenu', (e) => {
    // console.log(e);

    e.preventDefault();
    // e.stopPropagation()

    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Anda Gak Boleh Copy Paste',

    })
})
// if (window.sidebar) {
//     document.onmousemove = noSelect;
// }