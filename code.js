let Name = document.getElementById('name');
let Surname = document.getElementById('surname');
const Display = document.getElementById('output');

function Focus_Name() {
  Name.style.backgroundColor = "yellow";
}

function Blur_Name() {
  Name.style.backgroundColor = "white";
}

function Focus_Surname() {
  Surname.style.backgroundColor = "yellow";
}

function Blur_Surname() {
  Surname.style.backgroundColor = "white";
}
function submit() {
  let text_name = document.getElementById('name').value;
  let text_surname = document.getElementById('surname').value;
  let text_date = document.getElementById('datee').value;
  let text_menu = document.getElementById('menu').value;
  let emptyname = "Insert Name";
  let emptysurname = "Insert Surname";
  let emptybirthdate = "Insert Birth date";
  let emptymenu = "Select language";

  if (text_name == "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname != "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  else if (text_name != "" && text_surname != "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date == "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptysurname + "<br>" + emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptysurname;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname != "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptybirthdate;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptysurname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname == "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerHTML = emptybirthdate + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name != "" && text_surname == "" && text_date == "" && text_menu != "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptymenu;
    Display.style.color = "red";
  }

  else if (text_name == "" && text_surname != "" && text_date != "" && text_menu == "-- Select --") {
    Display.innerHTML = emptyname + "<br>" + emptymenu;
    Display.style.color = "red";
  }
  console.log(text_name);
  console.log(text_surname);
  console.log(text_date);
  console.log(text_menu);
}

function submitt() {
  let text_name = document.getElementById('name').value;
  let text_surname = document.getElementById('surname').value;
  let text_date = document.getElementById('datee').value;
  let text_menu = document.getElementById('menu').value;
  if (text_name != "" && text_surname != "" && text_date != "" && text_menu != "-- Select --") {
    Display.innerText = text_name + "," + text_surname + "," + text_date + "," + text_menu;
    Display.style.color = "green";
  }
}