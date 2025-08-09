export const getRandomRotation = () =>
  [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ] as [number, number, number];
