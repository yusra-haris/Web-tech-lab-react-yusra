import { useParams } from 'react-router-dom';

function Account() {
    const { userID } = useParams();
    return (
    <div>
         <h1>User Account </h1>
         <h2>User ID {userID} </h2>
         <h2>Username : </h2>
         <h2> Password : </h2>
         <p></p>


    </div>
    );
    }
export default Account;