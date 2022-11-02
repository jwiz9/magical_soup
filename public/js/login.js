const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector('#password-input-login');
  
    // Check database for matching email and password
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    // Display dashboard if user matches
    if (response.ok) {
      console.log('login.js', document.location)
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);