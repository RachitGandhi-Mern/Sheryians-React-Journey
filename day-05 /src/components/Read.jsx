

const Read = (props) => {
  const users = props.users

  const renderUsers = users.map((user, index) => (
    <li key={index}>
      {user.name} - {user.age}
    </li>
  ));
  return (
    <div>
        <h1>User Data</h1>
        <ol>{renderUsers}</ol>
    </div>
  )
}

export default Read