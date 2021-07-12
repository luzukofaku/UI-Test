exports.command = function setValueSlow(selector, txt) {
  txt.split('').forEach((char) => {
    this.setValue(selector, char);
    this.pause(100); // type speed in milliseconds
  });
  return this;
};
