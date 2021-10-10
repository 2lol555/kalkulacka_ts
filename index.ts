import readline from "readline";

//Zakladanie readline prostredia
const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hlavná funcia programu, kde sa spýtame uživateľa aby zadal príklad
// Príklad musí byť zložený z tých istých operácií, čiže môžeme zadať 5-6-7 ale nie 5-6+1
// Ak sú operácie jedného typu, môžeme ich zadať ľubovoľné množstvo
// Vracia výsledok príkladu tlačením "solution" premennej
readLineInterface.question('Enter the equation, only one operation allowed in the whole equation +|-: ', (answer) => {
    let solution: number = 0

    // Addition
    let operator: string = "+"
    let splitans = answer.split(operator)

    if(splitans.length >= 2){
        for (let i of splitans) {
            solution = addition(solution, parseInt(i));
        }
    }

    //Subtraction
    operator = "-"
    splitans = answer.split(operator)

    if(splitans.length >= 2){
        let first: boolean = true;
        for (let i of splitans) {
            solution = subtraction(solution, parseInt(i), first)
            first = false
        }
    }

    console.log(answer + "=" + solution)
    readLineInterface.close()
});

// Funkcia addition pripočíta číslo x ku y a vráti ich výsledok
function addition(x:number, y:number){
    return x+y
}

//Funkcia subtraction vráti súčet prvého (first == true) a rozdiely všetkych zvyšných čísel (first == false)
function subtraction(x:number, y:number, first:boolean){
    if (first){
        return x + y
    }else {
        return x - y
    }
}