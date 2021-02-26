const crypto = require("crypto");

class Cipher {
  algorithm = "aes-256-ctr";
  secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
  iv = crypto.randomBytes(16);

  encrypt = (text, pass = null) => {
    const cipher = crypto.createCipheriv(
      this.algorithm,
      pass || this.secretKey,
      this.iv
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: this.iv.toString("hex"),
      content: encrypted.toString("hex"),
    };
  };

  decrypt = (hash, pass = null) => {
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      pass || this.secretKey,
      Buffer.from(hash.iv, "hex")
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(hash.content, "hex")),
      decipher.final(),
    ]);

    return decrpyted.toString();
  };

  static formatPrice(price = 0) {
    return `Rp ${price},00-`;
  }
}

const securyty = new Cipher();
const encrypt = securyty.encrypt("halo");
console.log({ encrypt });

const dec = securyty.decrypt(encrypt);
console.log({ dec });

console.log(Cipher.formatPrice(199));
