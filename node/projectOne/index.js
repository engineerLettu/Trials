import { appendFileSync } from 'fs';
import { createInterface } from 'readline'

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});


const readLineAsync = (message) =>{
   return new Promise((resolve)=> readline.question(message, resolve))
}

 class Person{
   constructor(name="", contact="", email=""){
        this.name = name;
        this.contact=contact;
        this.email=email;
    }

     saveToCSV(){
            const content = `${this.name}, ${this.contact}, ${this.email}\n`
            try{
                appendFileSync("./contact.csv", content)
                console.log(`${this.name} Saved!`)
            } catch(err){
                console.error(err);
            }
    }
}


const startApp = async() => {
  let shouldContinue = true;
  while(shouldContinue){
   
    const name = await readLineAsync("Contact name: ");
    const contact = await readLineAsync("Contact number: ");
    const email = await readLineAsync("Contact email: ");

    try{
    const person = new Person(name, contact, email);
    person.saveToCSV();
    } catch(err){
        console.error(err);
        console.log(`Could not save contatc details.`)
    }
    let response = await readLineAsync("Continue? y/n: ");
    shouldContinue = response.trim().toLowerCase() === "y";
  }
  readline.close();

}

startApp();