document.getElementById("addBookForm").addEventListener("submit", function(event) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    if (title.trim() === "" || author.trim() === "") {
        alert("All fields are required.");
        event.preventDefault();
    } else {
        alert("Book added successfully!");
    }
});
