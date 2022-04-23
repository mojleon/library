class bookClass {
  myLibrary = [
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

  constructor() {
    this.books();
  }

  books() {
    let flexBox = document.createElement("section");
    flexBox.setAttribute("id", "books");
    flexBox.setAttribute(
      "style",
      " display: flex; justify-content: center; align-items:flex-start; flex-wrap: wrap; gap: 10px; width: 1024px; height: auto;"
    );
    document.querySelector("body").appendChild(flexBox);

    this.myLibrary.forEach((b) => {
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

      this.checkBoxButton(b.read, b.id);

      this.closeButton(b.id, div);
    });
  }

  checkBoxButton(read, id) {
    let checkbox = document.getElementById(`${id}_cb`);
    checkbox.checked = read;

    checkbox.addEventListener("click", function () {
      checkbox.checked != checkbox.checked;
      myLibraryCB = this.myLibrary.find((object) => object.id == id).read =
        checkbox.checked;
    });
  }

  refreshView() {
    document.querySelector("#books").remove();
    this.books();
  }

  closeButton(id, div) {
    let close_img = document.createElement("img");

    close_img.setAttribute(
      "style",
      "position: absolute; right: 10px; top: 10px; width: 30px"
    );
    close_img.addEventListener(
      "click",
      function () {
        const newLibrary = this.myLibrary.filter((a) => {
          return a.id != id;
        });
        this.myLibrary = newLibrary;
        this.refreshView();
      }.bind(this)
    );
    close_img.src = "./images/close.svg";
    div.appendChild(close_img);
  }

  addBookToLibrary() {
    document.querySelector("#addBookForm").classList.remove("hidden");
  }

  addBook() {
    let e = window.event;
    e.preventDefault();

    let object = {
      book: e.target[0].value,
      author: e.target[1].value,
      pages: e.target[2].value,
      read: e.target[3].value,
      id: this.myLibrary[this.myLibrary.length - 1].id + 1,
    };
    this.myLibrary.push(object);
    document.querySelector("#addBookForm").classList.add("hidden");

    this.refreshView();
  }
}

let book = new bookClass();

function addBook() {
  book.addBook();
}
