import "../styles/Footer.css"; 

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <footer> 
            <p>&copy; {currentYear} CodeCraft Labs. All Rights Reserved.</p>
       </footer>
      </div>
    );
  };
  
  export default Footer;