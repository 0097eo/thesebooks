# DeezBUUKS

#### Date, 2024/05/08

#### By *Group 11*

## Description
DeezBUUKS is designed to bring the vast world of books into the hands of readers everywhere. Our platform allows users to browse, search, and read a wide variety of books from different genres. With features like reviewing our application ensures a comfortable and personalized reading experience for book lovers of all ages.

## Demo
![image](https://github.com/OkeloOtieno/thesebooks/assets/41443081/032b24fd-eaf2-4ed8-a45a-bab25cd7c967)

![image](https://github.com/OkeloOtieno/BottomlessCocktails/assets/41443081/e9b90242-2ba5-48cb-8fb2-af0269f69b09)

![image](https://github.com/OkeloOtieno/thesebooks/assets/41443081/e90c47eb-fec5-4d72-9da8-64232839c477)

![image](https://github.com/OkeloOtieno/thesebooks/assets/41443081/8c07dbb7-b965-448e-9996-e162f69816ba)


## Detailed Description

The project directory, named `DeezBUUKS`, includes several files and folders essential for the application's functionality:
1. `assets` (This folder contains images and icons used throughout the project, along with  `css` files for the application's visual design.)
2. `src` (This folder houses the JavaScript files responsible for fetching book data from our database, handling user interactions, and dynamically updating the user interface.)

Other important files in the project, aside from this README.md, are:
```
1. An `index.html` file (This serves as the entry point for the application, rendering the user interface in the web browser.)
```
DeezBUUKS is a treasure trove for book lovers, offering a vast library spanning all genres and formats. Users can effortlessly search for their next great read by title, making it easy to discover new favorites. The app allows for seamless management the collection, enabling users to add and delete books as they see fit. A unique feature is the ability to rate books, sharing insightful reviews and experiences with the community. Additionally, the app facilitates access to external links for reading, enhancing the convenience and accessibility of literature. 

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
  "isbn": "978-1-60309-517-4",
  "link": "https://www.google.co.ke/books/edition/1984_Indonesian_Edition/JT_JDAAAQBAJ?hl=en&gbpv=0",
  "pageCount": "408",
  "title": "1984",
  "author": "George Orwell",
  "image": "https://books.google.co.ke/books/publisher/content?id=JT_JDAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2MsxEnlYvYoweHkHNtYR5CpLNAOA&w=1280",
  "description": "A dystopian novel that explores themes of totalitarianism, propaganda, and individualism.",
  "detailedDescription": "In a totalitarian future society, Winston Smith works for the Party, rewriting history to fit its propaganda. As he begins to rebel against the oppressive regime, he 
    falls in love with Julia, leading to their eventual capture and torture. Orwell's dystopian masterpiece warns of the dangers of totalitarianism, surveillance, and the manipulation of truth",
  "rating": "4"
},
   ```

## Installation and Project Setup

### Prerequisites
- Node.js (version 16.00.0 or higher)
- npm (version 8.0.0 or higher)

### Instructions
To get started with DeezBUUKS, follow these steps:

Get the project files by cloning the repository:
```
git clone https://github.com/OkeloOtieno/thesebooks/tree/main
```
In the terminal, navigate to the project directory and install the necessary dependencies:
```
npm install
```
### Setup
You can test the server by visiting this URL in your browser:
```
https://booksdata.onrender.com/books
```
To start using the application,run the following command:
```console
$ npm start
```

The base URL for the API will be:
```
https://booksdata.onrender.com/books
```

## Contributing
Contributions are welcome! If you find any issues or want to enhance the application, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## Key Features
* Explore Books: Dive into a vast library of books across all genres and formats. Use the search functionality to find your next great read by title.
* Manage the Collection: Add books to the collection. Easily delete books from the collection to maintain an organized library.
* Rate and Review: Share your thoughts and experiences by rating books and writing reviews. Your insights can help others discover great reads.
* Read Online: Access external links to read books directly within the app, enhancing your reading experience.


## Licenses
MIT License

Copyright (c)  Group 11 2024

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## References and Acknowledgements

We would like to acknowledge the Google Books API for additional book data, reflecting the application's commitment to providing a rich selection of books. Their API has been a crucial component in extending the functionality and richness of our application. More details are available at:
```
https://developers.google.com/books/docs/v1/using
```

## Technologies Used
- ReactJS
- HTML
- JavaScript
- CSS
- Firebase


## Support and Contact Details
For support, contact us at https://github.com/OkeloOtieno/thesebooks/tree/main
