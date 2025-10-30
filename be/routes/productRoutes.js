// // routes/productRoutes.js
// const express = require("express");
// const upload = require("../upload");
// const verifyToken = require("../middleware/verifyToken")
// const checkAdmin = require("../middleware/checkAdmin");
// const {
//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
// } = require("../controllers/productController");

// const router = express.Router();

// router.get("/", getAllProducts);
// router.get("/:id", getProductById);
// router.post("/upload",
//      checkAdmin, 
//      upload.single("image"),
//       createProduct);
// router.put("/:id", checkAdmin, upload.single("image"), updateProduct);
// router.delete("/:id",checkAdmin, deleteProduct);

// module.exports = router;



// routes/productRoutes.js
const express = require("express");
const upload = require("../upload");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ this is your verifyToken
const checkAdmin = require("../middleware/checkAdmin");
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin-protected routes
router.post(
    "/upload",
    authMiddleware,   // ✅ first verify token
    checkAdmin,       // ✅ then check admin role
    upload.single("image"),
    createProduct
);

router.put(
    "/:id",
    authMiddleware,
    checkAdmin,
    upload.single("image"),
    updateProduct
);

router.delete(
    "/:id",
    authMiddleware,
    checkAdmin,
    deleteProduct
);

module.exports = router;
