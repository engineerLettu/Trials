import bcrypt, { compareSync, hashSync } from "bcrypt";
import promptModule from "prompt-sync";

const prompt = promptModule();
const password = prompt("Enter password: ");
const hashPassword = bcrypt.hashSync(password, 10);
console.log(`My hashed password is: ${hashPassword}`);


const mockDB = { passwords: {} };
mockDB["passwords"] = hashPassword;

console.log(mockDB);

//validation

const comparePassword = prompt("Enter password again: ");

const status = bcrypt.compareSync(comparePassword, hashPassword); // true

if (status) {
    console.log("User in!");
} else {
    console.log("User denied entry!");
}

