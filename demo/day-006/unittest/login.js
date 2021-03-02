const login = (username, password) => {
  if (password.length < 6) {
    throw new Error("password kurang dari 6");
  } else {
    return true;
  }
};

module.exports = login;
