# The Book App Web Application

#### Date, 2024/05/08

#### By *Group 11*

## Description

#### Introduction
The Book App Web Application is designed to bring the vast world of books into the hands of readers everywhere. Our platform allows users to browse, search, and read a wide variety of books from different genres. With features like bookmarking, custom reading lists, and adjustable reading settings, our application ensures a comfortable and personalized reading experience for book lovers of all ages.

## Detailed Description

The project directory, named `The-Book-App-Web-Application`, includes several files and folders essential for the application's functionality:
1. `assets` (This folder contains images and icons used throughout the project, along with a `style.css` file for the application's visual design.)
2. `src` (This folder houses the JavaScript files responsible for fetching book data from our database, handling user interactions, and dynamically updating the user interface.)

Other important files in the project, aside from this README.md, are:
```
1. A `db.json` file (This contains a simulated database of books, sourced from a public API.)
2. An `index.html` file (This serves as the entry point for the application, rendering the user interface in the web browser.)
```
Users can interact with the application in several ways, such as searching for books by title or author, creating custom reading lists, and adjusting the text size and background color for an optimal reading experience.

## Response Format
When a user performs a search or interacts with the database, the fetch might look like this:
```
fetch("http://localhost:3000/books",{
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }})
```
Example response for a fetch request for a book with an id of 2:
```json
   {
     "id": 2,
     "title": "Pride and Prejudice",
     "author": "Jane Austen",
     "cover_image_url": "https://example.com/pride_and_prejudice.jpg",
     "description": "A romantic novel of manners that depicts the emotional development of its protagonist, Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
     "genre": "Classic Literature",
     "published_date": "1813",
     "rating": "4.5"
   }
   ```

## Installation and Project Setup

### Prerequisites
- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)

### Instructions
To get started with The Book App Web Application, follow these steps:

Get the project files by cloning the repository:
```
git clone https://github.com/OkeloOtieno/thesebooks/tree/main
```
In the terminal, navigate to the project directory and install the necessary dependencies:
```
npm install
```

### Setup

To launch the application's backend, run the following command:
```console
$ json-server --watch db.json
```
You can test the server by visiting this URL in your browser:
[http://localhost:3000/books](http://localhost:3000/books)

To start using the application,run the following command:
```console
$ npm start
```

The base URL for the API will be:
[http://localhost:3000](http://localhost:3000).


## Contributing
Contributions are welcome! If you find any issues or want to enhance the application, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## Usage
Users can interact with the application in several ways, such as searching for books by title or author, creating custom reading lists, and adjusting the text size and background color for an optimal reading experience.


## Licenses
MIT License

Copyright (c)  Group 11 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## References and Acknowledgements

We would like to acknowledge the Google Books API for additional book data, reflecting the application's commitment to providing a rich selection of books. Their API has been a crucial component in extending the functionality and richness of our application. More details are available at:
```
https://booksdata.onrender.com/books
```

## Technologies Used
- ReactJS
- HTML
- JavaScript
- CSS


## Support and Contact Details
For support, contact us at https://github.com/OkeloOtieno/thesebooks/tree/main