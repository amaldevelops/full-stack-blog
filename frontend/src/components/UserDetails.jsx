import { decodeJWTPayload } from "../utils/apiAdminQueries";

function UserDetailsDisplay() {
  let userName = "n/A";
  let author = "n/A";
  let loginStatus = "n/A";
  let jwtTokenExpiry = "n/A";

  let decodedJWT = decodeJWTPayload();

  // Ensure decodedJWT is a valid object
  let isJWTAvailable =
    decodedJWT &&
    typeof decodedJWT === "object" &&
    Object.keys(decodedJWT).length > 0;

  if (isJWTAvailable) {
    userName = "User Name : " + decodedJWT.userName;
    author = "Author : " + String(decodedJWT.author);
    loginStatus = "Login Status : " + decodedJWT.status;
    jwtTokenExpiry =
      "JWT Token Expiry : " + new Date(decodedJWT.exp * 1000).toString();
  } else {
    console.log("Invalid or empty JWT:", decodedJWT);
  }

  return (
    <div className="jwtDisplay">
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
