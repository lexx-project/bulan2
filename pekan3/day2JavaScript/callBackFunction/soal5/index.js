function isValidate(data, callback) {
  return callback(data);
}

function isValidateTrue(data) {
  if (data) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidate(undefined, isValidateTrue));
console.log(isValidate("Mboh Mumet", isValidateTrue));
