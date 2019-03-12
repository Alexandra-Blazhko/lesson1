var expenses = document.getElementsByClassName("expenses-value")[0];
var optionalExpenses = document.getElementsByClassName("optionalexpenses-value")[0];
var income = document.getElementsByClassName("income-value")[0];
var monthSavings = document.getElementsByClassName("monthsavings-value")[0];
var yearSavings = document.getElementsByClassName("yearsavings-value")[0];

var year = document.querySelector(".year-value");
var month = document.querySelector(".month-value");
var day = document.querySelector(".day-value");
var expensesItem = document.getElementsByClassName("expenses-item");
var expensesBtn = document.getElementsByTagName("button") [0];
var optionalExpensesBtn = document.getElementsByTagName("button") [1];
var optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
var countBtn = document.getElementsByTagName("button")[2];
var income = document.querySelector(".choose-income");
var savings = document.querySelector("#savings");
var sum = document.querySelector(".choose-sum");
var percent = document.querySelector(".choose-percent");

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 
    
    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
     chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце", "");
            var b = prompt("Во сколько обойдётся?", "");
           if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
         && a != "" && b != "" &&  a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
        }
     },
     detectDayBudget: function() {
         appData.moneyPerDay = (appData.budget / 30).toFixed();
         alert("Ежедневный бюджет " + appData.moneyPerDay);
     },
     detecteLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка"); 
         } else if (appData.moneyPerDay > 2000) {
             console.log("Высокий уровень достатка");
         } else {
             console.log("Произошла ошибка");
         } 
     },
     checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
               percent = +prompt("Под какой процент?");
   
               appData.monthIncome = save/100/12*percent;
               alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? перечислите через запятую.", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Что-то ещё?", ""));
        appData.income.sort();
    }
};
