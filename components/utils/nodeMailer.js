// import axios from 'axios';
// import validator from 'validator';

// export default function nodeMailer(data, setThankyou) {
//   if (data.firstName === ''
//     || data.lastName === ''
//     || data.email === ''
//     || data.firstName === ''
//     || !validator.isEmail(data.email)) {
//     alert('Please fill out all fields.');
//   } else {
//     axios.post('/api/contact', data)
//       .then(res => {
//         console.log(res);
//         setThankyou(true);
//         setTimeout(() => setThankyou(false), 3750);
//       })
//       .catch(err => console.error(err));
//   }
// };