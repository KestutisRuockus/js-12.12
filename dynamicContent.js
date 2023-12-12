const people = [
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 36,
  //   nationality: "British",
  //   number: 1,
  // },
  // {
  //   firstName: "Tedd",
  //   lastName: "Doe",
  //   age: 36,
  //   nationality: "British",
  //   number: 2,
  // },
  // {
  //   firstName: "Mark",
  //   lastName: "Doe",
  //   age: 36,
  //   nationality: "British",
  //   number: 3,
  // },
];
let currentNumeration = 1;
generateTableContent(people);

// button elemento gavimas:
const buttonEl = document.querySelector("#add-button");
const deleteButtonEl = document.querySelector("#delete-button");

buttonEl.addEventListener("click", () => {
  const person = {};
  const firstName = document.getElementById("firstNameInput");
  const lastName = document.getElementById("lastNameInput");
  const age = document.getElementById("ageInput");
  const nationality = document.getElementById("nationalityInput");
  if (
    // tikrinam ar inputai turi reiksmes
    firstName.value !== "" ||
    lastName.value !== "" ||
    age.value !== "" ||
    nationality.value !== ""
  ) {
    // susidedame reiksmes i obj
    person.firstName = firstName.value;
    person.lastName = lastName.value;
    person.age = age.value;
    person.nationality = nationality.value;
    person.number = currentNumeration;
    currentNumeration++;

    people.push(person);
    generateTableContent(people);

    // isvalome inputus po obj sukurimo
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    nationality.value = "";
  } else alert(`Uzpildykite visus laukelius`);
});

deleteButtonEl.addEventListener("click", () => {
  const inputValue = document.getElementById("deleteInput").value;
  if (inputValue !== "") {
    if (people[inputValue]) {
      for (let i = 0; i < people.length; i++) {
        if (people[i].number === parseInt(inputValue)) {
          people.splice(i, 1);
        }
      }
    } else alert(`Asmens tokiu numeriu nera`);
    console.log(people);
    generateTableContent(people);
  } else alert(`Nurodykite numeri, kuri norite istrinti`);
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
