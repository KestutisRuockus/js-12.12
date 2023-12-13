const people = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    nationality: "British",
    number: 1,
  },
  {
    firstName: "Tedd",
    lastName: "Doe",
    age: 36,
    nationality: "British",
    number: 2,
  },
  {
    firstName: "Mark",
    lastName: "Doe",
    age: 36,
    nationality: "British",
    number: 3,
  },
  {
    firstName: "Lisa",
    lastName: "Boston",
    age: 36,
    nationality: "British",
    number: 4,
  },
];
let currentNumeration = 1;
generateTableContent(people);
const possibleNationality = ["Lithuanian", "Latvian", "German"];

// button elemento gavimas:
const buttonEl = document.querySelector("#add-button");
const deleteButtonEl = document.querySelector("#delete-button");

buttonEl.addEventListener("click", () => {
  const person = {};
  const firstName = document.getElementById("firstNameInput");
  const lastName = document.getElementById("lastNameInput");
  const age = document.getElementById("ageInput");
  const nationality = document.getElementById("nationalityInput");

  // susidedame reiksmes i obj
  person.firstName = firstName.value;
  person.lastName = lastName.value;
  person.age = age.value;
  person.nationality = nationality.value;
  person.number = currentNumeration;
  currentNumeration++;

  nullifyInputValues();

  if (
    !validateName(person.firstName) ||
    !validateName(person.lastName) ||
    !validateAge(person.age) ||
    !isValidNationality(person.nationality)
  ) {
    alert(`Uzpildykite visus laukelius`);
    return;
  }
  people.push(person);
  generateTableContent(people);
});

// deleteButtonEl.addEventListener("click", () => {
//   const inputValue = document.getElementById("deleteInput").value;
//   if (inputValue !== "") {
//     if (people[inputValue]) {
//       for (let i = 0; i < people.length; i++) {
//         if (people[i].number === parseInt(inputValue)) {
//           people.splice(i, 1);
//         }
//       }
//     } else alert(`Asmens tokiu numeriu nera`);
//     console.log(people);
//     generateTableContent(people);
//   } else alert(`Nurodykite numeri, kuri norite istrinti`);
// });

deleteButtonEl.addEventListener("click", () => {
  const removeElementInput = document.querySelector("#deleteInput");
  let number = +removeElementInput.value;

  // findIndex - grazina indeksa pagal elemento reiksme. Jei toks elementas nebuvo rastas, grazina - 1
  let foundIndex = people.findIndex((person) => person.number === number);
  if (foundIndex === -1) {
    alert(`toks numeriukas neegzistuoja`);
    return;
  }
  people.splice(foundIndex, 1);
  generateTableContent(people);
  removeElementInput.value = "";
});

function generateTableContent(people) {
  let dynamicHTML = ``;
  for (let person of people) {
    dynamicHTML += `<tr>
  <td>${person.number}</td>
  <td>${person.firstName}</td>
  <td>${person.lastName}</td>
  <td>${person.age}</td>
  <td>${person.nationality}</td>
</tr>`;
  }
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = dynamicHTML;
}

function validateName(name) {
  let isValid = true;

  if (!name) isValid = false;
  if (!/[0-9]/.test(name)) isValid = false;
  if (/[!@#$%^&*/?]/.test(name)) isValid = false;
  return isValid;
}

function validateAge(age) {
  let isValid = true;

  if (!age) isValid = false;
  if (isNaN(parseInt(age))) isValid = false;
  if (age < 0 || age > 200) isValid = false;
  if (age % 1 !== 0) isValid = false;
  return isValid;
}

function isValidNationality(nationality) {
  let isValid = true;

  if (!possibleNationality.includes(nationality)) isValid = false;
  return isValid;
}

function nullifyInputValues() {
  // isvalome inputus po obj sukurimo
  firstName = "";
  lastName = "";
  age = "";
  nationality = "";
}
