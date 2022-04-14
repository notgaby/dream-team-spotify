import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles

function App() {
  return (
    <SpotifyAuth
    redirectUri='http://localhost:3000/callback'
    clientID='bd61cf3a1de2417cb6e82bb5b740b489'
    scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
    />
  );
}

export default App;
