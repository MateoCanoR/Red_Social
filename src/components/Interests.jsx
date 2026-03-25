import { useState } from 'react'

function Interests() {
  const allInterests = [
    { label: 'Noticias', level: 'd5' },
    { label: 'W3Schools', level: 'd4' },
    { label: 'Etiquetas', level: 'd3' },
    { label: 'Juegos', level: 'd2' },
    { label: 'Amigos', level: 'd1' },
    { label: 'Películas', level: '' },
    { label: 'Viajes', level: 'l1' },
    { label: 'Comida', level: 'l2' },
    { label: 'Diseño', level: 'l3' },
    { label: 'Arte', level: 'l4' },
    { label: 'Fotos', level: 'l5' },
  ]

  const [selectedInterests, setSelectedInterests] = useState(['Noticias', 'Amigos'])

  const toggleInterest = (label) => {
    if (selectedInterests.includes(label)) {
      setSelectedInterests(selectedInterests.filter(i => i !== label))
    } else {
      setSelectedInterests([...selectedInterests, label])
    }
  }

  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p><strong>Mis Intereses</strong></p>
        <p>
          {allInterests.map((interest, index) => (
            <span
              key={index}
              className={`w3-tag w3-small w3-theme-${interest.level} ${
                selectedInterests.includes(interest.label) ? 'w3-opacity-max' : 'w3-opacity'
              }`}
              onClick={() => toggleInterest(interest.label)}
              style={{ cursor: 'pointer', marginRight: '5px', marginBottom: '5px' }}
              title={selectedInterests.includes(interest.label) ? 'click para deseleccionar' : 'click para seleccionar'}
            >
              {interest.label}
              {selectedInterests.includes(interest.label) && ' ✓'}
            </span>
          ))}
        </p>
        <p className="w3-small w3-opacity">
          Intereses seleccionados: {selectedInterests.length}
        </p>
      </div>
    </div>
  )
}

export default Interests
