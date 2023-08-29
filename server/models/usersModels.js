// Define the User model
class Users {
  constructor(id, username, password, role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role || 'user';
  }
}

module.exports = Users;

  