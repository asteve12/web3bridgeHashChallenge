import crypto from 'crypto';

const data = 'thanks web3bridge for impacting life with theese programme';

// these code helps to generate the public and private that will help for encryption and decryption
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

//this code below eable the ecryptionof the data with the help of the public key

const hashResult = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(data)
);

console.log(hashResult.toString('base64'));

/* our output will be */
/*
c+lH1xn+El988JzICC71HlVC+ppM8HeG2NXTcDxA+xtajb1ox2UF+2wqz1P3YC2gFxYUKCn4dGjmBB8T7/FtQNfsP+cmwQJua+uj2bLiTwX2OfAeGSsl0
42DmFWVEwLFx5e/cr6aqq9lfbWWY4Hv+38r1OJBQFK/BNBs1xiz4RsLKQRXorBbg8wFP6wL63af+e/2iqU2U/NqMF9yOvwyrOgjc3gSUK+C90nqvMD
q7pK1BWJw0ELBOiEA24Vgw/ybWKCUNTxJdK9T1d2TLl2B0KraX+Kyxr+c4lCTL49AjuX3aam4BD9nNzXL+fQkqoKYBYd3MhgCaLlEqkVuRsAYyA==
*/

const decryptHash = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  hashResult
);
console.log(decryptHash.toString());

//the output is our previously input data
/*
thanks web3bridge for impacting life with theese programme
*/
