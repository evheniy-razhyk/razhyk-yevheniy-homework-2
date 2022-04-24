//Условные и логические операторы

// alert("1.В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.");
// let x = prompt("Введите х");
// if (x > 0) {
//     alert("Положительное число");
// } else if (x < 0) {
//     alert("Отрицательное число");
// } else {
//     alert("Ноль");
// }



// alert("2.Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.");
// let firstVariable = 20;
// let secondVariable = -3;
// let thirdVariable = 6;
// if (firstVariable < secondVariable) {
//     if (firstVariable < thirdVariable) {
//         alert(`firstVariable = ${firstVariable}`);
//     } else {
//         alert(`thirdVariable = ${thirdVariable}`)
//     }
// } else if (secondVariable < thirdVariable) {
//     alert(`secondVariable = ${secondVariable}`);
// } else {
//     alert(`thirdVariable = ${thirdVariable}`)
// }



// alert("3.У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.");
// let myMoney = prompt("Сколько у вас денег?");
// let friendsMoney = prompt("Сколько денег у вашего друга?");
// if (myMoney + friendsMoney >= 60000) {
//     alert("Майорка");
// } else {
//     alert("Пиво");
// }



// alert("4.В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.");
// let age = prompt("Введите возраст");
// if (age >= 20 && age < 27) {
//     alert("Вислати повiстку");
// }



// alert("5.Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.");
// let bus = prompt("Введите нормер маршрутки");
// if (bus == 7 || bus == 225 || bus == 255) {
//     alert("Едете домой");
// } else {
//     alert("Ожидаете");
// }



// alert("6.В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.");
// let day = prompt("Введите текущий день недели");
// if (day != "суббота" && day != "воскресенье") {
//     alert("Идите на работу");
// } else {
//     alert("Выходной");
// }



// alert("7.Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.");
// let x = prompt("Введите х (от -20 до 20)");
// let y = prompt("Введите у (от -20 до 20)");
// if (x <= 1 && x >= -20 && x <= 20 && y >= 3 && y >= -20 && y <=20 || y < 0) {
//     alert(+x + +y);
// } else {
//     alert("Неверно!")
// }



// alert("8.Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.");
// let x = prompt("Введите х");
// let y = prompt("Введите у");
// if (x > 2 && x < 11 || y >= 6 && y < 14) {
//     alert(+x + 2);
// } else {
//     alert(+x +5);
// }



// alert("9.Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.");
// let userName = prompt("Введите имя пользователя");
// if (userName != false && userName != null) {
//     alert(`Привет ${userName}!`);
// } else {
//     alert("Error");
// }



// alert("10.Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.");
// let greeting = "";
// let lang = prompt("Введите одно из значений: ua, en или de");
// if (lang == "ua") {
//     greeting = "Привіт!"
//     alert(greeting);
// } else if (lang == "en") {
//     greeting = "Hello!"
//     alert(greeting);
// } else if (lang == "de") {
//     greeting = "Hallo!";
//     alert(greeting);
// } else {
//     alert("Error!");
// }

// switch (lang) {
//     case "ua":
//         greeting = "Привіт!"
//         alert(greeting);
//         break;
//     case "en":
//         greeting = "Hello!"
//         alert(greeting);
//         break;
//     case "de":
//         greeting = "Hallo!";
//         alert(greeting);
//         break;
//     default:
//         alert("Error!");
// }



//Циклы

// console.log("11.Сформируйте строку вида '.#.#.#.#.#.' с помощью цикла for.");
// let replayString = ".#."
// for (let i = 0; i < 4; i++) {
//     replayString = replayString + "#.";
// }
// console.log(replayString);



// alert(`12.Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you
// `);
// let userName = prompt("Введите имя");
// let greeting = "";
// for (let i = 0; i < 3; i++) {
//     greeting += `Happy birthday to you\n`;
//     if (i == 1) {
//         greeting += `Happy birthday dear ${userName}\n`;
//     }
// }
// console.log(greeting);



// alert ("13.Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.");
// let continuation;
// do {
//     continuation = confirm("Продолжить цикл?");
// } while (continuation != true);



// alert("14.В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.");
// let numberForSum = prompt("Введите число для подсчетов");
// let range = prompt("Введите границу диапазона"); 
// let result = 0;
// for (let i = numberForSum; i <= range; i++) {
//     if (i % 2) {
//         result = result + +i;
//     }
// }
// alert(result);



// alert("15.Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.");
// let iterationsNumber = 0;
// while (true) {
//     let randomValue = Math.random();
//     if (randomValue > 0.9 && iterationsNumber == 0) {
//         alert(`Число, прервавшее цикл: ${randomValue}. \nЦикл не прошел даже одну полную итерацию.`);
//         break;
//     } else if (randomValue > 0.9 && iterationsNumber > 0) {
//         alert(`Число, прервавшее цикл: ${randomValue}. \nКоличество итераций: ${iterationsNumber}.`);
//         break;
//     }
//     iterationsNumber++;
// }



// alert("16.Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... ");
// let result = 0;
// for (let firstValue = 1; firstValue <= 10; firstValue++) {
//     for (let secondValue = 1; secondValue <= 10; secondValue++){
//         result = firstValue * secondValue;
//         console.log(`${firstValue} * ${secondValue} = ${result};`);
//         if (secondValue == 10) {
//             console.log("-----------------------------------------");
//         }
//     }
// }



// alert("17.С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...");
// let firstValue = 0;
// let secondValue = 1;
// let thirdValue;
// let stringSum = "";
// for(; firstValue <= 13; stringSum += firstValue + " ", thirdValue = firstValue + secondValue, firstValue = secondValue, secondValue = thirdValue);
// console.log(stringSum);



// alert("18.Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму.");
// let usersNumber;
// let counter = 0;
// let sum = 0;
// do {
//     usersNumber = prompt("Введиье число");
//     sum = +usersNumber + sum;
//     counter++;
// } while (usersNumber);
// alert(`Сумма: ${sum} \nКоличество введенных чисел: ${counter - 1}`);



// alert("19.Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля");
// let password = "userpassword123";
// for (let i = 0; i == 0;) {
//     let enteredPassword = prompt("Введите пароль");
//     if (enteredPassword == password) {
//         alert("Вы успешно авторизованы");
//         break;
//     } else if (enteredPassword == null) {
//         if (confirm("Вы уверены, что хотите отменить авторизацию?")){
//             alert("Вы отменили авторизацию");
//             break;
//         }
//     }
// }



// alert(`20.Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:
// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 
// `);
// for (let i = 1; i <= 50; i++) {
//     if (!(i % 3) && !(i % 5)) {
//         console.log("FizzBuzz");
//     } else if (!(i % 3)) {
//         console.log("Fizz");
//     } else if (!(i % 5)) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }