import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./url-input/URLBar";

export default function RedirectToMainURL() {
  const { shortened_url } = useParams();

  async function fetchURL() {
    try {
      const { data } = await BASE_URL.get(`/url/${shortened_url}`);
      window.location.href = data.URL;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchURL();
  });

  return null;
}
