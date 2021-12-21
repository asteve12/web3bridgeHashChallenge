let privateKey = Math.random();
let publicKey = Math.random();

let data = 'web3bridge thanks for these opportunity';

function encrypt(message, publicKeyGiven) {
  if (publicKey == publicKeyGiven) return btoa(message);
}

let a = encrypt(data, publicKey);
console.log(a);
/*
WHEN ENCRYPTED
the output is :d2ViM2JyaWRnZSB0aGFua3MgZm9yIHRoZXNlIG9wcG9ydHVuaXR5*/

function decrypt(encodedText, givenPrivateKey) {
  if (privateKey == givenPrivateKey) return atob(encodedText);
}

let b = decrypt(a, privateKey);

console.log('this is b', b);

/*
WHEN DENCRYPTED
the output is :this is b web3bridge thanks for these opportunity*/
