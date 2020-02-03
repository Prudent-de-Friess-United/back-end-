// IMPORTS

const router = require("express").Router();

const Items = require("./items-model.js");
const restricted = require("../auth/middleware/restricted-middleware.js");
const validateItemsContent = require("../auth/middleware/validateItemsContent-middleware");
const verifyItemId = require("../auth/middleware/verifyItemId-middleware.js");

//ADD ITEM
router.post("/additem", restricted, validateItemsContent, (req, res) => {
  Items.addItem(req.body)
    .then(item => {
      res.status(201).json(item);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET ITEM
router.get("/", restricted, (req, res) => {
  Items.getItems()
    .then(items => {
      res.status(200).json(items);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET USERS ITEMS
router.get("/:id", verifyItemId, (req, res) => {
  const id = req.params.id;

  Items.getItemsById(id)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//UPDATE USERS ITEM
router.put(
  "/:id",
  restricted,
  verifyItemId,
  validateItemsContent,
  (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Items.updateItem(id, changes)
      .then(updatedItem => {
        res.status(201).json(updatedItem);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
);

//DELETE A USERS ITEM
router.delete("/:id", restricted, verifyItemId, (req, res) => {
  const id = req.params.id;

  Items.deleteItem(id)
    .then(deletedItem => {
      res.status(200).json({ message: "Item successfully deleted." });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET ITEMS BY CATEGORY
router.get("/category/:category", (req, res) => {
  const category = req.params.category;

  Items.getItemsByCategory(category)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
