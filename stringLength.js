const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Out of range');
  } else {
    return string.length;
  }
}

module.exports = stringLength;
