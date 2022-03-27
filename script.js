let myLibrary = [
  {
    book: "Harry Potter",
    author: "J. K. Rowling",
    pages: 223,
    read: false,
    id: 1,
  },
  {
    book: "Books of Blood",
    author: "Clive Barker",
    pages: 507,
    read: false,
    id: 2,
  },
  {
    book: "Dune",
    author: "Frank Herbert",
    pages: 412,
    read: true,
    id: 3,
  },
];

function books() {
  let flexBox = document.createElement("section");
  flexBox.setAttribute("id", "books");
  flexBox.setAttribute(
    "style",
    " display: flex; justify-content: center; align-items:flex-start; flex-wrap: wrap; gap: 10px; width: 1024px; height: auto;"
  );
  document.querySelector("body").appendChild(flexBox);

  myLibrary.forEach((b) => {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "padding: 50px; box-shadow: 3px 3px 15px #999; border-radius: 10px; position: relative; f"
    );

    div.innerText =
      "Book = " +
      b.book +
      "\n Author = " +
      b.author +
      "\n Pages = " +
      b.pages +
      "\n";

    div.innerHTML += `<input id='${b.id}_cb' type='checkbox' /><label for='${b.id}_cb'>Have you read the book?</label>`;

    flexBox.appendChild(div);

    checkBoxButton(b.read, b.id);

    closeButton(b.id, div);
  });
}

function checkBoxButton(read, id) {
  let checkbox = document.getElementById(`${id}_cb`);
  checkbox.checked = read;

  checkbox.addEventListener("click", function () {
    checkbox.checked != checkbox.checked;
    myLibraryCB = myLibrary.find((object) => object.id == id).read =
      checkbox.checked;
  });
}

function refreshView() {
  document.querySelector("#books").remove();
  books();
}

function closeButton(id, div) {
  let close_img = document.createElement("img");
  close_img.setAttribute(
    "style",
    "position: absolute; right: 10px; top: 10px; width: 30px"
  );
  close_img.addEventListener("click", function () {
    const newLibrary = myLibrary.filter((a) => {
      return a.id != id;
    });
    myLibrary = newLibrary;
    refreshView();
  });
  close_img.src = "./images/close.svg";
  div.appendChild(close_img);
}

function addBookToLibrary() {
  document.querySelector("#addBookForm").classList.remove("hidden");
}

books();

function addBook() {
  let e = window.event;
  e.preventDefault();

  let object = {
    book: e.target[0].value,
    author: e.target[1].value,
    pages: e.target[2].value,
    read: e.target[3].value,
    id: myLibrary[myLibrary.length - 1].id + 1,
  };
  myLibrary.push(object);
  document.querySelector("#addBookForm").classList.add("hidden");

  refreshView();
}

function addTwo(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

/* 
* Just a few test I did to see whether this works.
*
console.log(addTwo(4)(3)(3));

let million = 1_000_000;
console.log(million);

class someTestClass {
  #shield() {
    return "someTestClass";
  }
  noShield() {
    return this.#shield();
  }
}

let someTClass = new someTestClass();

console.log(someTClass.noShield());

// console.log(addBookToLibrary.prototype.test.name);

let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};

setTimeout(person.getName.bind(person), 1000);

(() => {
  console.log("()()()");
})();

console.log(
  !(function () {
    return "";
  })()
); */
