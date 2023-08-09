export default function handler(req, res) {
	console.log(req.method);
	console.log(req.body);
	if (req.method === 'GET') {
		res.json({ name: 'John Doe' });
	}
	if (req.method === 'POST') {
		res.json({ name: req.body + 1 });
	}
}
