const array = {
    angaka: [1, 2, 3, 3, 4, 213],
    makanan: {
        buah: ['mangga', 'aple', 'apkat'],
        daging: ['babi', 'ayam', 'sapi']
    }
}


// console.log(array.makanan.buah);

function copy(...array) {

    array.map(arr => {
        arr[0] + 1
    })
    return array
}
copy()

console.log(copy(array));