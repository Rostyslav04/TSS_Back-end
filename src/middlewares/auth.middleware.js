import { jwt } from '../utils/jwt.js';

export function authMiddleware(req, res, next) {
  const token = req.header('Authorization');
  const tokenReplace = token.replace('Bearer ', '');

  const tokenPayload = jwt.decrypt(tokenReplace);

  console.log(tokenPayload);
  next();
}
