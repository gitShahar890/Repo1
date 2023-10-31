let icon = document.getElementById("list-icon");

let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let background = document.getElementById("btn-background");

let login = document.getElementById("login");
let register = document.getElementById("register");

let container = document.getElementById("container");

let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let icon_lock = document.getElementById("lock-icon");
let aic1 = document.getElementById("aic1");
let aic2 = document.getElementById("aic2");
let aic3 = document.getElementById("aic3");
let lock1 = document.getElementById("lock1");
let lock2 = document.getElementById("lock2");
let lock3 = document.getElementById("lock3");
let logo = document.getElementById("logo");

let H1AU = document.getElementById("H1AU");
let PAU = document.getElementById("PAU");
let body = document.getElementById("body");


icon.onclick = function () {
    container.classList.add("container");
    container.classList.remove("container-start");
    icon.style.width = "0";
};


signupBtn.onclick = function () {
    background.style.marginLeft = "100px";
    register.style.left = "unset";
    login.style.left = "-130vw";
    register.style.opacity = "100";
    container.classList.add("reg");
};
loginBtn.onclick = function () {
    background.style.marginLeft = "-100px";
    register.style.left = "-130vw";
    login.style.left = "unset";
    login.style.opacity = "100%";
    container.classList.remove("reg");
};

submit1.onclick = submit2.onclick = function () {
    container.classList.add("after");
    lock1.classList.add("after2");
    lock2.classList.add("after2");
    lock3.classList.add("after2");

    aic1.classList.add("aic-after");
    aic2.classList.add("aic-after");
    aic3.classList.add("aic-after");

    logo.style.opacity = "100%";
    logo.style.cursor = "pointer";
};

logo.onclick = function () {
    body.style.backdropFilter = "blur(0px)";
    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");
};
aic1.onclick = function () {
    body.style.backdropFilter = "blur(5px)";
    H1AU.classList.add("after4");
    PAU.classList.add("after3");
};
aic2.onclick = function () {
    body.style.backdropFilter = "blur(5px)";
    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");
};
aic3.onclick = function () {
    body.style.backdropFilter = "blur(5px)";
    H1AU.classList.remove("after4");
    PAU.classList.remove("after3");
};