// JS מטלה שיעור 1
// 1.  צרו 2 משתנים המכילים מספר כלשהו..
// אם 2 המספרים שווים , אני אדפיס לקונסול BOOM
// אם המספרים לא שווים, אני אדפיס לקונסול TRY AGAIN.
var n1 = 4
var n2 = '4'
if (typeof n1 == 'string') {
    n1 = +n1
}
if (typeof n2 == 'string') {
    n2 = +n2
}

if (n1 === n2) {
    console.log("BOOM")
}
else {
    console.log("TRY AGAIN");
}

// 2. צרו 2 משתנים והדפיסו לקונסול את הסכום של שניהם (חברו אותם)
var n1 = 4
var n2 = '4'

if (typeof n1 == 'string') {
    n1 = +n1
}
if (typeof n2 == 'string') {
    n2 = +n2
}
console.log(n1 + n2);

// 3. צרו 2 משתנים והדפיסו לקונסול את המכפלה של שניהם.
var n1 = 4
var n2 = '10'

if (typeof n1 == 'string') {
    n1 = +n1
}
if (typeof n2 == 'string') {
    n2 = +n2
}
console.log(n1 * n2);
// 4. צרו משתנה שמכיל מספר
// שמייצג יום בשבוע ( 1 עבור יום ראשון , 2 עבור יום שני , 7 עבור שבת)
// ואז הדפיסו הודעה בהתאם לאותו יום.
// אם היום יום ראשון, הדפיסו good week
// אם היום הוא : שני/שלישי/ רביעי : הדפיסו good day
// אם היום הוא חמישי/שישי/שבת הדפיסו : happy weekend !
var day = 5

if (day === 1) {
    console.log("good week");
}
else if (day === 2 || day === 3 || day === 4) {
    console.log("good day");
}
else {
    console.log("happy weekend");
}
    



// 5. כתוב משתנה שמכיל מספר שמייצג יום בחודש.( מ1 עד 31)
// אם התאריך הוא 1 לחודש : אני אדפיס good month
// אם התאריך הוא בין 2-10 לחודש אני אדפיס : start work
// אם התאריך הוא 10 לחודש אני אדפיס : get salary
// אם התאריך הוא בין 11-20 לחודש אני אדפיס : BE HAPPY
// אם התאריך הוא בין 20-30 לחודש אני אדפיס: the end
// אם התאריך הוא 31 לחודש אני אדפיס : BOOM BOOM
var one_day = 20
if (one_day === 1) {
    console.log("good month");
}
else if (one_day > 1 && one_day < 11) {
    console.log("start work");
}
else if (one_day ===10) {
    console.log("get salary");
}
else if (one_day > 10 && one_day < 20) {
    console.log("be happy");
}

else if (one_day > 19 && one_day < 31) {
    console.log("the end");
}
else if (one_day ===31) {
    console.log("BOOM BOOM");
}

// 6. כתבו משתנה שמכיל שם של חג כ string
// אם השם הוא purim – אני אדפיס : happy purim
// אם השם הוא passover- אני אדפיס : clear home
// אם השם הוא shavoout – אני אדפיס – eat milk
// אם השם הוא suckot – אני אדפיס build sucka

var holiday = 'passover'   

if (holiday == 'purim') {
    console.log('happy purim');
}
else if (holiday == 'passover') {
    console.log('clear home');
}
else if (holiday == 'shavoout') {
    console.log('eat milk');
}
else if (holiday == 'suckot') {
    console.log('build sucka');
}
else {
    console.log('enter one of the above options');
}

// 7. בתחרות זריקת כדור המנצח הוא מי שזורק כדור למרחק הגדול ביותר.
// הגדירו 2 שחקנים, לכל שחקן יש שם של משתנה שמכיל את שמו ושם של משתנה שמכיל את התוצאה, למשל :
// player1_name = 'shlomi'
// player1_score = 60;

