export default { fetch() {
		return new Response('Hello JOSH!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
