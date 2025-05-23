let students = [
  {
    name: "fahad",
    age: 21,
    url: "https://cdn.pixabay.com/photo/2025/04/30/04/42/building-9568428_1280.jpg",
  },
  {
    name: "khaled",
    age: 51,
    url: "https://cdn.pixabay.com/photo/2025/04/30/13/27/red-baron-squadron-9569430_1280.jpg",
  },
  {
    name: "ahmed",
    age: 33,
    url: "https://cdn.pixabay.com/photo/2023/01/14/15/33/sand-dunes-7718479_1280.jpg",
  },
];

let divContainer = document.createElement("div");
divContainer.className = "container";
divContainer.style.backgroundColor = "grey";
document.body.appendChild(divContainer);

students.forEach((student) => {
  let studentDiv = document.createElement("div");
  studentDiv.className = "student";
  studentDiv.className = "student";

  studentDiv.style.display = "flex";
  studentDiv.style.justifyContent = "center";

  studentDiv.innerHTML = `<img src="${student.url}" style="width: 30%; height: 30%; object-fit: cover;" />`;

  divContainer.appendChild(studentDiv);
});
