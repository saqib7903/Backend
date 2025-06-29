const fs = require("fs")

console.log(fs)


console.log("starting")
//fs.writeFileSync("saqib.txt" , "hey there , im saqib") //not a good approach (writes a blocking code)

fs.writeFile("saqib.txt" , "hey there its a better approach" , () => {
    console.log("done")
    fs.readFile("saqib.txt" , (error,data) => {
        console.log(error , data.toString())
    })
}) //scheduled

fs.appendFile("saqib.txt" , "appending" , (e,d)=> {
    console.log(d)
})
console.log("ending")