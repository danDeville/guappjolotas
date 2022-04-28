import React from "react";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My Account</h1>

        <form action="" method="post" className="form">
          <div>
            <label for="name" className="label">Name</label>
            <input
              type="text"
              id="name"
              placeholder="name"
              required
              className="input input-name"
            />

            <label for="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              required
              className="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
