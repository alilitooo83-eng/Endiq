import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { saveSession } from "../../services/session";

function Join() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const id = params.get("session");

    if (!id) {
      navigate("/");
      return;
    }

    saveSession(id);

    navigate("/session");
  }, [navigate, params]);

  return <h2>Joining session...</h2>;
}

export default Join;