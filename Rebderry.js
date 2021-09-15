var name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var email = document.querySelector("#email");
var identification = document.querySelector("#identification");
var introduction = document.querySelector("#introduction");
var introButton = document.querySelector("#introButton");
var recomendations = document.getElementById("recomendations");
var vaccinatedButton = document.getElementById("vaccinatedButton");
var vaccinatedPrevius = document.getElementById("vaccinatedPrevius");
var bookingMoh1 = document.getElementById("bookingMoh1");
var bookingMoh2 = document.getElementById("bookingMoh2");
var recomendationsButton = document.getElementById("recomendationsButton");
var thanks = document.getElementById("thanks");
var recomendationsPrevius = document.getElementById("recomendationsPrevius");
var booking = document.getElementById("booking");
var covid19 = document.querySelector("#covid19");
var identificationButton = document.querySelector("#identificationButton");
var identificationNext = document.querySelector("#identificationNext");
var name1 = document.getElementById("name1");
var surname = document.getElementById("surname");
var imail = document.getElementById("imail");
var nameError = document.getElementById("nameError");
var surnameError = document.getElementById("surnameError");
var imailError = document.getElementById("imailError");
var identificationForm = document.getElementById("identificationForm");

introButton.addEventListener("click", function () {
  introduction.style.display = "none";
  identification.style.display = "inline-block";
});

var regexName = /^[ა-ჰa-zA-Z]+$/gi;
name1.addEventListener("focusout", function () {
  if (
    name1.value.length >= 3 &&
    name1.value.length <= 256 &&
    regexName.test(name1.value)
  ) {
    nameError.setAttribute("data-errorName", "");
  } else if (name1.value.length == 0) {
    nameError.setAttribute("data-errorName", "სახელის ველი სავალდებულოა");
  } else if (name1.value.length < 3) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
  } else if (name1.value.length > 256) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან"
    );
  } else if (!regexName.test(name1.value)) {
    nameError.setAttribute(
      "data-errorName",
      "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
    );
  }
});

surname.addEventListener("focusout", function () {
  if (
    surname.value.length >= 3 &&
    surname.value.length <= 256 &&
    /^[ა-ჰa-zA-Z]+$/gi.test(surname.value)
  ) {
    document.getElementById("surnameError").setAttribute("data-errorName", "");
  } else if (surname.value.length == 0) {
    surnameError.setAttribute("data-errorName", "გვარის ველი სავალდებულოა");
  } else if (surname.value.length < 3) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან"
    );
  } else if (surname.value.length > 256) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 256 სიმბოლოსგან"
    );
  } else if (!regexName.test(surname.value)) {
    surnameError.setAttribute(
      "data-errorName",
      "გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)"
    );
  }
});

var redberryRegex = /@redberry.ge$/;

imail.addEventListener("focusout", function () {
  if (redberryRegex.test(imail.value)) {
    imailError.setAttribute("data-errorName", "");
  } else if (imail.value.length == 0) {
    imailError.setAttribute("data-errorName", "მეილის ველი სავალდებულოა");
  } else if (!regexName.test(imail.value)) {
    imailError.setAttribute(
      "data-errorName",
      "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)"
    );
  }
});

identificationNext.addEventListener("click", function () {
  if (
    imailError.getAttribute("data-errorName") == "" &&
    surnameError.getAttribute("data-errorName") == "" &&
    nameError.getAttribute("data-errorName") == ""
  ) {
    identification.style.display = "none";
    covid19.style.display = "inline-block";
  }
});

var test = document.getElementById("test");
var anti = document.getElementById("anti");
var covid19Form = document.getElementById("covid19Form");

$("#yes").click(function () {
  if ($("#yes").is(":checked")) {
    test.style.display = "inline-block";
    anti.style.display = "none";
    covid19Button.disabled = true;
  }
});
$("#no").click(function () {
  if ($("#no").is(":checked")) {
    test.style.display = "none";
    anti.style.display = "none";
    testResults.style.display = "none";
    covid19Button.disabled = false;
  }
});
$("#now").click(function () {
  if ($("#now").is(":checked")) {
    test.style.display = "none";
    anti.style.display = "none";
    testResults.style.display = "none";
    covid19Button.disabled = false;
  }
});

var testResults = document.getElementById("testResults");

$("#tYes").click(function () {
  if ($("#tYes").is(":checked")) {
    anti.style.display = "none";
    testResults.style.display = "inline-block";
    covid19Button.disabled = true;
  }
});
$("#tNo").click(function () {
  if ($("#tNo").is(":checked")) {
    anti.style.display = "inline-block";
    testResults.style.display = "none";
  }
});

var testResultsButton = document.getElementById("testResultsButton");

testResults.addEventListener("submit", function (evt) {
  evt.preventDefault();
  anti.style.display = "inline-block";
});
var covid19Previus = document.getElementById("covid19Previus");
var vaccinated = document.getElementById("vaccinated");

anti.addEventListener("submit", function (evt) {
  evt.preventDefault();
  covid19Button.disabled = false;
});

covid19Button.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "none";
  vaccinated.style.display = "inline-block";
});

covid19Previus.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "none";
  identification.style.display = "inline-block";
});

var vaccinatedNumber = document.getElementById("vaccinatedNumber");
var notVaccinated = document.getElementById("notVaccinated");

$("#vYes").click(function () {
  if ($("#vYes").is(":checked")) {
    vaccinatedNumber.style.display = "inline-block";
    notVaccinated.style.display = "none";
    vaccinatedButton.disabled = true;
    bookingMoh2.style.display = "none";
  }
});
$("#vNo").click(function () {
  if ($("#vNo").is(":checked")) {
    vaccinatedNumber.style.display = "none";
    notVaccinated.style.display = "inline-block";
    vaccinatedButton.disabled = true;
  }
});

$("#first").click(function () {
  if ($("#first").is(":checked")) {
    booking.style.display = "inline-block";
    vaccinatedButton.disabled = false;
  }
});
$("#firstSecond").click(function () {
  if ($("#firstSecond").is(":checked")) {
    booking.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});
$("#both").click(function () {
  if ($("#both").is(":checked")) {
    booking.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});

$("#notPlanning").click(function () {
  if ($("#notPlanning").is(":checked")) {
    bookingMoh1.style.display = "inline-block";
    bookingMoh2.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});
$("#registered").click(function () {
  if ($("#registered").is(":checked")) {
    bookingMoh1.style.display = "none";
    bookingMoh2.style.display = "none";
    vaccinatedButton.disabled = false;
  }
});

$("#recovered").click(function () {
  if ($("#recovered").is(":checked")) {
    bookingMoh1.style.display = "none";
    bookingMoh2.style.display = "inline-block";
    vaccinatedButton.disabled = false;
  }
});

vaccinatedPrevius.addEventListener("click", function (evt) {
  evt.preventDefault();
  covid19.style.display = "inline-block";
  vaccinated.style.display = "none";
});

vaccinatedButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  vaccinated.style.display = "none";
  recomendations.style.display = "inline-block";
});

$("input[name='onlineMeeting']").change(function () {
  if ($("input[name='officeDay']:checked").length > 0) {
    recomendationsButton.disabled = false;
  }
});
$("input[name='officeDay']").change(function () {
  if ($("input[name='onlineMeeting']:checked").length > 0) {
    recomendationsButton.disabled = false;
  }
});

recomendationsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  recomendations.style.display = "none";
  thanks.style.display = "inline-block";
});

recomendationsPrevius.addEventListener("click", function (evt) {
  evt.preventDefault();
  recomendations.style.display = "none";
  vaccinated.style.display = "inline-block";
});
