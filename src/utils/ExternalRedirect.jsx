import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExternalRedirect({ to }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(to, "_blank", "noopener,noreferrer");
    navigate(-1);
  }, [to, navigate]);

  return null;
}

export default ExternalRedirect;
