import React from "react";

// Data
import cookies from "./cookies";

// Styling
import styles from "./styles";

function App() {
  const cookieList = cookies.map(cookie => (
    <div style={styles.cookie} key={cookie.id}>
      <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
      <p style={styles.text}>{cookie.name}</p>
      <p style={styles.text}>{cookie.price} KD</p>
    </div>
  ));
  return (
    <div style={styles.body}>
      <div>
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniacs gather</h4>
        <img
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          style={styles.shopImage}
        />
      </div>
      <div style={styles.list}>{cookieList}</div>
    </div>
  );
}

export default App;