import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";
import { BASE_URL } from "../../url-input/URLBar";

export default function PreviousURLs() {
  const [user, loading] = useAuthState(auth);
  const [userUrls, setUserUrls] = useState();

  useEffect(() => {
    async function retrieveURLs() {
      try {
        const { data } = await BASE_URL.get(`/url/user/${user.uid}`);
        setUserUrls(data.USER_URLS);
      } catch (error) {
        console.error(error);
      }
    }
    retrieveURLs();
  }, [user]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section id="previous-urls">
      {userUrls?.map((userUrl) => {
        return <p>{userUrl.SHORT_URL}</p>;
      })}
    </section>
  );
}
