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
      <h2 className="text-white">Your recent links</h2>
      <div className="mt-5">
        {userUrls?.map((userUrl) => {
          return (
            <div
              key={userUrl.SHORT_URL}
              className="bg-slate-500 rounded-md w-5/6 p-3 mb-10 mx-auto max-w-md"
            >
              <div className="text-blue-700 bg-slate-400 rounded-md w-48 m-auto p-1 text-md underline overflow-hidden hover:text-blue-500">
                <a href={userUrl.URL}>{userUrl.SHORT_URL}</a>
              </div>
              <p>Visits: {userUrl.visitors}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