// לבסוף הדפיסו את שם השחקן שזרק למרחק הגדול ביותר, ואת המרחק אליו הוא זרק.
var player1_name = 'Ben'
var player1_result = 4

var player2_name = 'Dan'
var player2_result = 60

var player3_name = 'Rani'
var player3_result = 100
if (player1_result > player2_result && player1_result > player3_result) {
    console.log(player1_name, player1_result);
}
else if (player2_result > player1_result && player2_result > player3_result) {
    console.log(player2_name, player2_result);
}
else {
    console.log(player3_name, player3_result);
}
 

// 8. כתבו משתנה שמכיל מספר, והדפיסו האם הערך במשתנה הוא מספר זוגי או לא.
num = 50
if (num % 2 == 0) {
    console.log('even number');
}
else {
    console.log('odd number');
}
// 9. הגדירו 2 משתנים שבשניהם יש מספר, והדפיסו את המספר הגדול יותר מבינהם.
var n1 = 50
var n2 = 100

console.log(Math.max(n1, n2));
// 10 : חישוב ממוצע:
// הגדירו 7 משתנים, לכל אחד מהם יש מספר כלשהו.
// לבסוף הדפיסו לקונסול את הממוצע של כל המספרים.
var m1 = 1
var m2 = 2
var m3 = 3
var m4 = 40
var m5 = 5
var m6 = 6
var m7 = 7
console.log((m1 + m2 + m3 + m4 + m5 + m6 + m7) / 7);
// 11: מדד כושר:
// הגדירו אדם באמצעות 3 משתנים. משתנה אחד מכיל את שם הבן אדם, משתנה שני מכיל את גילו
// משתנה שלישי מכיל את המספר ק"מ שהוא רץ
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 30 ל 50 ק"מ – יודפס לי "אתה בכושר מעולה + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 10 ל 30 ק"מ – יודפס לי "אתה בכושר טוב + השם שלי + הגיל שלי".
// אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 0 ל 10 ק"מ – יודפס לי "חייב להשתפר + השם שלי + הגיל שלי ".
// אם הגיל שלי הוא בין 18-30 ורצתי בין 25-50 ק"מ – יודפס לי " אתה בכושר מעולה + השם שלי + הגיל שלי "
// אם הגיל שלי הוא בין 18-30 ורצתי פחות מ 25 ק"מ – יודפס לי " יש מקום לשיפור + השם שלי + הגיל שלי ".
var man = 'Tony'
var age = '31'
var km = '15'
if (typeof age == 'string') {
    age = +age
}
if (typeof km == 'string') {
    km = +km
}

if (age > 30 && age < 50 && km > 30 && km < 50) {
    console.log(man, age, "אתה בכושר מעולה");
} else if (age > 30 && age < 50 && km > 10 && km < 30) {
    console.log(man, age, "אתה בכושר טוב");
} else if (age > 30 && age < 50 && km > 0 && km < 10) {
    console.log(man, age, "חייב להשתפר");
} else if (age > 18 && age < 30 && km > 25 && km < 50) {
    console.log(man, age, "אתה בכושר מעולה");
} else if (age > 18 && age < 30 && km < 25) {
    console.log(man, age, "יש מקום לשיפור");
}

// 12. צרו משתנה שמכיל שעה בין 5 ל 24
// בין השעות 5 בבוקר ל 11 בבוקר כולל יודפס לי "בוקר טוב".
// ביום השעות 12 בצהרים עד 17 (כולל) יודפס לי "צהרים טובים"
// בין השעות 18:00 ל 23 יודפס לי "ערב טוב".
var time = 4

switch (true) {
    case (time > 5 && time <= 11):
        console.log("בקר טוב");
        break;
    case (time > 11 && time <= 17):
        console.log("צהרים טובים");
        break;
    case (time > 17 && time <= 23):
        console.log("ערב טוב");
        break;

    default:
        console.log('בחרו שעה מאוחרת יותר');
        break;
}
