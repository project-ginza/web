import React, {useMemo, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import products from "../../data/products.json";
import useStore from "../../store";
import {Container, Button} from "@mui/material";
import {useScrollPosition, ScrollProps} from "../../hooks/useScrollPosition";

const HomePage = () => {
  const store = useStore();
  const [rad, setRad] = React.useState(0);
  useScrollPosition(
    ({prevPos, currPos}: ScrollProps) => {
      const isChange = currPos?.y !== prevPos?.y;
      if (isChange) setRad((-currPos.y / 600) % Math.PI);
    },
    [rad]
  );

  useEffect(() => {
    console.log(store.counter);
    store.addCounter();
  }, []);

  return useMemo(
    () => (
      <div>
        <div>
          navbar
          <Link to="/login">Login</Link>
        </div>
        

      
        <div>
          <div style={styles.center_logo}>
            <div style={styles.center_logo_inner}>
              <Link to="/">
                <img
                  src="/images/full_logo.svg"
                  alt="Non_Fiction_Store"
                  style={{transform: `rotate(${rad}rad)`}}
                />
              </Link>
            </div>
          </div>

          <Container>
            {products.map(product => (
              <Button key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    height="200"
                    width="200"
                  />
                </Link>
              </Button>
            ))}
          </Container>

          <div style={styles.footer}>footer</div>
        </div>
      </div>
    ),
    [rad]
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
  },
  center_logo: {
    position: "fixed",
    top: "20%",
    left: "40%",
    zIndex: 55,
  },
  center_logo_inner: {
    position: "fixed",
    height: "400px",
    width: "400px",
    alignItems: "center",
    justifyContent: "center",
  },
  center_logo_a: {
    textDecoration: "none",
    outline: "none",
    display: "inline-block",
  },
  page: {
    position: "relative",
    top: "10vh",
  },
  footer: {
    position: "relative",
    bottom: "0",
    left: "50%",
    right: "0",
    top: "2000px",
  },
} as const;

export default HomePage;
