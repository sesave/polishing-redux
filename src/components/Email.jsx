import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../redux/userSlice";

export const Email = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  return (
    <input
      type="email"
      value={email}
      placeholder="Email"
      onChange={handleChange}
    />
  );
};
