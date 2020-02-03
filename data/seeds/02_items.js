exports.seed = function(knex) {
  return knex("items").insert([
    {
      name: "T-shirt",
      description: "Testing 123 Seed Data",
      price: 15,
      location: "Chad",
      category: "Clothing",
      user_id: 2,
      URL:
        "https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-back-sabaton-T15003.png"
    },
    {
      name: "Jeans",
      description: "Testing 123 Seed Data",
      price: 30,
      location: "South Africa",
      category: "Clothing",
      user_id: 2
    },
    {
      name: "Sweet Corn",
      description: "Testing 123 Seed Data",
      price: 12,
      location: "Niger",
      category: "Food",
      user_id: 3
    },
    {
      name: "Bread",
      description: "Testing 123 Seed Data",
      price: 5,
      location: "Cameroon",
      category: "Food",
      user_id: 3
    },
    {
      name: "Strawberries",
      description: "Testing 123 Seed Data",
      price: 7,
      location: "South Africa",
      category: "Food",
      user_id: 4
    },
    {
      name: "Avacados",
      description: "Testing 123 Seed Data",
      price: 8,
      location: "Namibia",
      category: "Food",
      user_id: 4
    },
    {
      name: "Coffee",
      description: "Testing 123 Seed Data",
      price: 3,
      location: "Kenya",
      category: "Food",
      user_id: 5
    },
    {
      name: "Oil Painting",
      description: "Testing 123 Seed Data",
      price: 9,
      location: "Somalia",
      category: "Art & Crafts",
      user_id: 1
    },
    {
      name: "Wooden Sculpture",
      description: "Testing 123 Seed Data",
      price: 6,
      location: "Benin",
      category: "Arts & Crafts",
      user_id: 5
    },
    {
      name: "Frying Pan",
      description: "Testing 123 Seed Data",
      price: 6,
      location: "Botswana",
      category: "Household Items",
      user_id: 5
    },
    {
      name: "Silverware",
      description: "Testing 123 Seed Data",
      price: 9,
      location: "Zambia",
      category: "Household Items",
      user_id: 1
    }
  ]);
};
