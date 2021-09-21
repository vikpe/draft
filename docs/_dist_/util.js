export function deepCopy(o) {
  // Cas de base
  if (typeof o !== "object" || o === null || o instanceof RegExp || o instanceof Date) {
    return o;
  } // Array


  if (Array.isArray(o) || o instanceof Int8Array || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Int16Array || o instanceof Uint16Array || o instanceof Int32Array || o instanceof Uint32Array || o instanceof Float32Array || o instanceof Float64Array || o instanceof BigInt64Array || o instanceof BigUint64Array) {
    return o.map(e => deepCopy(e));
  } // Object


  const finalObject = {};

  for (let k in o) {
    if (o.hasOwnProperty(k)) {
      finalObject[k] = deepCopy(o[k]);
    }
  }

  return finalObject;
}