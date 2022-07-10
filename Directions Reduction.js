
function dirReduc(arr) {
    // ...
    let reg = /NORTHSOUTH|SOUTHNORTH|WESTEAST|EASTWEST/g
    let str = arr.join('')
    while (reg.test(str)) {
        str = str.replace(reg, '')
    }
    return str.match(/NORTH|SOUTH|WEST|EAST/g) || []
}