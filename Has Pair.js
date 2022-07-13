
function hasPair(A, sum) {
    // Beware of large arrays
    let r = new Set()
    for (let num of A) {
        if (r.has(sum - num)) {
            return true

        }
        r.add(num)
    }
    return false
}