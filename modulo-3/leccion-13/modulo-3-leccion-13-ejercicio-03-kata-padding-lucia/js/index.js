const paddingLeft = (string, initSize, padding) => {
  const numberToAdd = initSize - string.length;
  if (numberToAdd <= 0) {
    return string;
  }
  return padding[0].repeat(numberToAdd) + string;
};

module.exports = paddingLeft;
