"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user = new User_1.User('鈴木', '太郎', 23);
var contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = "".concat(user.familyName, " ").concat(user.givenName);
}
