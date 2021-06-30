export const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};
