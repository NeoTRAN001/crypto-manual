import { CipherMessage } from './CipherMessage';
import { DeCipherMessage } from './DecipherMessage';

export class CryptographyDictionary {

    main(message, encryption, inputs, action) {
        const cipher = new CipherMessage();
        const decipher = new DeCipherMessage();
        let result = '';

        switch(encryption) {
            case 'A1Z26':
                result = action 
                    ? cipher.a1z26(message)
                    : decipher.a1z26(message);
                break;
        }

        return result;
    }
}


export default CryptographyDictionary;