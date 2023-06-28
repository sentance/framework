import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeFinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouterHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeFinder(Methods.get);
export const put = routeFinder(Methods.put);
export const post = routeFinder(Methods.post);
export const del = routeFinder(Methods.del);
export const patch = routeFinder(Methods.patch);
