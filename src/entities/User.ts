
class User {
    id!: Number;
    createdAt!: Date;
    username!: String;
    firstName!: String;
    lastName!: String;
    Name!: String;
    role!: String;
    constructor(data: User) {
        Object.assign(this, data);
    }
    static emptyInstance(){
        return new User({})
    }
}
export default User