interface Person {
    name : string,
    age : number,
    email : string
}

function infoUser(user: Person) : void {
    console.log(user);
} 

const user : Person = {
    name : "Đức",
    age : 22,
    email : "ducpham@gmail.com"
}

infoUser(user)