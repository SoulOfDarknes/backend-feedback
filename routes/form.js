const { check, validationResult } = require("express-validator");
const Router = require("express");
const User = require("../models/User");
const router = new Router();


router.post(
    "/feedback",
    [
        check("name", "Must have at least 3 characteres").isLength({ min: 3, max: 12 }),
        check("email", "Uncorrect email").isEmail(),
        check("message", "Need more then 10 letters").isLength({ min: 10, max: 500 })
    ],
    async (req, res) => {
        try {
            const { name, email, message } = req.body;
            console.log(req.body)
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }

            const text = new User({ name, email, message });
            await text.save();
            return res.json({ message: "Your message was successfully sent!" });

        } catch (error) {
            console.log(error)
            res.send({ message: "Server error" })
        }
    })

module.exports = router;