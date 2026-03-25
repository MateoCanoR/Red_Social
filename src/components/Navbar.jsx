import { useState } from 'react'

function Navbar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    'Una nueva solicitud de amistad',
    'John Doe publicó en tu muro',
    'Jane te dio Like'
  ])

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const clearNotifications = () => {
    setNotifications([])
    setNotificationsOpen(false)
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          {/* Mobile menu button */}
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            href="javascript:void(0);"
            onClick={toggleMobileMenu}
            title="Menu"
          >
            <i className="fa fa-bars"></i>
          </a>

          {/* Logo */}
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Red Social
          </a>

          {/* Navigation icons */}
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Inicio">
            <i className="fa fa-globe"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mi Perfil">
            <i className="fa fa-user"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes">
            <i className="fa fa-envelope"></i>
          </a>

          {/* Notifications dropdown */}
          <div className="w3-dropdown-hover w3-hide-small">
            <button 
              className="w3-button w3-padding-large" 
              title="Notificaciones" 
              onClick={toggleNotifications}
            >
              <i className="fa fa-bell"></i>
              {notifications.length > 0 && (
                <span className="w3-badge w3-right w3-small w3-green">{notifications.length}</span>
              )}
            </button>
            {notificationsOpen && (
              <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: 300 }}>
                {notifications.length > 0 ? (
                  <>
                    {notifications.map((notif, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w3-bar-item w3-button w3-hover-light-grey"
                        onClick={(e) => {
                          e.preventDefault()
                          alert(notif)
                        }}
                      >
                        {notif}
                      </a>
                    ))}
                    <button 
                      className="w3-bar-item w3-button w3-light-grey w3-text-red"
                      onClick={clearNotifications}
                    >
                      <i className="fa fa-trash"></i> Limpiar
                    </button>
                  </>
                ) : (
                  <p className="w3-bar-item">Sin notificaciones</p>
                )}
              </div>
            )}
          </div>

          {/* User avatar */}
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Mi Cuenta">
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: 23, width: 23 }} alt="Avatar" />
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large">
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Inicio</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Mi Perfil</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Mensajes</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Configuración</a>
        </div>
      )}
    </>
  )
}

export default Navbar
