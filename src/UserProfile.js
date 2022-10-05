
function UserProfile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>

      <div>
        <p>Email: {user.email}</p>
        <p>Company: {user.company?.name}</p>
        <p>Catchphrase: {user.company?.catchPhrase}</p>
      </div>
    </>
  )
}

export default UserProfile;