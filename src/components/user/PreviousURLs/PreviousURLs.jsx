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
      <h2>Your recent links</h2>
      <div className="m-3">
        {userUrls?.map((userUrl) => {
          return (
            <div>
              <a href={userUrl.URL} className="block text-white">
                https://urlshrtr.netlify.app/{userUrl.SHORT_URL}
              </a>
              <p className="pl-3">Visits: {userUrl.visitors}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
