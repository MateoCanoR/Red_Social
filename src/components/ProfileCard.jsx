import { useState } from 'react'

function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Mi Perfil',
    profession: 'Designer, UI',
    location: 'London, UK',
    birthday: 'April 1, 1988'
  })

  const [editData, setEditData] = useState(profile)

  const handleEdit = () => {
    setEditData(profile)
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">{profile.name}</h4>
        <p className="w3-center">
          <img
            src="https://www.w3schools.com/w3images/avatar3.png"
            className="w3-circle"
            style={{ height: 106, width: 106 }}
            alt="Avatar"
          />
        </p>
        <hr />
        {!isEditing ? (
          <>
            <p>
              <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
              {profile.profession}
            </p>
            <p>
              <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
              {profile.location}
            </p>
            <p>
              <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
              {profile.birthday}
            </p>
            <button 
              className="w3-button w3-block w3-theme w3-margin-top"
              onClick={handleEdit}
            >
              <i className="fa fa-edit"></i> Editar Perfil
            </button>
          </>
        ) : (
          <>
            <div className="w3-margin-bottom">
              <label className="w3-small">Profesión:</label>
              <input 
                type="text" 
                value={editData.profession}
                onChange={(e) => setEditData({...editData, profession: e.target.value})}
                className="w3-input w3-border w3-round w3-padding-small"
              />
            </div>
            <div className="w3-margin-bottom">
              <label className="w3-small">Ubicación:</label>
              <input 
                type="text" 
                value={editData.location}
                onChange={(e) => setEditData({...editData, location: e.target.value})}
                className="w3-input w3-border w3-round w3-padding-small"
              />
            </div>
            <div className="w3-margin-bottom">
              <label className="w3-small">Cumpleaños:</label>
              <input 
                type="text" 
                value={editData.birthday}
                onChange={(e) => setEditData({...editData, birthday: e.target.value})}
                className="w3-input w3-border w3-round w3-padding-small"
              />
            </div>
            <button 
              className="w3-button w3-block w3-green w3-margin-bottom"
              onClick={handleSave}
            >
              <i className="fa fa-check"></i> Guardar
            </button>
            <button 
              className="w3-button w3-block w3-red"
              onClick={handleEdit}
            >
              <i className="fa fa-times"></i> Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
