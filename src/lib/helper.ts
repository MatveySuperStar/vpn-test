export const lockScroll = (check: boolean) => {
  document.body.style.cssText = check ? "overflow: hidden" : "";
};
export const getRandomStrings = (arr: string[], num: number) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, num);
};

export const randomInteger = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
