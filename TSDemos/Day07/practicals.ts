//The login validator
let verifyLogin = (actual:string, expected:string):boolean =>{
    if(actual === expected){
        console.log("Login successful")
        return true
    }
    else{
        console.log("Login failed")
        return false
    }
} 

verifyLogin("admin","admin") //true
verifyLogin("user","admin") //false

//Example 2:
let launchbrowser = (browserName:string, mode:string = "headless"):void =>{
    console.log(`Launching ${browserName} in ${mode} mode`)
}
launchbrowser("Chrome") //headless mode by default
launchbrowser("Firefox","headed") //headed mode specified

//Example 3:
let generatemail = (fname:string, domain:string = `gmail.com`):string =>{
    return(`${fname}@${domain}`)
}
console.log(generatemail("John")) //domain is default
console.log(generatemail("Alice","customdomain.com")) //custom domain specified