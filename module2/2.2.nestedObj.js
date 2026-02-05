const user = {
  name: "Ahkamul",
  age: 35,
  address: {
    village: "Lama",
    district: "Bandarban",
    country: "Bangladesh"
  }
};
// console.log (user.address.district);
// console.log (user.address['country']);
// console.log (user['address']['village']);

/** Optional Chaining: */
const newUser = {
  name: "Ahkamul",
  address: {
    district: "Bandarban"
  }
};

console.log(user.address?.district); // Bandarban
console.log(user.contact?.phone);    // undefined
