import { NextFunction, Request, Response } from "express";
import { AppError } from "@errors/AppError";

export const verifyError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ info: error.message });
  }
  return response.status(500).json({ error: "Internal error server!" });
};
