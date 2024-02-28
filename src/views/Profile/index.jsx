import { Outlet } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      Profile
      {/* para que se muestre la ruta hijos de children*/}
      <Outlet />
    </div>
  );
};

export default Profile;
