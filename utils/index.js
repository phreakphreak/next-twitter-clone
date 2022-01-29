import { v4 as uuidv4 } from "uuid";
export function generateUUID() {
  return uuidv4();
}

export const getOpacity = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);

  return `${color}${opacityHex}`;
};
