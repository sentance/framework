import { User } from "./models/User";

const user = new User({ name: "myname", age: 20 });

const mountpoint = document.createElement("div");
mountpoint.classList.add("base");
mountpoint.style.height = "100vh";
document.body.appendChild(mountpoint);

// const b = document.getElementById("base");
const elem = `Hello ${user.get("name")}`;
const elem1 = `Hello ${user.get("age")}`;

mountpoint.append(elem, elem1);
