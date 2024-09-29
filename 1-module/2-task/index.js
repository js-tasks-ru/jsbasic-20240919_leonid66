function print(text) {
  console.log(text);
}

function isValid(userName) {
  // ваш код...
if (userName != 0 && userName.length > 3  && !(userName.includes(' ') ) ) {
    return true;
};
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
