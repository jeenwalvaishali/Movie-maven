import { MESSAGES } from "../common/constants";

function Status({ error }) {

  const message = MESSAGES[error] || MESSAGES.default;
  return (
    <div className="error-message">
      {error && message}
    </div>
  );
}

export default Status;