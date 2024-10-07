let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText= count

}

function save() {

    console.log(count);
}





// function number() {
// console.log(42)
// }

// number()

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
 
// function logtime() {
//     totaltime = lap1 + lap2 +lap3;
//     console.log(totaltime)
//     or 
//     console.log(lap1 + lap2 + lap3)
// }
// logtime()

// function incrementLap() {
//     lapscompleted = lapscompleted + 1;

// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapscompleted)