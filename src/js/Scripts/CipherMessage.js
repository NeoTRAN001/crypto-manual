export class CipherMessage {
    a1z26(message) {
        const arrayText = message.split('');
        let result = '';

        arrayText.forEach(element => {
            if(element != ' ') result += (parseInt(element.charCodeAt(0)) - 64) + "-";
            else result += ' ';
        });

        return result.slice(0,-1);
    }
}