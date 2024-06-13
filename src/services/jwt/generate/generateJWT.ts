const generateJWT = () => {
  const HMACSHA256 = (stringToSign: string, secret: string) =>
    "not_implemented";

  // The header typically consists of two parts:
  // the type of the token, which is JWT, and the signing algorithm being used,
  // such as HMAC SHA256 or RSA.
  const header = {
    alg: "HS256",
    typ: "JWT",
  };
  const encodedHeaders = btoa(JSON.stringify(header));

  // The second part of the token is the payload, which contains the claims.
  // Claims are statements about an entity (typically, the user) and
  // additional data. There are three types of claims:
  // registered, public, and private claims.
  const claims = {
    email: "demo@test.com",
    name: "Demo test",
    expires: 864000000, // 10 day
  };
  const encodedPayload = btoa(JSON.stringify(claims));

  // create the signature part you have to take the encoded header,
  // the encoded payload, a secret, the algorithm specified in the header,
  // and sign that.
  const signature = HMACSHA256(
    `${encodedHeaders}.${encodedPayload}`,
    "mysecret"
  );
  const encodedSignature = btoa(signature);

  return `${encodedHeaders}.${encodedPayload}.${encodedSignature}`;
};

export default generateJWT;
