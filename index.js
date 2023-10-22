// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);


const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// element.className = "pet-listing dog";

// element1.classList.remove("dog");
// element1.classList.add("cat", "sale");

// const ul1 = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul1.removeChild(secondChild);

// ul1.remove();

// const rmMain = document.querySelector("main #main");
document.getElementById("main").remove();


// const addHeader = document.createElement("h1");
// document.body.append(addHeader);

// addHeader.id ="victory";

// const h1 = document.querySelector("h1");
// h1.id = "victory"

// const H1 = document.createElement("h1");
// document.body.append(H1);
// H1.id = "victory";

// const addHeader2 = document.createElement("h1");
// document.body.append(addHeader2);
// addHeader2.id = "victory";

// addHeader2.textContent = "YOUR-NAME is the champion";

const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";