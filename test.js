const users = [
  { id: 1, name: "Anna", active: true },
  { id: 2, name: "Peter", active: false },
  { id: 3, name: "Maria", active: true },
  { id: 4, name: "John", active: false }
];
function getActiveUsers(usersList) {
    return users.filter((user) => user.active)
        .map(({id, name, active}) => name);
    
}

console.log(getActiveUsers(users));
