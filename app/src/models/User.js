"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "password is not right" };
    }
    return { success: false, msg: "There is not ID" };
  }
}

module.exports = User;
