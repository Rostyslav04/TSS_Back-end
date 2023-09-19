import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class JWT {
  key = '';

  constructor() {
    this.key = process.env.JWT_KEY;
  }

  create(userId) {
    const token = jsonwebtoken.sign({ userId }, this.key, { expiresIn: '1y' });

    return token;
  }

  decrypt(token) {
    return jsonwebtoken.verify(token, this.key);
  }
}

export const jwt = new JWT()