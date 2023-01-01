console.log("「ES6 学習コース」へようこそ！");
console.log("にんじゃわんこと一緒にES6を学んでいきましょう。");

// 「Hello World」とコンソールに出力してください
console.log("Hello World");

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");

// 以下の行をコメントアウトしてください
// console.log("この行をコメントアウトしてください");


// 5と3を足した値を出力してください
console.log(5+3);

// 20から8を引いた値を出力してください
console.log(20-8);

// "4 + 5" を文字列として出力してください
console.log("4 + 5" );

// 8と4をかけた結果を出力してください
console.log(8*4);

// 24を4で割った結果を出力してください
console.log(24/4);

// 7を2で割った余りを出力してください
console.log(7%2);

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ"+"仙人");

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20"+"15");

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(name);

// 変数lengthを定義してください
let length = 5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length*length*3);

let name = "にんじゃわんこ";
console.log(name);

// 変数nameの値を"とりずきん"に更新してください
name = "とりずきん";

// 変数nameの値を出力してください
console.log(name);


let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number += 3 ;

console.log(number);

// 変数numberの値を2で割ってください

number /= 2 ;

console.log(number);

// 定数languageを定義してください
const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language+"を話せます");

const name = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);

const level = 12;

// 条件式を「level > 10」とするif文を作ってください

if (level > 10) {
  console.log("レベルが10より大きいです");
}

const age = 24;

// 「age >= 20」を出力してください
console.log(age>=20);

// 「age < 20」を出力してください
console.log(age<20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if (age>=20){
  console.log("私は20歳以上です");
}

const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password === "ninjawanko") {
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password !== "ninjawanko") {
  console.log("パスワードが間違っています");
}

const age = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
}
else {
  console.log("私は20歳未満です");
}

const age = 17;

// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
}
else if (age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
}

 else {
  console.log("私は10歳未満です");
}


const age = 24;

// 指定された条件のif文を作成してください

if (age >= 20 && age < 30){
  console.log("私は20代です");
}


const n = 2;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  // nの値が2のcaseを追加してください
  case 2:
    console.log("吉です");
    break;


  // nの値が3のcaseを追加してください
  case 3:
    console.log("小吉です");
    break;
}


const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;
}

// 変数numberを定義してください
let number = 0 ;

// 変数numberに1を加えて、その後に変数numberの値を出力してください

number += 1;
console.log(number);

// 上述の2行のコードを4回、貼り付けてください


number += 1;
console.log(number);

number += 1;
console.log(number);

number += 1;
console.log(number);

number += 1;
console.log(number);

// 変数numberを定義してください
let number = 1 ;

// while文を作成してください

while(number<=100){
  console.log(number);
  number += 1;
}

// for文を用いて、1から100までの数字を出力してください
for (let number = 1; number <= 100; number++) {
  console.log(number);
}

// for文を完成させてください
for (let number = 1;number<= 100 ;number ++) {
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if(number % 3 == 0){
    console.log("3の倍数です");
  }
  else {
     console.log(number); 
  }
}

// 定数animalsに、指定された配列を代入してください
const animals = ["dog", "cat", "sheep"];

// 定数animalsを出力して下さい
console.log(animals);

const animals = ["dog", "cat", "sheep"];

// 配列の1つ目の要素を出力してください
console.log(animals[0]);

// 配列の3つ目の要素を出力してください

console.log(animals[2]);

const animals = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit";

// 配列animalsの3つ目の要素をコンソールに表示して下さい

console.log(animals[2]);

const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください

for(let i = 0; i < 3; i ++){
  console.log(animals[i]);
}

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i<animals.length; i++) {
  console.log(animals[i]);
}

// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name:"にんじゃわんこ",age:14};

// characterの値を出力してください

console.log(character);

const character = {name: "にんじゃわんこ", age: 14};

// characterのnameの値を出力してください
console.log(character.name);

// characterのageの値を「20」に更新してください
character.age = 20;

// characterをコンソールに出力してください

console.log(character);


  {name: "ひつじ仙人", age: 1000}
];

// charactersの1つ目の要素をコンソールに出力してください

console.log(characters[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(characters[1].name);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

// for文を完成させてください
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // 定数characterを定義してください
  const character = characters[i];
  

  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);
  

  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);
 
}

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  // 要素を追加してください
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  
  // if文を追加してください
  
  if (character.age === undefined){
    console.log("年齢は秘密です");
  }
  else {
    console.log(`${character.age}歳です`);
  }
}

const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  }
};

// 「店名:〇〇」を出力してください

console.log(`店名:${cafe.name}`);

// 「営業時間：〇〇から△△」を出力してください
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);

const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus: ["コーヒー","紅茶","チョコレートケーキ"]
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください

for (let i = 0 ; i < cafe.menus.length ; i++){
  console.log(cafe.menus[i]);
}