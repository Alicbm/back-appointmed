import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const JWT_SECRET = 'tu_secreto_secreto';

export async function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers['authorization'];

  if (!authorization) {
    return res.status(401).json({ error: 'No se proporcionó token de autorización' });
  }

  try {
    const token = authorization;
    const payload = verify(token, JWT_SECRET);
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: 'Token inválido' });
  }
}
