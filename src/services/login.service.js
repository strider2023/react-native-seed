export default class LoginServices {

  userLogin(username, pass, success, failure) {
    fetch('http://upasthiti-api.oitsystems.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: pass
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(success)
        success(responseJson);
    })
    .catch((error) => {
      console.error(error);
      if (failure)
        failure(error);
    });
  }
}
