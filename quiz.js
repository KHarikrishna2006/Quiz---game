let q = ['Who has led the Indian cricket team to the greatest amount of success in test cricket?', 'Which sport is connected to the Ranji Trophy?', 'Which nation has most frequently hosted the Olympic Winter Games?'
  , 'Which cricketer had scored highest individual score in first-class cricket?',
  'Which cricketer had scored fastest century in ODI cricket?',
  'Who has scored the most individual scores in ODI history?',
  'Who is the highest wicket taker in Test cricket history?',
  'The term “LBW” is associated with which sport?',
  'Who is the first and currently the only batsman to score double hundreds in four consecutive test series?',
  'Which is the biggest cricket stadium in the world?',
  'Which country won most World Cup trophies in cricket history?',
  'Total no. of players playing on the pitch in a hockey match is?',
  'India has won the Hockey World Cup how many times?',
  'Which football player has been voted as the best playmaker in the world for 2016?',
  'Famous sports personality Pele is related to which game?',
  'Who has been named the world’s best player at the inaugural best FIFA football awards 2016 in Zurich Switzerland?',
  'How many team members are there on each side of a Kabaddi match?',
  'Running Hand Touch” term is related to which sport?',
  'Who is the captain of the Indian kabaddi team?']
let opti = [['MS Dhoni', 'Rahu Dravid', 'Sunli Gavaskar', 'Virat Kohli'], ['Kabbadi', 'Hockey', 'Cricket', 'Football'], ['England', 'America the United States', 'Australia', 'South Africa'],
['Rahul Dravid', 'Sunil Gavaskar', 'Sachin Tendulkar', 'Brian Lara'], ['AB de Villiers', 'Virat Kohli', 'Ms Dhoni', 'Rohit Sharma'], ['Ms Dhoni', 'Rohit Sharma', 'AB de Villiers', 'Virat Kohli'], ['Muttiah Muralitharan', 'Ravichdran Ashwin', 'Shane Warne', 'Anil Kumble'], ['Hockey', 'Kabbadi', 'Cricket', 'Kho-Kho'], ['Sachin Tendulkar', 'Rahul Dravid', 'Ricky Ponting', 'Virat Kohli'],
['Narendra Modi Stadium', 'Melbourne Stadium', 'Michigan Stadium', 'Beaver Stadium'], ['Australia', 'India', 'England', 'South America'], ['12', '22', '17', '18'], ['1', '3', '2', '5'],
['Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Sunil Chhetri'], ['Football', 'Kabbadi', 'Hockey', 'Kho-Kho'], ['Cristiano Ronaldo', 'Neymar', 'Sunil Chhetri', 'Lionel Messi'],
['11', '12', '7', '6'], ['Kabbadi', 'Cricket', 'Basket-Ball', 'volley-Ball'], ['Naveen Kumar', 'Pavan Sherawath', 'Pardeep Narwal', 'Arjun Deshwaal']]
let corr = [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 1, 0], [1, 0, 0, 0], [0, 1, 0, 0]]
let k = 0;
document.getElementById("bt").innerHTML = "Next";
document.getElementById('question').innerHTML = q[k];
document.getElementById('o1').innerHTML = opti[k][0];
document.getElementById('o2').innerHTML = opti[k][1];
document.getElementById('o3').innerHTML = opti[k][2];
document.getElementById('o4').innerHTML = opti[k][3];

function clli() {
  if (k === 18) {
    window.location.href = "result.html";
  }
  else {
    k++;

    document.getElementById('question').innerHTML = q[k];
    document.getElementById('o1').innerHTML = opti[k][0];
    document.getElementById('o2').innerHTML = opti[k][1];
    document.getElementById('o3').innerHTML = opti[k][2];
    document.getElementById('o4').innerHTML = opti[k][3];
    if (k === 18) {
      document.getElementById("bt").innerHTML = "Submit";
    }
    else {
      document.getElementById("bt").innerHTML = "Next";
    }
  }
}
function cl1() {
  if (corr[k][0] == 1) {
    alert("CORRECT!!");
  }
  else {
    alert("IN-CORRECT");
  }
}
function cl2() {
  if (corr[k][1] == 1) {
    alert("CORRECT!!");
  }
  else {
    alert("IN-CORRECT");
  }
}
function cl3() {
  if (corr[k][2] == 1) {
    alert("CORRECT!!");
  }
  else {
    alert("IN-CORRECT");
  }
}
function cl4() {
  if (corr[k][3] == 1) {
    alert("CORRECT!!");
  }
  else {
    alert("IN-CORRECT");
  }
}