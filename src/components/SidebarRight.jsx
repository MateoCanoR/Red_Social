import { useState } from 'react'

function SidebarRight() {
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: 'Jane Doe', avatar: 'https://www.w3schools.com/w3images/avatar6.png' }
  ])

  const handleAcceptFriend = (id) => {
    alert('¡' + friendRequests.find(f => f.id === id).name + ' agregado como amigo!')
    setFriendRequests(friendRequests.filter(f => f.id !== id))
  }

  const handleDeclineFriend = (id) => {
    setFriendRequests(friendRequests.filter(f => f.id !== id))
  }

  return (
    <div className="w3-col m2">
      {/* Upcoming Events */}
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p><strong>Próximos Eventos:</strong></p>
          <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: '100%' }} />
          <p><strong>Holiday</strong></p>
          <p>Viernes 15:00</p>
          <p>
            <button className="w3-button w3-block w3-theme-l4" onclick="alert('Información del evento')">
              Información
            </button>
          </p>
        </div>
      </div>
      <br />

      {/* Friend Requests */}
      {friendRequests.length > 0 && (
        <>
          {friendRequests.map(friend => (
            <div key={friend.id} className="w3-card w3-round w3-white w3-center">
              <div className="w3-container">
                <p>Solicitud de Amistad</p>
                <img src={friend.avatar} alt="Avatar" style={{ width: '50%' }} />
                <br />
                <span>{friend.name}</span>
                <div className="w3-row w3-opacity">
                  <div className="w3-half">
                    <button 
                      className="w3-button w3-block w3-green w3-section" 
                      title="Accept"
                      onClick={() => handleAcceptFriend(friend.id)}
                    >
                      <i className="fa fa-check"></i>
                    </button>
                  </div>
                  <div className="w3-half">
                    <button 
                      className="w3-button w3-block w3-red w3-section" 
                      title="Decline"
                      onClick={() => handleDeclineFriend(friend.id)}
                    >
                      <i className="fa fa-remove"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <br />
        </>
      )}

      {/* ADS */}
      <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p><strong>Publicidad</strong></p>
        <p className="w3-opacity">Espacio para anuncios</p>
      </div>
      <br />

      {/* Bug icon */}
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p>
          <i className="fa fa-bug w3-xxlarge"></i>
        </p>
        <p className="w3-small w3-opacity">v1.0.0</p>
      </div>
    </div>
  )
}

export default SidebarRight
