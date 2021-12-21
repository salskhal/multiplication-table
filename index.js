// for (i = 1; i <= 12; i++){
//     let answer = i * 2
//     console.log(`2 * ${i} = ${answer}`)
// }

// function restart() {
//     // This is the first multiplier
//     for (i = 1; i <= 12; i++) {
//         // This is the second multiplier
//         console.log('Multiplication table for '+i)
//         for (j = 1; j <= 12; j++) {
//             let answer = i * j
//             console.log(`${i} * ${j} = ${answer}`)
//         }
//     }
// }

// restart()


let input = document.querySelector(".input")
let generate = document.querySelector(".btn")
let root = document.querySelector(".root")


generate.addEventListener("click", () => {
    let inputValue = input.value
    let text = ""
    if (isNaN(inputValue)) {
        text += `<h2>This  <span>${inputValue}</span> will not work for the operation as it is not a number</h2>`
        root.innerHTML = text
    } else {
        for (i = 1; i <= 12; i++) {
            text +=`<ul class="list">`
            let answer = i * inputValue
            text +=
                `
                <li class="list-item">${inputValue} <i class="fas fa-times"></i> ${i} = ${answer} </li>
            `
        }
        text += `</ul>`
        root.innerHTML = text
    }

})



// 