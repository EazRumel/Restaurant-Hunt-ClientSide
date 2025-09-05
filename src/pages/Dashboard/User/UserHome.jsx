import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
   const {user} = useAuth()
  return (
    <div>
      <h2>
      Hello Welcome 
      <span className="ml-2">
      {
       user ? user.displayName : <p>Back</p>
      }</span>
      </h2>
    </div>
  );
;
};

export default UserHome;