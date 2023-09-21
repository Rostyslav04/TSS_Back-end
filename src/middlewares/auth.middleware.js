import { jwt } from '../utils/jwt.js';

export function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  const tokenReplace = token.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Неавторизований користувач');
  }

  try {
    const tokenPayload = jwt.decrypt(tokenReplace);
    req.user = tokenPayload;
  } catch (error) {
    return res.status(401).send('Недійсний токен');
  }

  next();
}
