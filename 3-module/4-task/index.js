function showSalary(arr, age) {
    let aged = arr.filter( (user) => ( user.age <= age ) );

    let nameBalArr = aged.map( (user) => {
       return (user.name + ', ' + user.balance) }
    )
  let nameAgeStr = nameBalArr.join('\n');
  return nameAgeStr;

};

// let result = showSalary(users, age);

