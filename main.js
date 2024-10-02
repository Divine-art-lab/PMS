function display() {
  var drop = document.getElementById("drop-down-content");
  if(drop.style.display === "block") {
    drop.style.display = "none";
  } else {
    drop.style.display = "block";
  }
  }
  
function menu() {
  var menu = document.getElementById("nav");
  if(menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function cancel() {
  const x = document.getElementById("drop-down-content");
  if(x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }