import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col footer-col-1">
            <p>Copyright @CDAC - Delhi</p>
          </div>
          <div className="footer-col footer-col-2">
            <ul className="footer-links">
            <p>Neuro-Cognitive Group IV</p>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';

// function Footer() {
//   return (
//     <div style={{ background: '#f8f8f8', padding: '1rem' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
//         <p>&copy; 2023 Your Company. All rights reserved.</p>
//         <ul style={{ display: 'flex', gap: '1rem' }}>
//           <li><a href="#">Terms of Use</a></li>
//           <li><a href="#">Privacy Policy</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer;