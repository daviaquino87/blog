import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@errors/AppError";

type JWTPlayload = {
  id: string;
  exp: number;
};

export const ensureAuthenticate = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError("token missing!", 401);
  }

  const [, token] = authorization.split(" ");

  const { id, exp } = verify(token, process.env.JWT_PASS) as JWTPlayload;

  if (new Date(exp * 1000).getTime() < new Date().getTime()) {
    throw new AppError("invalid token!", 401);
  }

  request.user.id = id;

  next();
};
