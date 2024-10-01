function print(text) {
  console.log(text);
}

function isValid(name) {
  // ваш код...
if (name != null  && name.length > 3  && !(name.includes(' ') ) ) {
    return true;
  } else {
    return false;
  }
}


function sayHello() {

  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

// sayHello();
