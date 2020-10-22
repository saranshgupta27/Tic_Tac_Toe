const tile = document.querySelectorAll(".tile");
const ww = document.querySelector("#winner");
winner = 0;
counter = 0;
counter2=0;

document.querySelector("#start").addEventListener("click",function () {
  var p1 = document.getElementById("p1i").value;
  var p2 = document.getElementById("p2i").value;
  if (p1 =='' || p2=='')
  {
    alert("Enter the names of players");
  }
else{
  document.querySelector("#restart").addEventListener("click", function (e) {
    for (i = 0; i < 9; i++) {
      tile[i].textContent = "";
      tile[i].style.backgroundColor = "rgba(2, 0, 0, 0.356)";
      winner = 0;
    }
    ww.style.visibility="hidden";
    counter = 0;
    counter2=0;
    console.clear();
    add_event();
  });
  add_event(); }

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
      counter2+=1;
      console.log(counter2);
    
    } else if (counter == 1) {
      this.textContent = "O";
      counter = 0;
      counter2+=1;
      console.log(counter2);
    
    }

    const check = win_check();
    p1 = document.getElementById("p1i").value;
    p2 = document.getElementById("p2i").value;
    if (check == "X") {
     ww.style.visibility="visible";
      ww.textContent=`Winner is ${p1}`;
    } else if (check == "O") {
     ww.style.visibility="visible";
      ww.textContent=`Winner is ${p2}`;
    } else if(check =='1')
    {
  ww.style.visibility="visible";
      ww.textContent=`DRAW`;
    }
  }
  this.removeEventListener("click", ae);
}

function win_check() {
 
  
  if (
    tile[0].textContent === tile[1].textContent &&
    tile[0].textContent === tile[2].textContent &&
    tile[0].textContent !== ""
  ) {
    tile[0].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[1].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[2].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[0].textContent;
  } else if (
    tile[3].textContent === tile[4].textContent &&
    tile[3].textContent === tile[5].textContent &&
    tile[5].textContent !== ""
  ) {
    tile[3].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[4].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[5].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[3].textContent;
  } else if (
    tile[6].textContent === tile[7].textContent &&
    tile[6].textContent === tile[8].textContent &&
    tile[8].textContent !== ""
  ) {
    tile[6].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[7].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[8].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[6].textContent;
  } else if (
    tile[0].textContent === tile[3].textContent &&
    tile[0].textContent === tile[6].textContent &&
    tile[6].textContent !== ""
  ) {
    tile[3].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[0].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[6].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[0].textContent;
  } else if (
    tile[1].textContent === tile[4].textContent &&
    tile[1].textContent === tile[7].textContent &&
    tile[7].textContent !== ""
  ) {
    tile[7].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[4].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[1].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[1].textContent;
  } else if (
    tile[2].textContent === tile[5].textContent &&
    tile[5].textContent === tile[8].textContent &&
    tile[8].textContent !== ""
  ) {
    tile[2].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[5].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[8].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[2].textContent;
  } else if (
    tile[0].textContent === tile[4].textContent &&
    tile[0].textContent === tile[8].textContent &&
    tile[8].textContent !== ""
  ) {
    tile[0].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[4].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[8].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[0].textContent;
  } else if (
    tile[2].textContent === tile[4].textContent &&
    tile[6].textContent === tile[2].textContent &&
    tile[2].textContent !== ""
  ) {
    tile[2].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[4].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    tile[6].style.backgroundColor = "rgba(192, 58, 226, 0.603)";
    return tile[2].textContent;
  } 
  else if(counter2==9)
  {
    return 1;
  }
  else {
    return 0;}
  }


