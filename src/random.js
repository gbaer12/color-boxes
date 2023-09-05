/** Return a random item from a list. */

function choice(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

/** Return integer 0 up to but not max. */

function randInt(max) {
    return Math.floor(Math.random() * max)
}

export { choice, randInt };