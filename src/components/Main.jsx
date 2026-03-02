import "../styles/Main.css"; 
import {Link} from 'react-router-dom'

const Main = ({title, children}) => {
    return (
      <div>
        <main>
          <h2>{title}</h2>
          {children}
        </main>
      </div>
    );
  };
  
  export default Main;