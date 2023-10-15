const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });


function solution(users, id) {
    let userFind = users.find((user) => user.id == id);
    return userFind ? userFind.name : false;
}

console.log(solution(users, 456));
