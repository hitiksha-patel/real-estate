import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("No token found");
    return res.status(401).json({ message: "Not Authenticated" });
  }

  console.log("Token found:", token);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      console.log("Token verification failed:", err);
      return res.status(403).json({ message: "Token is not valid" });
    }
    console.log("Token verified. Payload:", payload);
    req.userId = payload.id; // Add the user ID to the request object
    next();
  });
};
