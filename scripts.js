const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

start.addEventListener('click', function (e) {
  let size = prompt("Please select the size of the grid (max 50)");
  let count = 0;
  loop:
  while(true){
    if(size <= 50){
      break loop;
    }
    else if (size > 50 && count == 0){
      size = prompt("Please enter a maximum size of 50");
      count ++;
    }
    else if (size > 50 && count == 1){
      size = prompt("Can't you read? Please enter a maximum size of 50");
      count ++;
    }
    else if (size > 50 && count == 2){
      size = prompt("Seriously bro? The maximum is 50");
      count ++;
    }
    else{
      size = prompt("OMG PLEASE ENTER A MAXIMUM OF 50!!!");
    }
  }
  makeRows(size, size);
  $(".grid-item").css("background-color", "white");
  $(".grid-item").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "black");
  });
});

reset.addEventListener('click', function (e) {
  $(".grid-item").css("background-color", "white");
  $(".grid-item").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "black");
  });
});
