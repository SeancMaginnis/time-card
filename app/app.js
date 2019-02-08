let days = {
  week1: {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
  },
  week2: {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0
  }
}
var hourlyWage = 100

function changeHour(week, day, change) {
  console.log(days)
  let newHours = days[week][day];
  if (change == 'up' && days[week][day] <= 23) {
    newHours = days[week][day]++;
    draw(week, day);
    totalWeek1();
    totalWeek2();
    grandTotal();
    wage()
    wage2()
    wage3()
    afterTax()
  }
  else if (change == 'down' && days[week][day] >= 1) {
    newHours = days[week][day]--;
    draw(week, day);
    totalWeek1();
    totalWeek2();
    grandTotal();
    wage()
    wage2()
    wage3()
    afterTax()
  }
  console.log(days);
  return newHours;
}

var newArray = Object.keys(days.week1).map(function (key) {
  let arr = days.week1[key];
  return arr;
})

function totalWeek1() {
  var newArray = Object.values(days.week1);
  let total = 0;
  for (let i = 0; i < newArray.length; i++) {
    total += newArray[i];
  }
  document.getElementById('total1').innerText = total;
  return total;
}

function totalWeek2() {
  var newArray = Object.values(days.week2);
  let total = 0;
  for (let i = 0; i < newArray.length; i++) {
    total += newArray[i];
  }
  document.getElementById('total2').innerText = total;
  return total;
}

function grandTotal() {
  let total = totalWeek1() + totalWeek2();
  document.getElementById('total3').innerText = total;
  return total;
}

function wage() {
  let total = hourlyWage * totalWeek1()
  document.getElementById('W1').innerText = total;
}

function wage2() {
  let total = hourlyWage * totalWeek2()
  document.getElementById('W2').innerText = total
}

function wage3() {
  let total = hourlyWage * (totalWeek1() + totalWeek2())
  document.getElementById('W3').innerText = total
}
var taxRate = 72.7;

function afterTax() {
  let total = (grandTotal() * taxRate).toFixed(2);
  document.getElementById('tax').innerHTML = total;
}

function draw(week, day, ) {
  document.getElementById(`${week}${day}`).innerText = days[week][day];
}


//function reset() 