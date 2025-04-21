import { decodeJWTPayload } from "../utils/apiAdminQueries";

function UserDetailsDisplay() {
  let userName = "n/A";
  let author = "n/A";
  let loginStatus = "n/A";
  let jwtTokenExpiry = "n/A";

  let decodedJWT = decodeJWTPayload();
  let isJWTAvailable = !Object.keys(decodedJWT).length == 0;
  // console.log(isJWTAvailable);
  if (isJWTAvailable) {
    userName = "User Name : " + decodedJWT.userName;
    author = "Author : " + String(decodedJWT.author);
    loginStatus = "Login Status :" + decodedJWT.status;
    jwtTokenExpiry =
      "JWT Token Expiry : " + new Date(decodedJWT.exp * 1000).toString();
  } else {
    console.log(decodedJWT);
  }

  return (
    <div>
      {isJWTAvailable ? (
        <div>
          <h3>JSON Web Token details</h3>
          {userName} | {author} | {loginStatus} | {jwtTokenExpiry}
        </div>
      ) : (
        <h3>No JWT Found in Local Storage</h3>
      )}
    </div>
  );
}

export default UserDetailsDisplay;
