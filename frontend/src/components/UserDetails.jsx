import { decodeJWTPayload } from "../utils/apiAdminQueries";

function UserDetailsDisplay() {
  const decodedJWT = decodeJWTPayload();
  const isJWTAvailable = !Object.keys(decodedJWT).length == 0;
  const userName = "User Name : " + decodedJWT.userName;
  const author = "Author : " + String(decodedJWT.author);
  const loginStatus = "Login Status :" + decodedJWT.status;
  const jwtTokenExpiry =
    "JWT Token Expiry : " + new Date(decodedJWT.exp * 1000).toString();
  console.log(decodedJWT);

  return (
    <div>
      {isJWTAvailable ? (
        <div>
          {userName} | {author} | {loginStatus} | {jwtTokenExpiry}
        </div>
      ) : (
        <h3>No JWT Found in Local Storage</h3>
      )}
    </div>
  );
}

export default UserDetailsDisplay;
