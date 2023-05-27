const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnJ0 = document.getElementById("btnJ0");
const btnClear = document.getElementById("btnClear");

// Variables numeros y letras
let letters = "";
let numbers = "";
//Funciones

const fnA1 = () => {
  if (letters == "") {
    letters = "A";
    document.getElementById("lettersId").innerHTML = letters;
  } else if (letters == "ABCDEFGHIJ" && numbers=="") {
    numbers = "1";
    document.getElementById("numbersId").innerHTML = numbers;
  } else if(letters == "ABCDEFGHIJ"){
    alert("Try again, Wrong Number");
  }else {
    alert("Try Again, Wrong Letter");
  }
};

const fnB2 = () => {
  if (letters == "A") {
    letters += "B";
    document.getElementById("lettersId").innerHTML = letters;
  } else if (letters == "ABCDEFGHIJ" && numbers == "1") {
    numbers += "2";
    document.getElementById("numbersId").innerHTML = numbers;
  } else if(letters == "ABCDEFGHIJ"){
    alert("Try again, Wrong Number");
  }else {
    alert("Try Again, Wrong Letter");
  }
};

const fnC3 = () => {
  if (letters == "AB") {
    letters += "C";
    document.getElementById("lettersId").innerHTML = letters;
  } else if (letters == "ABCDEFGHIJ" && numbers == "12") {
    numbers += "3";
    document.getElementById("numbersId").innerHTML = numbers;
  } else if(letters == "ABCDEFGHIJ"){
    alert("Try again, Wrong Number");
  }else {
    alert("Try Again, Wrong Letter");
  }
};

const fnD4 = () => {
    if (letters == "ABC") {
        letters += "D";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "123") {
        numbers += "4";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnE5 = () => {
    if (letters == "ABCD") {
        letters += "E";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "1234") {
        numbers += "5";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnF6 = () => {
    if (letters == "ABCDE") {
        letters += "F";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "12345") {
        numbers += "6";
        document.getElementById("numbersId").innerHTML = numbers;
      }else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnG7 = () => {
    if (letters == "ABCDEF") {
        letters += "G";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "123456") {
        numbers += "7";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnH8 = () => {
    if (letters == "ABCDEFG") {
        letters += "H";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "1234567") {
        numbers += "8";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnI9 = () => {
    if (letters == "ABCDEFGH") {
        letters += "I";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "12345678") {
        numbers += "9";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnJ0 = () => {
    if (letters == "ABCDEFGHI") {
        letters += "J";
        document.getElementById("lettersId").innerHTML = letters;
      } else if (letters == "ABCDEFGHIJ" && numbers == "123456789") {
        numbers += "0";
        document.getElementById("numbersId").innerHTML = numbers;
      } else if(letters == "ABCDEFGHIJ"){
        alert("Try again, Wrong Number");
      }else {
        alert("Try Again, Wrong Letter");
      }
}

const fnClear = () => {
    letters="";
    document.getElementById("lettersId").innerHTML = letters;
    numbers="";
    document.getElementById("numbersId").innerHTML = numbers;
}
//eventos
btnA1.onclick = function () {
  //Funcion que se activa con el boton A-1
  fnA1();
};
btnB2.onclick = function () {
  //Funcion que se activa con el boton B-2
  fnB2();
};
btnC3.onclick = function () {
  //Funcion que se activa con el boton C-3
  fnC3();
};
btnD4.onclick = function () {
  //Funcion que se activa con el boton D-4
  fnD4();
};
btnE5.onclick = function () {
  //Funcion que se activa con el boton E-5
  fnE5();
};
btnF6.onclick = function () {
  //Funcion que se activa con el boton F-6
  fnF6();
};
btnG7.onclick = function () {
  //Funcion que se activa con el boton G-7
  fnG7();
};
btnH8.onclick = function () {
  //Funcion que se activa con el boton H-8
  fnH8();
};
btnI9.onclick = function () {
  //Funcion que se activa con el boton I-9
  fnI9();
};
btnJ0.onclick = function () {
  //Funcion que se activa con el boton J-0
  fnJ0();
};
btnClear.onclick = function () {
  //Funcion que se activa con el boton Clear
  fnClear();
};
