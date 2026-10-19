function SessionHeader({ sessionId }) {
  return (
    <header className="session-header">
      <h2>Endiq</h2>

      <div className="session-info">
        <span>Status: Waiting...</span>
        <span>Session ID: {sessionId}</span>
      </div>
    </header>
  );
}

export default SessionHeader;