import { User } from "./User";
const user = new User('鈴木', '太郎', 23); 

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}