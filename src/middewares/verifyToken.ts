import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const secret = process.env.SECRET || "";

const verifyToken = async (
  req: Request | any,
  res: Response,
  next: NextFunction,
) => {
  let token = String(req.headers["Authorization"]);

  if (!token) return res.status(400).json({ message: "Token not sent" });

  if (!token.includes("Bearer "))
    return res.status(401).json({ message: "Token invalid" });
  token = token.split(" ")[1];

  await jwt.verify(token, secret, ({ error, data }: any) => {
    if (error) return res.status(401).json({ message: "Token invalid" });

    req.id = data?.id;
    next();
  });
};

export default verifyToken;
