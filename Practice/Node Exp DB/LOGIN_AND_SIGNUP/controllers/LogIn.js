const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");


exports.LogIn = async (req, res) => {
    try {

        const isUserExists = await userSchema.findOne({ email: req.body.email });
        if (!isUserExists ) {

            return res.send(`<script>
                 alert('user not found');
                 window.location.assign('/signup')
                </script>`)

        }

        const isPassMatch = await bcrypt.compare(req.body.password, isUserExists.password )
          if (!isPassMatch ) {

            return res.send(`<script>
                 alert('Password wrong');
                 window.location.assign('/login')
                </script>`)
        }

        if(isUserExists && isPassMatch){
            res.render('profile.ejs', { data: isUserExists })
        }

    } catch (error) {
        console.log(error)

    }

}