import logo from './logo.svg';
import './App.css';

function App() {

    const googleDriveLink ="https://drive.google.com/uc?export=download&id=1yqSWYjDpMcgRVNmT_xHfTIaIupVuuasm";
  
    return (
      <div>
        <h1>Download APK</h1>
        <a href={googleDriveLink} download>
          Download Now
        </a>
      </div>
    );
  };
    
  ;


export default App;
