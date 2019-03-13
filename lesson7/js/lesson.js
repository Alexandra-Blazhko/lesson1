var startBtn = document.getElementById("start");
var budgetValue = document.getElementsByClassName("budget-value")[0];
var dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
var expensesValue = document.getElementsByClassName("expenses-value")[0];
var optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
var incomeValue = document.getElementsByClassName("income-value")[0];
var monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
var yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

var yearValue = document.querySelector(".year-value");
var monthValue = document.querySelector(".month-value");
var dayValue = document.querySelector(".day-value");
var expensesItem = document.getElementsByClassName("expenses-item");
var expensesBtn = document.getElementsByTagName("button") [0];
var optionalExpensesBtn = document.getElementsByTagName("button") [1];
var optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
var countBtn = document.getElementsByTagName("button")[2];
var incomeItem = document.querySelector(".choose-income");
var checkSavings = document.querySelector("#savings");
var sumValue = document.querySelector(".choose-sum");
var percentValue = document.querySelector(".choose-percent");

let money, time;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", ""); 
    
    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        var a = expensesItem[i].value;
        var b = expensesItem[++i].value;
       if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
     && a != "" && b != "" &&  a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        sum += +b;
    } else {
        i = i - 1;
    }
    }
    expensesValue.textContent = sum;
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
     chooseExpenses: function() {
        
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
