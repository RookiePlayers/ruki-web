
import axios from 'axios';
const sendEmail = ({to, subject, body,html, onSuccess, onFailure}: {to: string, subject: string, body?: string, html?: string,
    onSuccess?: () => void, onFailure?: (error: string) => void}) => {
    axios.post('/api/sendEmail', {
        to: to,
        subject,
        text: body,
        html: html
    }).then((response) => {
        onSuccess && onSuccess();
    }).catch((error) => {
        onFailure && onFailure(error);
    });
}

export const EmailService = ()=>{
    return {
        sendEmail
    }
}