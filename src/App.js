import './App.css';
import Testimonio from './components/Terstimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de ...........................</h1>
        <Testimonio 
          nombre = 'Cesar'
          pais = 'Colombia'
          imagen = 'profile-1'
          cargo = 'Ciberseguridad'
          empresa = 'Spotify'
          testimonio = 'SpotifySpotifySpotifySpotifySpotifySpotifySpotifySpotifySpotifySpotifySpotifySpotify' 
          />

          <Testimonio 
          nombre = 'Paula'
          pais = 'Argentina'
          imagen = 'profile-2'
          cargo = 'MecanicadeFluidos'
          empresa = 'ISA'
          testimonio = 'ISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISAISA' 
          />

          <Testimonio 
          nombre = 'Diego'
          pais = 'Colombia'
          imagen = 'profile-3'
          cargo = 'Software'
          empresa = 'Google'
          testimonio = 'GoogleGoogleGoogleGoogleGoogleGoogleGoogle' 
          />
      </div>
    </div>
  );
}

export default App;
