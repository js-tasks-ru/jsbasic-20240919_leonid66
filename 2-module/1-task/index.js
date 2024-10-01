function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let key in salaries) {
    if (Number.isFinite(salaries[key])){
    let num = parseInt(salaries[key]);
     sum += num;
    }; //else continue ;
    };

    return sum;
}
