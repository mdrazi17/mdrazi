var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

let calculateAverage = function (scores) {
  var sum = 0;
  for (var i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  return (sum / scores.length).toFixed(2);
};

let calculateHighest = function (scores) {
  var heighest = scores[0];
  for (var i = 1; i < scores.length; i++) {
    if (heighest < scores[i]) {
      heighest = scores[i];
    }
  }
  return heighest;
};

let displayResults = function () {
  var averageScore = calculateAverage(scores);
  var highestScore = calculateHighest(scores);

  var resultsDiv = $("results");
  resultsDiv.innerHTML = "";

  var heading = document.createElement("h2");
  heading.textContent = "Results";
  resultsDiv.appendChild(heading);

  var avgParagraph = document.createElement("p");
  avgParagraph.textContent = "Average Score =  " + averageScore;
  resultsDiv.appendChild(avgParagraph);

  var highestParagraph = document.createElement("p");
  highestParagraph.textContent = `Highest Score = ${
    names[scores.indexOf(highestScore)]
  } with a score of ${highestScore}`;
  resultsDiv.appendChild(highestParagraph);

  var horizentalRow = document.createElement("hr");
  resultsDiv.appendChild(horizentalRow);
};

let addScore = function () {
  let name = $("name");
  let score = $("score");

  name.nextElementSibling.firstChild.nodeValue = "";
  score.nextElementSibling.firstChild.nodeValue = "";

  if (name.value == "") {
    name.nextElementSibling.firstChild.nodeValue = "Name cannot be empty";
  }
  if (score.value == "") {
    score.nextElementSibling.firstChild.nodeValue = "Score cannot be empty";
  }
  if (name.value != "" && score.value != "") {
    scores[scores.length] = parseFloat(score.value);
    names[names.length] = name.value;
    name.nextElementSibling.firstChild.nodeValue = "";
    score.nextElementSibling.firstChild.nodeValue = "";

    score.value = "";
    name.value = "";

    displayResults();
    displayScores();
  }
};

let displayScores = function () {
  var table = document.getElementById("scores_table");
  table.innerHTML = "";

  var heading = document.createElement("h2");
  heading.textContent = "Scores";
  table.appendChild(heading);

  var row = table.insertRow(0);
  var nameCell = row.insertCell(0);
  var scoreCell = row.insertCell(1);
  nameCell.textContent = "Name";
  scoreCell.textContent = "Score";

  for (var i = 0; i < names.length; i++) {
    var row = table.insertRow(i + 1);
    var nameCell = row.insertCell(0);
    var scoreCell = row.insertCell(1);
    nameCell.textContent = names[i];
    scoreCell.textContent = scores[i];
  }
};

window.onload = function () {
  $("add").onclick = addScore;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
};
