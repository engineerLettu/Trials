import { appendFileSync } from "fs";
import { createInterface } from "readline";


const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = (message) => {
    return new Promise((resolve) => readline.question(message, resolve))
};


class Person {
    constructor(name = "", number = "", email = "") {
        this.name = name;
        this.number = number;
        this.email = email;
    }

    saveToCSV() {
        const content = `${this.name}, ${this.number}, ${this.email}\n`;
        try {
            appendFileSync("./contacts.csv", content);
            console.log(`${this.name} saved!`)
        } catch (err) {
            console.error(err);
        }
    }
}





const startApp = async () => {
    let shouldContinue = true;
    while (shouldContinue) {
        const name = await readLineAsync("Contact name: ");

        let number = "";
        do {
            number = await readLineAsync("Contact number: ");
            if (!/^\d{10}$/.test(number.trim())) {
                console.log("Please enter 10 digits only.");
            }
        } while (!/^\d{10}$/.test(number.trim()));

        let email = "";
        do {
            email = await readLineAsync("Contact email: ");
            if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
                console.log("Please enter a correct email.");
            }
        } while (!/^\S+@\S+\.\S+$/.test(email.trim()));

        try {
            const person = new Person(name, number, email);
            person.saveToCSV();
        } catch (err) {
            console.error(err)
        }
        const response = await readLineAsync("Continue [y]: ");
        shouldContinue = response.trim().toLowerCase() === "y";
    }
    readline.close();
}

startApp();