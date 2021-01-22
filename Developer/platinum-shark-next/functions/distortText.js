String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

const distortText = (setText, text) => {
  const charSet = 'PSM!*';
  const charSetIndex = (Math.floor(Math.random() * 5) + 1) - 1;
  const index = (Math.floor(Math.random() * 3) + 1) - 1;
  const newText = text.replaceAt(index, charSet[charSetIndex]);
  setText(newText);
  console.log(index);
  setTimeout(() => {
    distortText(setText, text);
  }, 300);
};

export default distortText;
