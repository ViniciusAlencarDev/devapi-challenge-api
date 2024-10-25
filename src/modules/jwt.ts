import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "";

export const createToken = async (id: number) => {
  return await jwt.sign({ id }, secret);
};
