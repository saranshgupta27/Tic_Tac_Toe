const tile = document.querySelectorAll(".tile");
const ww = document.querySelector("#winner");
winner = 0;
counter = 0;
counter2 = 0;

document.querySelector("#start").addEventListener("click", function () {
  var p1 = document.getElementById("p1i").value;
  var p2 = document.getElementById("p2i").value;
  if (p1 == "" || p2 == "") {
    alert("Enter the names of players");
  } else {
    document.querySelector("#restart").addEventListener("click", function (e) {
      for (i = 0; i < 9; i++) {
        tile[i].textContent = "";
        tile[i].style.backgroundColor = "rgba(2, 0, 0, 0.356)";
        winner = 0;
      }
      ww.style.visibility = "hidden";
      counter = 0;
      counter2 = 0;
      console.clear();
      add_event();
    });
    add_event();
  }
});

function add_event() {
  for (i = 0; i < 9; i++) {
    tile[i].addEventListener("click", ae);
  }
}

function ae(e) {
  if (winner == 0) {
    if (counter == 0) {
      this.textContent = "X";
      counter = 1;
      counter2 += 1;
    } else if (counter == 1) {
      this.textContent = "O";
      counter = 0;
      counter2 += 1;
    }

    const check = win_check();
    p1 = document.getElementById("p1i").value;
    p2 = document.getElementById("p2i").value;
    if (check == "X") {
      ww.style.visibility = "visible";
      ww.textContent = `Winner is ${p1}`;
    } else if (check == "O") {
      ww.style.visibility = "visible";
      ww.textContent = `Winner is ${p2}`;
    } else if (check == "1") {
      ww.style.visibility = "visible";
      ww.textContent = `DRAW`;
    }
  }
  this.removeEventListener("click", ae);
}

function win_check() {
  x = 0;

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  i = 0;
  while (i < 8) {
    if (
      tile[arr[i][0]].textContent === tile[arr[i][1]].textContent &&
      tile[arr[i][0]].textContent === tile[arr[i][2]].textContent &&
      tile[arr[i][0]].textContent !== ""
    ) {
      tile[arr[i][0]].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
      tile[arr[i][1]].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
      tile[arr[i][2]].style.backgroundColor = "rgba(192, 58, 226, 0.603)";

      x = `${tile[arr[i][0]].textContent}`;
      break;
    } else {
      i++;
      x = 0;
    }
  }
  if (x != 0) {
    return x;
  } else if (counter2 == 9) {
    return 1;
  } else {
    return 0;
  }
}
