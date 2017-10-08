/*

CryptoPass - Hierarchical Deterministic Passwords

The hierarchical path
p/ site name / username / character set / character length / iterations / offset /

Where:

site name:          The name of the company or website you are using this key for (eg. amazon, microsoft, facebook, google)
username:           Username or Email address, whichever is used to login to the site / application
character set:      Which set of characters to use, character sets defined below
character length:   The number of characters in the password
iterations:         How many passed to run
offset:             The offset for password changes. Start with 0. On change use 1, 2, 3 , 4, etc

 */
const sha256 = require('sha256');
const bip39 = require('bip39');

const characterSet = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '12345678901234567890',
    '!"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~'
];


const getSha = (parms) =>{
    let password = '';
    let step = 'p/'+parms.siteName+'/'+parms.userName+'/'+parms.characterSet+'/'+parms.characterLength+'/'+parms.iterations + '/'+parms.offset+'/';

    for(let i = 0; i < parms.iterations; i++){
        step = sha256(step);
    }
    // last as byte array
    step = sha256(step, { asBytes: true });

    // build character set
    let charSet = '';
    for(let i = 0; i <=  parms.characterSet; i++){
        charSet += characterSet[i];
    }
    for(let i = 0; i < parms.characterLength; i++){

        const pos = step[i] % charSet.length;
        password = password + charSet.charAt(pos);
    }
    return password;
};

const generateKey = () => {
    return{
        mnemonic:bip39.generateMnemonic(),
        seedHex:bip39.mnemonicToSeedHex(this.mnemonic)
    };
};


if (require.main === module) {
    const test = {
        siteName:'yahoo',
        userName:'you@gmail.com',
        characterSet:3,
        characterLength:25,
        offset:1,
        iterations:100,
        seedHex:'4ed8d4b17698ddeaa1f1559f152f87b5d472f725ca86d341bd0276f1b61197e21dd5a391f9f5ed7340ff4d4513aab9cce44f9497a5e7ed85fd818876b6eb402e'
    };
    const password = getSha(test);
    console.log(password);
}


module.exports.generateKey = generateKey;
module.exports.getSha = getSha;
