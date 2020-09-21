export class DeCipherMessage {
    a1z26(message) {
        const arrayText = message.split('-');
        let result = '';

        arrayText.forEach(element => {
            if(element != ' ') result += String.fromCharCode(((parseInt(element) + 64))); 
            else result += ' ';
        });

        return result;
    }
}