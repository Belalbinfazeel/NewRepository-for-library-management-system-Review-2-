# NewRepository-for-library-management-system-Review-2-
library management system programmed in java maven
##Here is the code-
##1)adding templates=>
<div class="container mt-5">
    <h2>Add a New Book</h2>
    <form id="addBookForm">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" required>
        </div>
        <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input type="text" class="form-control" id="author" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

<script src="js/validation.js"></script>

##2)The CSS styling=>
body {
    background-color: #f8f9fa;
}

.navbar-brand {
    font-size: 1.5rem;
}

##3)The dependencies for bootstrap=>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>library-management</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
        <!-- WebJars for Bootstrap -->
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>bootstrap</artifactId>
            <version>5.1.3</version>
        </dependency>

        <!-- WebJars for jQuery -->
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>3.6.0</version>
        </dependency>
    </dependencies>

    <build>
        <finalName>library-management</finalName>
        <plugins>
            <!-- Maven Compiler Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>

            <!-- Maven War Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
            </plugin>
        </plugins>
    </build>
</project>

##The frontend part=>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Library Management</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="addBook.html">Add Book</a></li>
                <li class="nav-item"><a class="nav-link" href="viewBooks.html">View Books</a></li>
                <li class="nav-item"><a class="nav-link" href="issueBook.html">Issue Book</a></li>
                <li class="nav-item"><a class="nav-link" href="returnBook.html">Return Book</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container mt-5">
    <h1>Welcome to Library Management System</h1>
    <p>Manage books, members, and more efficiently.</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

##5)java script for validation=>
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




