// STUDI KASUS MODULARISASI
// 1.Bangun Datar
import { calculateSquareArea } from "./twoDemontionalFigure/persegi.js";
import { calculateCircleArea } from "./twoDemontionalFigure/lingkaran.js";
console.log(calculateSquareArea(2));
console.log(calculateCircleArea(90));

// 2. Pengolahan String
import { besar } from "./stringProcessing/teks.js";
console.log(besar("Hello World"));

// 3. Waktu
import { now } from "./time/waktu.js";
console.log(now);

// 4. Salam Default
import sapa from "./defaultGreeting/salam.js";
console.log(sapa("Lexx"));

// 5. Utility Campuran
import versi, { hitung } from "./mixedUtilities/utils.js";
console.log(versi());
console.log(hitung(2, 3));
