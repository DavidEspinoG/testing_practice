const capitalize = (string) => {
  const capital =  string.split('')[0].toUpperCase();
  const result = string.split('');
  result.splice(0,1,  capital)
  return result.join('');
}

module.exports = capitalize;