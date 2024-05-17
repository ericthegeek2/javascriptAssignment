var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    const book1 = function(library){
         console.log(library[0].author)
         console.log(library[0].title)
         console.log(library[0].readingStatus, '\n')

    }

    const book2 = function(library){
        console.log(library[1]['author'])
        console.log(library[1]['title'])
        console.log(library[1]['readingStatus'], '\n')
    
   }

   const book3 = function(library){
    console.log(library[2][Object.keys(library[2])[0]])
    console.log(library[2][Object.keys(library[2])[1]])
    console.log(library[2][Object.keys(library[2])[2]], '\n')
    
  }

  book1(library)
  book2(library)
  book3(library)