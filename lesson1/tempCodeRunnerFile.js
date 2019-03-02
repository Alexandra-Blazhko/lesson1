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