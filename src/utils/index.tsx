export const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};

export const typeOf = (
  obj: any,
):
  | 'undefined'
  | 'number'
  | 'boolean'
  | 'string'
  | 'function'
  | 'regexp'
  | 'array'
  | 'date'
  | 'error'
  | 'object'
  | 'null' => {
  const _toString = Object.prototype.toString;
  const _type = {
    undefined: 'undefined',
    number: 'number',
    boolean: 'boolean',
    string: 'string',
    '[object Function]': 'function',
    '[object RegExp]': 'regexp',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object Error]': 'error',
  };
  return _type[typeof obj] || _type[_toString.call(obj)] || (obj ? 'object' : 'null');
};

export const isEmptyObject = (obj: Record<any, any>) => {
  return !Object.keys(obj).length;
};
