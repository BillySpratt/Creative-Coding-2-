clap(21, 45);

function clap(startnum, endnum) {
    let loopCount = endnum - startnum
    for (let i = 0; i < loopCount; i++) {
        console.log("Hi " + (startnum + i))
    }
}