var closeBtn = document.getElementsByClassName("closeBtn");

var modal = [
  document.getElementById("myModal1"),
  document.getElementById("myModal2"),
  document.getElementById("myModal3"),
  document.getElementById("myModal4"),
  document.getElementById("myModal5"),
  document.getElementById("myModal6"),
  document.getElementById("myModal7"),
  document.getElementById("myModal8"),
  document.getElementById("myModal9"),
  document.getElementById("myModal10"),
];

var modalBtn = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3"),
  document.getElementById("img4"),
  document.getElementById("img5"),
  document.getElementById("img6"),
  document.getElementById("img7"),
  document.getElementById("img8"),
  document.getElementById("img9"),
  document.getElementById("img10"),
];

modalBtn[0].addEventListener("click", openModalMarathon);
modalBtn[1].addEventListener("click", openModalGym);
modalBtn[2].addEventListener("click", openModalClimb);
modalBtn[3].addEventListener("click", openModalSki);
modalBtn[4].addEventListener("click", openModalWeight);
modalBtn[5].addEventListener("click", openModalBasketball);
modalBtn[6].addEventListener("click", openModalSwim);
modalBtn[7].addEventListener("click", openModalJog);
modalBtn[8].addEventListener("click", openModalRun);
modalBtn[9].addEventListener("click", openModalCycle);

for (let i = 0; i < 10; i++) {
  closeBtn[i].addEventListener("click", closeModal);
}

window.addEventListener("click", clickOutside);

function openModalMarathon() {
  modal[0].style.display = "block";
}

function openModalGym() {
  modal[1].style.display = "block";
}

function openModalClimb() {
  modal[2].style.display = "block";
}

function openModalSki() {
  modal[3].style.display = "block";
}

function openModalWeight() {
  modal[4].style.display = "block";
}

function openModalBasketball() {
  modal[5].style.display = "block";
}

function openModalSwim() {
  modal[6].style.display = "block";
}

function openModalJog() {
  modal[7].style.display = "block";
}

function openModalRun() {
  modal[8].style.display = "block";
}

function openModalCycle() {
  modal[9].style.display = "block";
}

function closeModal() {
  for (let i = 0; i < 10; i++) {
    modal[i].style.display = "none";
  }
}

function clickOutside(event) {
  for (let i = 0; i < 10; i++) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}
