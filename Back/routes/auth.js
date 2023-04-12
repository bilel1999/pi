const{
    getAllUsers,
     logOut,
     signup,getUserbyNom,login,forget,reset, showUsers,getUser, deleteUser, updateUser, findUser
}= require("../controllers/usercontroller");
const router =require("express").Router();

const multer = require("multer");
// Multer Configurations
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, fileName);
  },
});


const upload = multer({ storage }).fields([
  { name: "photo", maxCount: 1 },
  { name: "docVerif", maxCount: 10 },
  // { name: "faceData", maxCount: 1 },
]);
router.post("/addUser", upload, signup);
router.post("/login",login);
router.post('/forgot-password', forget);
router.post('/reset-password', reset);
router.get("/showUser", showUsers);
router.get("/showUser/:id", getUser);
router.get("/getBynom/:nom", getUserbyNom);

router.delete("/delUser/:id", deleteUser);
router.put("/updateUser/:id",updateUser);
router.get("/search", findUser);
router.get('/doctors', async (req, res) => {
  const doctors = await User.find({ role: 'Doctor' });
  res.json(doctors);
});
module.exports = router;
