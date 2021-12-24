"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, password } = UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "password is not right" };
    }
    return { success: false, msg: "There is not ID" };
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}

module.exports = User;
