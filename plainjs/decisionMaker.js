let titleClick = document.getElementById("changeTitle");

titleClick.addEventListener("click", event => {

  title = document.getElementById("appTitle");

  if(title.classList.contains("inactive")) {
    title.classList.replace("inactive", "active");
  } else {
    title.classList.replace("active", "inactive");
  };

});

let button = document.getElementsByName("button");
