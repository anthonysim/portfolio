import axios from 'axios';

export default function nodeMailer(data, setThankyou) {
  if (data.firstName === ''
    || data.lastName === ''
    || data.email === ''
    || data.firstName === '') {
    alert('Please fill out all fields.');
  } else {
    axios.post('/api/contact', data)
      .then(res => {
        console.log(res);
        setThankyou(true);
        setTimeout(() => setThankyou(false), 3750);
      })
      .catch(err => console.error(err));
  }
};