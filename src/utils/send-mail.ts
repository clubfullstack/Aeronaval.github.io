import { send } from 'emailjs-com';
import Swal from 'sweetalert2';
import { displayErrorAlert, validateAndGenerateErrorMessages } from '../utils/errorHandle';

export const handleSubmit = (
  e: React.FormEvent,
  name: string,
  email: string,
  message: string
) => {
  e.preventDefault();

  const errorMessages = validateAndGenerateErrorMessages(name, email, message);

  if (errorMessages) {
      displayErrorAlert(errorMessages);
      return;
  }

 const formValues = {
  from_name: name,
  reply_to: email,
  message: message,
 };

 // Change the values below to adjust the sending settings
 // https://www.emailjs.com/docs/

 send(
  'service_poh0z4m',  // Service ID
  'template_1vnm85q', // Template ID
  formValues, // Values to be sent
  'HkpAl6CvxAIoTzRl5' // Public key from emailJS
 )
  .then((response: any) => {
    console.log('Email successfully sent!', response.status, response.text);
    Swal.fire({
      icon: 'success',
      title: 'Email successfully sent!',
      confirmButtonColor: '#4A62FF',
      width: 400,
    });
  })
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send email',
      confirmButtonColor: '#4A62FF',
      width: 400,
    });
    console.log('Failed to send email ', error);
  });
};