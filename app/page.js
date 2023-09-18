async function fetchUsers() {
	const response = await fetch('https://reqres.in/api/users?page=2')
	const data = await response.json()
	return data.data
}

async function HomePage() {
	const users = await fetchUsers()

	return (
		<ul>
			{users.map(user => (
				<li key={user.id}>
					<div>
						<h5>
							{user.id} {user.first_name} {user.last_name}
						</h5>
						<p>email: {user.email}</p>
					</div>
				</li>
			))}
		</ul>
	)
}

export default HomePage
