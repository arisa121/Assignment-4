function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let value = str.replace(/\s+/g, '');
  return value;
}
