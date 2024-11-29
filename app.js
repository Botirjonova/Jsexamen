// 1-savol: Arifmetik operatorlar
alert(5 % 2); // 5 ni 2 ga bo'lishdan qoldiq 1 bo'ladi
// 2-savol: Math metodlari (Random son)
alert(Math.floor(Math.random() * 10) + 1); // 1 dan 10 gacha bo'lgan random son
// 3-savol: Math metodlari (Sonni butun qilish)
alert(Math.floor(12.510)); // 12.510 ni butun son qismiga aylantirib 12 chiqadi
// 4-savol: Function (So'zdagi harflar soni)
function findLength() {
    let text = "MARS IT SCHOOL";
    alert(text.length); // So'zdagi harflar soni 14 ta
  }
  findLength();
// 5-savol: For loop (So'zni 10 marta chiqarish)
function printText() {
    for (let i = 0; i < 10; i++) {
      console.log("MARS IT SCHOOL");
    }
  }
  printText();
// 6-savol: Array methods (Ismni chiqarish)
let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
console.log(harflar[18] + harflar[14] + harflar[11] + harflar[8] + harflar[6]); // Soliha uchun

// 7-savol: If else (Yosh tekshirish)
var yosh = prompt("Yoshingizni kiriting:");
yosh = Number(yosh);
if (yosh > 18) {
  console.log("Siz balog'at yoshiga yetgansiz");
} else if (yosh === 18) {
  console.log("Balog'at yoshi muborak!");
} else {
  console.log("Siz balog'at yoshiga yetmagansiz");
}
// 8-savol: Stringni teskari chiqarish
var ism = prompt("Ismingizni kiriting:");
console.log(ism.split("").reverse().join(""));
// 9-savol: DOM (Ism va yoshni DOMga chiqarish)
var ism = prompt("Ismingizni kiriting:");
var yosh = prompt("Yoshingizni kiriting:");
document.body.innerHTML = `<h1 style="color: blue; font-size: 24px;">Ism: ${ism}</h1><p style="color: green; font-size: 20px;">Yosh: ${yosh}</p>`;
// 10-savol: Juft sonlarni chiqarish
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar);
