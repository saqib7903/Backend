import fs from "fs/promises"

let a = await fs.readFile("saqib.txt")
let b = await fs.writeFile("saqib.txt" , "\n\nAmazing promise") //use append file if you do not want to modify the existing file
console.log(a.toString())