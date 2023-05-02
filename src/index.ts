import { User } from "./models/User";

const user = new User({ name: "myname", age: 20 });
const user1 = new User({ name: "Igor", age: 26 });
user1.set({ name: "Sergey" });

const mountpoint = document.createElement("div");
mountpoint.classList.add("base");
mountpoint.style.height = "100vh";
document.body.appendChild(mountpoint);

// const b = document.getElementById("base");
// const elem = `Hello ${user.get("name")}`;
// const elem1 = `Hello ${user.get("age")}`;
console.log(user);
const users = [user, user1];

user.on("change", () => {});

users.forEach((user) => {
  const nameElem = document.createElement("div");
  nameElem.textContent = `Hello ${user.get("name")} your age is - ${user.get("age")}`;

  mountpoint.appendChild(nameElem);
});
