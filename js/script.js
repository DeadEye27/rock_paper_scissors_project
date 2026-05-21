/*
    FUNGSI : getComputerChoice

Create a Function that called getComputerChoice for the computer to 
get choice between rock or paper or scissors at random
using Math.random() that return a random number between 0 - 1  

jadi nanti math random akan di bagi 3, kurang dari sama dengan 0.4, 
lebih dari 0.4 dan kurang dari 0.6, dan Lebih dari sama dengan 0.6

buat variabel randomNumber
computer akan mendapatkan rock jika angka yang didapatkan di variabel 
randomNumber kurang dari sama dengan 0.4 

jika variable randomNumber berisikan angka lebih dari 0.4 dan kurang dari 0.6, 
computer akan mendapatkan paper sebagai pilihan

jika variable randomNumber berisikan angka lebih dari sama dengan 0.6, 
maka computer akan mendapatkan scissors sebagai pilihan

pilihan computer akan di masukan ke dalam variable computerChoice 
yang berupa string dan akan di outputkan

*/

const getComputerChoice = () => {
    const randomNumber = Math.random();
    let computerChoice;

    if (randomNumber <= 0.4) {
        computerChoice = "rock";
    } else if (randomNumber >= 0.4 && randomNumber <= 0.6) {
        computerChoice = "paper";
    } else if (randomNumber >= 0.6) {
        computerChoice = "scissors"
    }

    console.log(randomNumber);
    // console.log(computerChoice);
    return computerChoice;
};


/*
    FUNGSI : getHumanChoice
buat fungsi getHumanChoice()
Mengambil input user menggunakan methode prompt
masukan ke variable humanChoice
test dengan console.log(humanChoice)

Buat function bernama getHumanChoice yang berfungsi untuk mengoutputkan input user
user memasukan input pilihan gunting batu kertas
input dari user akan di jadi kan lower case dengan fungsi toLowerCase

*/

const getHumanChoice = () => {
    // console.log(humanChoice);
    isValid = false
    do {
        let rawHumanChoice = prompt("Masukan Pilihan Anda");
        let humanChoice = rawHumanChoice.toLowerCase()
        if (humanChoice == "paper" || humanChoice == "rock" || humanChoice == "scissors") {
            isValid = true;
            return humanChoice;
        }
    } while (isValid);
};


/*
    Mencatat Hasil Permainan / Score

Membuat Variable humanScore dan computerScore
masing masing diiniliasasi dengan nilai 0
Jika user menang, humanScore ditambah 1
jika komputer menang, computerScore ditambah 1
jika hasil draw (pilihan nya sama), humanScore dan computerScore tidak bertambah atau tetap

*/


/*
    FUNGSI : playRound(humanChoice, computerChoice)l

tulis logika permainan batu gunting kertas
input yang diberikan adalah humanChoice dan computerChoice
masukan input yang didapatkan ke variabel humanSelection dan computerSelection 
bandingkan value dari variabel 
output yang diharapkan adalah console log menang, kalah, seri 
jika humanChoice menang maka humanScore tambah 1 poin
jika computerChoice menang maka computerScore tambah 1 poin
jika seri maka ngga ada yang bertambah baik humanScore maunpun computerScore

*/

let humanScore = 0;
let computerScore = 0;
const playRound = (humanChoice, computerChoice) => {
    let humanSelection = humanChoice;
    let computerSelection = computerChoice;

    if ((humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "rock")) {
        console.log(`pilihan user: ${humanSelection}`);
        console.log(`pilihan komputer: ${computerSelection}`);
        console.log("Komputer Menang");
        computerScore = computerScore + 1;
    } else if ((humanSelection == "paper" && computerSelection == "rock") || (humanSelection == "scissors" && computerSelection == "paper") || (humanSelection == "rock" && computerSelection == "scissors")) {
        console.log(`pilihan user: ${humanSelection}`);
        console.log(`pilihan komputer: ${computerSelection}`);
        console.log("User Menang");
        humanScore = humanScore+1;
    } else {
        console.log(`pilihan user: ${humanSelection}`);
        console.log(`pilihan komputer: ${computerSelection}`);
        console.log("Seri");
    }

    console.log(`score User : ${humanScore}`);
    console.log(`score komputer : ${computerScore}`);
    
    
}

const playGame = () => {
    for (let i = 1; i < 6; i++) {
        isValid = false;
        let finalHumanChoice = "";
        do {
            let rawHumanChoice = prompt("Masukan Pilihan Anda");
            let humanChoice = rawHumanChoice.toLowerCase()
            if (humanChoice == "paper" || humanChoice == "rock" || humanChoice == "scissors") {
                isValid = true;
                finalHumanChoice = humanChoice
                // return humanChoice;
            }
            alert("perhatikan input anda");
        } while (!isValid);
        playRound(finalHumanChoice, getComputerChoice());
        console.log(`Permainan ke : ${i}`);
    }
}

/*
    FUNGSI : playGame()

Masukan untuk deklarasi fungsi playRound() dan varibel yang berfungsi menyimpan score ke fungsi playGame() 
panggil playRound() sebanyak 5 kali agar permainan bisa berjalan selama 5 kali

*/
playGame();
