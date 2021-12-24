"use strict";

// const fs = require("fs").promises;
const db = require("../config/db");

class UserStorage {
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const userKeys = Object.keys(users);
  //   const userInfo = userKeys.reduce((newUser, info) => {
  //     newUser[info] = users[info][idx];
  //     return newUser;
  //   }, {});
  //   return userInfo;
  // }

  // static #getUsers(data, isAll, fields) {
  //   const users = JSON.parse(data);
  //   if (isAll) return users;

  //   const newUsers = fields.reduce((newUsers, field) => {
  //     if (users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;
  //   }, {});
  //   return newUsers;
  // }

  static getUsers(isAll, ...fields) {
    // return fs
    //   .readFile("./src/databases/users.json")
    //   .then((data) => {
    //     return this.#getUsers(data, isAll, fields);
    //   })
    //   .catch(console.error);
  }

  static getUserInfo(id) {
    // return fs
    // .readFile("./src/databases/users.json")
    // .then((data) => {
    //   return this.#getUserInfo(data, id);
    // })
    // .catch(console.error);
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    // const users = await this.getUsers(true);
    // if (users.id.includes(userInfo.id)) {
    //   throw "exist already";
    // }
    // users.id.push(userInfo.id);
    // users.name.push(userInfo.name);
    // users.password.push(userInfo.password);
    // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    // return { success: true };
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id,name,password) VALUES(?,?,?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
