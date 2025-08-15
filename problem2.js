function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let value = str.replace(/\s+/g, '').toUpperCase();
  return value;
}
const result = onlyCharacter("Serv er : : Do wn")
console.log(result)
