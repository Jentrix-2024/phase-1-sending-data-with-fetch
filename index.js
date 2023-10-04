
const submitData = (userName, userEmail) => {
    const data = {
      userName: userName,
      userEmail: userEmail,
    };
  
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
      name: userName, // Use the argument value for userName
      email: userEmail, // Use the argument value for userEmail
      }),
    })

    
      .then((response) => response.json())
      .then((responseData) => {
        // Extract the new ID value from the response data
        const newUserId = responseData.id;
  
        // Append the new ID to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New User ID: ${newUserId}`;
        document.body.appendChild(idElement);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };