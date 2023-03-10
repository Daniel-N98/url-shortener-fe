import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";
import { BASE_URL } from "../../url-input/URLBar";

export default function PreviousURLs() {
  const [user, loading] = useAuthState(auth);
  const [userUrls, setUserUrls] = useState();

  useEffect(() => {
    async function retrieveURLs() {
      const result = await BASE_URL.get(
        "/url/user",
        { USER_UID: user.uid },
        {
          headers: { "Content-Type": "application/json;charset=UTF-8" },
        }
      );
      setUserUrls(result.USER_URLS);
    }
    retrieveURLs();
  });

  if (loading) return <h2>Loading...</h2>;

  return (
    <section id="previous-urls">
      {userUrls?.map((userUrl) => {
        return <p>{userUrl.SHORT_URL}</p>;
      })}
    </section>
  );
}
