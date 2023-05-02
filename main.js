// let a = -12;

// if(
//     a > 0
// ){
//     a = a + 1

// }
// else{
//     a = a
// }
// console.log(a);



// let a = 10;

// if (
//     a > 0
// ) {
//     a += 1
// }
// else if (
//     a < 0
// ) {
//     a -= 2

// }
// else{
//     a = 10
// }
// console.log(a);

// let a = -5;
// let b = 1;
// let c = 1;
// let musbat = 0;
// let manfiy = 0;
// if (
//     a > 0
// ) {
//     musbat += 1
// }
// else {
//     manfiy += 1
// }

// if (
//     b > 0
// ) {
//     musbat += 1
// }
// else {
//     manfiy += 1
// }
// if (
//     c > 0
// ) {
//     musbat += 1
// }
// else {
//     manfiy += 1
// }
// console.log('Musbat sonlar ', musbat);
// console.log('manfiy sonlar', manfiy);

// let a = 10;
// let b = 10;

// if (
//     a > b
// ) {
//     console.log('kattasi', a);
// }
// else if(
//     b > a
// ){
//     console.log('kattasi', b);
// }
// else{
//     console.log('ikkalasi ham teng: ',a,b)
// }


// let a = 6;
// let b = 2;

// if (a < b) {
//     console.log('A kichik B dan');
// } else {
//     console.log('B kichik yoki teng A dan');
// }



// let a = 1;
// let b = 2;

// if (a > b) {
//     console.log(a);
//     console.log(b);

// } else {
//     console.log(b);
//     console.log(a);

// }


// let a = 5;
// let b = 10;

// if(
//     a < b
// ){
//     a += b + 1
// }

// console.log(a);
// console.log(b);

// let a = 12;
// let b = 12;
// if (
//     a > b || a < b
// ){
//     a += b;
//     b = a;
//     console.log(a,b)
// }
// else{
//     a = 0;
//     b = a;
//     console.log(a,b)
// }

// let a = 13;
// let b = 11;
// if (
//     a > b
// ){
//     b = a;
//     console.log(a,b)
// }
// else if(
//     b > a
// ){
//     a = b;
//     console.log(a,b)
// }
// else{
//     a = 0;
//     b = a;
//     console.log(a,b)
// }

// let a = 3;
// let b = 2;
// let c = 1;

// if(
//     a <= b && a <= c

// ){
//     console.log('kichigi',a);
// }
// else if(
//     b < a && b < c
// ){
//     console.log('kichigi', b);
// }
// else{
//     console.log('kichigi' , c);
// }


// let a = 3;
// let b = 5;
// let c = 4;

// if(
//     a <= b && a >= c

// ){
//     console.log('urtanchi',a);
// }
// else if(
//     b < a && b > c
// ){
//     console.log('urtanchi', b);
// }
// else{
//     console.log('urtanchi' , c);
// }


// let a = 4;
// let b = 4;
// let c = 6;

// if(
//     (a += b) > (b += c)
// ){
//     console.log('a va b yigindi katta ',a)
// }
// else if(
//     (b += c) > (c += a)
// ){
//     console.log('b va c yigindis katta',b);
// }
// else{
//     console.log('a va c yigindi katta');
// }


// let baxo = 3;

// switch (baxo) {
//     case 1:
//         console.log('yomon');
//         break;
//     case 2:
//         console.log('qoniqarsiz');
//         break;
//     case 3:
//         console.log('qoniqarli');
//         break;
//     case 4:
//         console.log('yahshi');
//         break;
//     case 5:
//         console.log("a'lo");
//         break;
//     default:
//         console.log('xato');
//         break;
// }



// let A = 4;
// switch (A) {
//     case 1:
//         console.log("qish")
//         break;
//     case 2:
//         console.log("qish")
//         break;
//     case 3:
//         console.log("bahor")
//         break;
//     case 4:
//         console.log("bahor")
//         break;
//     case 5:
//         console.log("bahor")
//         break;
//     case 6:
//         console.log("yoz")
//         break;
//     case 7:
//         console.log("yoz")
//         break;
//     case 8:
//         console.log("yoz")
//         break;
//     case 9:
//         console.log("kuz")
//         break;
//     case 10:
//         console.log("1kuz")
//         break;
//     case 11:
//         console.log("1kuz")
//         break;
//     case 12:
//         console.log("1qish")
//         break;
//     default: console.log("bunaqa oy yoq")
// }


// let A = 6;

// switch (A) {
//     case 1:
//         console.log("31kun")
//         break;
//     case 2:
//         console.log("28kun")
//         break;
//     case 3:
//         console.log("31kun")
//         break;
//     case 4:
//         console.log("30 kun")
//         break;
//     case 5:
//         console.log("31 kun")
//         break;
//     case 6:
//         console.log("30kun")
//         break;
//     case 7:
//         console.log("31kun")
//         break;
//     case 8:
//         console.log("31kun")
//         break;
//     case 9:
//         console.log("30 kun")
//         break;
//     case 10:
//         console.log("31 kun")
//         break;
//     case 11:
//         console.log("30 kun")
//         break;
//     case 12:
//         console.log("31 kun")
//         break;
//     default: console.log("bunaqa oy yoq")
// }



// let son = prompt("uzunligi");

// let A = prompt("uzunlik birligi");

// switch (A) {
//     case 1:
//         console.log(son * 0.1)
//         break;
//     case 2:
//         console.log(son * 1000)
//         break;
//     case 3:
//         console.log(son * 1)
//         break;
//     case 4:
//         console.log(son * 0.001)
//         break;
//     case 5:
//         console.log(son * 0.01)
//         break;

//     default: console.log("xato")
// }

// let A = prompt("tomon");
// let son = prompt("komanda");
// switch (A) {
//     case "g":
//         console.log("garb")
//         break;
//     case "sh":
//         console.log("sharq")
//         break;
//     case "sh":
//         console.log("shimol")
//         break;
//     case "j":
//         console.log("janub")
//         break;

//     default: console.log("xato")

// }

