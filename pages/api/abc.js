export default function abc(req, res) {
	console.log(req.body);
	console.log(req.method);
	res.status(200).json({ name: 'John Doe' });
}
