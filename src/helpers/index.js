const BASE_FONT_SIZE = "16px";

export const asRem = (fontSize) =>
  `${parseFloat(fontSize) / BASE_FONT_SIZE}rem`;
