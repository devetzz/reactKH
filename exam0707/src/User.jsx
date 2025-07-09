
const User = (props) => {
  const user = props.item;
  const index = props.index;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
      <td>
        <button onClick={() => props.onEdit(index)}>수정</button>
        <button onClick={() => props.onDelete(index)}>삭제</button>
      </td>
    </tr>
  );
};

export default User;
