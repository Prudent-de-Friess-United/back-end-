exports.seed = function(knex) {
  return knex("users").insert([
    { username: "Mandy", password: "password", department: "buyer" },
    { username: "Bruce", password: "password", department: "buyer" },
    { username: "Amanda", password: "password", department: "seller" },
    { username: "Steve", password: "password", department: "seller" },
    { username: "Sam", password: "password", department: "seller" }
  ]);
};
