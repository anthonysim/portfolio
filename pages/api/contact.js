export default function handler(req, res) {
  const { firstName, lastName, email, message } = req.body;
  console.log(req.body);
  console.log(process.env.GMAIL)
  res.status(200).json({ name: 'John Doe' })
}

