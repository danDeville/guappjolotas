import React,{useState} from 'react'
import { toast } from 'react-toastify'

const MyAccount = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		if (name === '') {
			toast.error('Name is required')
		} else if (email === '') {
			toast.error('Email is required')
		} else if (password === '') {
			toast.error('Password is required')
		}	else {
			localStorage.setItem('name', name)
			localStorage.setItem('email', email)
			localStorage.setItem('password', password)
			toast.success('Account created successfully')
		}
	}

	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>

				<form action="" className="form">
					<div>
						<label for="name" className="label">Nombre de usuario</label>
						<input
							type="text"
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>


						<label for="email" className="label">Email</label>
						<input
							type="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>

						<label for="password" className="label">Password</label>
						<input
							type="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
					</div>

					<input
            type="submit"
            value="Edit"
						onClick={handleSubmit}
          />
				</form>
			</div>
		</div>
	)
}

export default MyAccount
