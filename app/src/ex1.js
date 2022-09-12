let rls = require('readline-sync');
let nom = rls.question("Entrez votre nom :");
console.log("Votre nom est :" +nom);
let age = rls.question("Entrez votre age :");
age++;
console.log("Votre age apres votre anniverssaire est :" +age);
