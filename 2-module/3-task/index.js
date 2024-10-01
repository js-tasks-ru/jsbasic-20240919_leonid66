let calculator = {
  // ваш код
  read() {
    calculator.a = +prompt('vvedi a', '0');
    calculator.b = +prompt('vvedi b', '0');
},

sum() {
    return (this.a + this.b);
    },

mul() {
    return (this.a * this.b)
    },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
