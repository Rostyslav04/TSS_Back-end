export function authMiddleware( req, res, next) {
  console.log('auth');
  next()
}
