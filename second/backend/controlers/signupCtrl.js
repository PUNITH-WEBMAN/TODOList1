const user = require("../model/user");
const bcrypt = require('bcrypt');
const validator = require('validator');  // Add this for email validation

// Register user
const Register = async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if password meets strength criteria (e.g., minimum length, number, etc.)
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    try {
        // Check if email is already registered
        const emailExists = await user.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = await user.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        // Send success response
        res.status(201).json({
            message: 'User registered successfully',
            data: {
                id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Login user
const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const userExists = await user.findOne({ email });
        if (!userExists) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Exclude sensitive data like password from the response
        const { password: _, ...userData } = userExists.toObject();

        // Send success response
        res.json({
            message: "Login successful",
            data: userData,  // Return user data excluding password
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Register, Login };
 
// hello bvvc