function getElementWidth(content, pudding, border) {
  const contentToNumber = Number.parseFloat(content);
  const puddinToNumber = Number.parseFloat(pudding);
  const borderToNumber = Number.parseFloat(border);
  const result = contentToNumber + 2 * puddinToNumber + 2 * borderToNumber;
  return result;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
