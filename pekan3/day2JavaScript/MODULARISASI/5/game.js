import readline from "readline-sync";

function guessTheNumber() {
  let nyawa = 3;
  const randomNumber = Math.floor(Math.random() * 10);

  while (nyawa > 0) {
    let userGuess = parseInt(readline.question("Masukkan Pilihan (0-9): "));

    if (userGuess === randomNumber) {
      console.log(`Tebakan Kamu Benar, Angkanya Adalah ${randomNumber}`);
      console.log("Selamat! Anda menebak dengan benar.");
      break;
    } else {
      nyawa--;
      console.log(`Tebakan Kamu Salah, Sisa Nyawa Kamu Adalah ${nyawa}`);
    }
  }

  if (nyawa === 0) {
    console.log(
      `Tebakan Kamu Salah, Kamu Kehabisan Nyawa. Angka yang benar adalah ${randomNumber}`
    );
    console.log("Game Over!");
  }
}

export default guessTheNumber;
