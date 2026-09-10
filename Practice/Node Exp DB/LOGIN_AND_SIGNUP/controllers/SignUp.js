const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
exports.SignUp = async (req, res) => {

  try {
    //user already exist
    const isExist = await userSchema.findOne({ email: req.body.email });
    if (isExist) {
      res.send("User Already Exists");
    }

    //Destructure
    const { fullname, email, password, confirm_password } = req.body;
    //password hashing

    const password_1 = await bcrypt.hash(password, 10);
    const password_2 = await bcrypt.hash(confirm_password, 10);

    //saving user data
    const signup_data = new userSchema({
      fullname,
      email,
      password: password_1,
      confirm_password: password_2,
    });

    await signup_data.save();

    res.redirect("/login");

  } catch (error) {
    console.log(error);
    res.status(500).send("Intrenal server error");
  }
};
