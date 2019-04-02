import { transform, isEqual, omitBy, isNull } from "lodash";

export const isNullOrUndefined = (object: any) =>
  object === null || object === undefined;

export function difference(object: {}, base: object) {
  return transform(object, (result, value, key) => {
    if (!isEqual(value, base[key])) {
      result[key] = value;
    }
  });
}

export function removeNullProperties(object: object) {
  return omitBy(object, isNull);
}

export const ObjectUtils = {
  difference,
  removeNullProperties
};

export default ObjectUtils;
