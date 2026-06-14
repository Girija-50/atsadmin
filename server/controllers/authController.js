import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Temporary in-memory user storage
const users = [];

// Register User
export const registerUser = async (req, res) => {
try {
const { name, email, password } = req.body;

```
// Check existing user
const existingUser = users.find(
  (user) => user.email === email
);

if (existingUser) {
  return res.status(400).json({
    message: "User already exists",
  });
}

// Hash password
const hashedPassword = await bcrypt.hash(
  password,
  10
);

const user = {
  id: Date.now().toString(),
  name,
  email,
  password: hashedPassword,
};

users.push(user);

res.status(201).json({
  message: "User Registered",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
  },
});
```

} catch (error) {
console.log(error);

```
res.status(500).json({
  message: "Server Error",
});
```

}
};

// Login User
export const loginUser = async (req, res) => {
console.log("Login Request:", req.body);

try {
const { email, password } = req.body;

```
const user = users.find(
  (u) => u.email === email
);

if (!user) {
  return res.status(400).json({
    message: "Invalid Email",
  });
}

const isMatch = await bcrypt.compare(
  password,
  user.password
);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid Password",
  });
}

const token = jwt.sign(
  {
    id: user.id,
  },
  process.env.JWT_SECRET || "mysecretkey",
  {
    expiresIn: "7d",
  }
);

res.status(200).json({
  message: "Login Success",
  token,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
  },
});
```

} catch (error) {
console.log("LOGIN ERROR:", error);

```
res.status(500).json({
  success: false,
  error: error.message,
});
```

}
};
