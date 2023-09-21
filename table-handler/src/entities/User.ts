interface User {
    id: number;
    name: String;
    friends: User[];
    bestFriend: User;
}
export default User;