import axios from 'axios';

export default function nodeMailer(data) {
  if (data.firstName === ''
    || data.lastName === ''
    || data.email === ''
    || data.firstName === '') {
    alert('Please fill out all fields.');
  } else {
    axios.post('/api/contact', data)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
};