const commentFormHandler = async function(event) {
    event.preventDefault();
   
    const path = document.location.pathname;
    const pathArray = path.split("/");
    const postId = pathArray[pathArray.length - 1]
    const body = document.querySelector('textarea[name="comment-body"]').value;
    
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);