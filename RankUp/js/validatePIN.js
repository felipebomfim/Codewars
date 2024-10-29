function validatePIN(pin) {
    // A regex verifica se a string contém exatamente 4 ou 6 dígitos
    return /^(\d{4}|\d{6})$/.test(pin);
  }

  console.log(validatePIN("1234"));   // true
  console.log(validatePIN("12345"));  // false
  console.log(validatePIN("666666")); // true
  console.log(validatePIN("a234"));   // false
  console.log(validatePIN(""));       // false
  console.log(validatePIN("1234567"));// false
  console.log(validatePIN("1.234"));  // false
  console.log(validatePIN("-1234")); 