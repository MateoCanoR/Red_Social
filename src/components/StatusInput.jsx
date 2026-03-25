import { useState } from 'react'

function StatusInput({ onAddPost }) {
  const [status, setStatus] = useState('')

  const handlePost = () => {
    if (status.trim()) {
      onAddPost(status)
      setStatus('')
    }
  }

  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding">
        <h6 className="w3-opacity">¿Qué estás pensando?</h6>
        <textarea 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w3-border w3-padding w3-round" 
          style={{ width: '100%', minHeight: '80px', resize: 'vertical' }}
          placeholder="Escribe tu post aquí..."
        />
        <button 
          type="button" 
          className="w3-button w3-theme w3-margin-top"
          onClick={handlePost}
          disabled={!status.trim()}
        >
          <i className="fa fa-pencil"></i> Post
        </button>
      </div>
    </div>
  )
}

export default StatusInput
