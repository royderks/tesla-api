var tjs = require("teslajs");

var username = "";
var password = "";
var mfaPassCode = "";

tjs.login(
  {
    username: username,
    password: password,
    mfaPassCode: mfaPassCode,
  },
  function (err, result) {

    console.log({ err });

    if (result.error) {
      console.log('error', JSON.stringify(result));
      process.exit(1);
    }

    var token = JSON.stringify(result.authToken);

    if (token) console.log("Login Succesful!", { token });
  }
);
