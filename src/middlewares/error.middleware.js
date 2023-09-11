export function errorMiddleware(err, req, res, next) {
  return res.status(500).json({ error: 'server error' });
}
