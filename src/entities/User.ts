class User {
  id!: number;
  createdAt!: Date;
  username!: String;
  firstName!: String;
  lastName!: String;
  Name!: String;
  role!: String;
  email!: String;
  public constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
  static emptyInstance() {
    return new User({});
  }
}
export default User;
