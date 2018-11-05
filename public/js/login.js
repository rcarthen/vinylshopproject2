$( function() {

    // Getting references to the name input and author container, as well as the table body
    const nameInput = $('#author-name');
    const authorList = $('tbody');
    const authorContainer = $('.author-container');
  
    // A function to handle what happens when the form is submitted to create a new Author
    const handleAuthorFormSubmit = function (event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the insertAuthor function and passing in the value of the name input
      insertAuthor({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    const insertAuthor = function (authorData) {
      $.post('/api/authors', authorData)
        .then(getAuthors);
    }
  