import axios from 'axios';
import AlertMessage from "../AlertMessage";
import { useState } from 'react';
export default async function handler(data) {
    const sendgrid_key='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';
    const { form_name, form_subjet, form_email, form_message } = data;

    if (!form_name || !form_subjet || !form_email || !form_message) {
        console.log('INVALID_PARAMETER');
        return 'INVALID_PARAMETER';

    }
    //syntaxe email
    const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(form_email)) {
        console.log("EMAIL_SYNTAX_INCORRECT");
        return 'EMAIL_SYNTAX_INCORRECT';

    }
    //retour  a la ligne message
    const message = form_message.replace(/\n/g, '<br>')
        .replace(/\r/g, '<br>')
        .replace(/\t/g, '<br>')
        .replace(/<(?!br\s*\/?)[^>]+>/g, '<br>');

    //creation du message
    const body = {
        to: 'chilemexantus@gmail.com',
        from: 'bschilemexantus@gmail.com',
        templateId: 'd-81ad372d6b7e42c491b5178e9d1b93ff',
        dynamic_template_data: {
            form_name: form_name,
            form_message: message,
            form_subjet: form_subjet,
            form_email: form_email
        }

    };   //creation du message confirmation
    const sendMail2 = {
        to: form_email,
        from: 'bschilemexantus@gmail.com',
        templateId: 'd-9774a909674445bbace7b532e21071d2',
        dynamic_template_data: {
            form_name: form_name,
            form_email: form_email
        }

    };
        try {
          await axios.post('https://api.sendgrid.com/v3/mail/send', {
            data: JSON.stringify(body),
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sendgrid_key}` // Remplacez par votre clé d'API SendGrid
            },
          });
          console.log('EMAIL_SENDED_SUCCESSFULLY');
          return 'EMAIL_SENDED_SUCCESSFULLY';
      
        } catch (error) {
          return error;
        }
      
}
