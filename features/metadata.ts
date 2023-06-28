import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("This is old info")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", secretInfo, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
  }
}
