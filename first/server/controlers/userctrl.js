const user = require("../model/user");
const bcrypt = require("bcryptjs"); // For password hashing

// Login function: Checks if the user exists and if the password matches
const Login = async (req, res) => {
  const body = req.body;

  // Validate input
  if (!body.email || !body.password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    // Search for the user by email
    const findUser = await user.findOne({ email: body.email });

    if (!findUser) {
      // If user not found, send an error response
      return res.status(404).send({ message: "User not found" });
    }

    // Compare password (assuming bcrypt was used for password hashing)
    const isMatch = await bcrypt.compare(body.password, findUser.password);

    if (!isMatch) {
      // If password does not match, send an error response
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // If login successful, send the user data
    res.send({ message: "Login successful", data: findUser });

  } catch (error) {
    // Handle errors gracefully
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Register function: Hash the password before saving the user
const Register = async (req, res) => {
  const body = req.body;

  // Validate input
  if (!body.username || !body.email || !body.password) {
    return res.status(400).send({ message: "Username, email, and password are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await user.findOne({ email: body.email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already in use" });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Save the new user to the database
    const saveData = await user.create({
      username: body.username,
      email: body.email,
      password: hashedPassword,
    });

    // Send the newly created user data back to the client
    res.status(201).send({ message: "Registered successfully", data: saveData });

  } catch (error) {
    // Handle errors gracefully
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  Login,
  Register,
};
