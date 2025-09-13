import type { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateContato =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        errors: result.error.issues.map(e => ({ path: e.path, message: e.message }))
      });
    }
    req.body = result.data;
    next();
  };

