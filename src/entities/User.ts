class User {
  id!: Number;
  createdAt!: Date;
  username!: String;
  firstName!: String;
  lastName!: String;
  Name!: String;
  role!: String;
  public constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
  static emptyInstance() {
    return new User({});
  }
}
export default User;
