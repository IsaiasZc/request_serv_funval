import { requestInfo } from "./process.js";

const submitBtn = document.getElementById("submit");
let form = document.getElementById("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("nombre").value;
    requestInfo(name);
})

// submitBtn.addEventListener("click", () => {
//     let name = document.getElementById("nombre");
//     console.log(name.value);
// })