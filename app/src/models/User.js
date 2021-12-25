"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id);

      if (id) {
        if (id === client.id && password === client.password) {
          return { success: true };
        }
        return { success: false, msg: "password is not right" };
      }
      return { success: false, msg: "There is not ID" };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
