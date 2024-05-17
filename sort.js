var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
 ];
 
 // Function to sort the array by libraryID in descending order
 library.sort(function(a, b) {
     return b.libraryID - a.libraryID;
 });
 
 console.log(library);
 
 // Expected Output:
 // [
 //   {
 //     author: "Walter Isaacson",
 //     libraryID: 4264,
 //     title: "Steve Jobs"
 //   },
 //   {
 //     author: "Suzanne Collins",
 //     libraryID: 3245,
 //     title: "Mockingjay: The Final Book of The Hunger Games"
 //   },
 //   {
 //     author: "Bill Gates",
 //     libraryID: 1254,
 //     title: "The Road Ahead"
 //   }
 // ]
 