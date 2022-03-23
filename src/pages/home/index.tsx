import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.json";
import useStore from "../../store";
import { Container, Button } from "@mui/material";

const HomePage = () => {
  const store = useStore();
  const [rad, setRad] = React.useState(0);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;

    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    setRad(((scrollTop + containerHeight) / scrollHeight) * 360);
  }
  useEffect(() => {
    console.log(store.counter);
    store.addCounter();
  }, []);




  return (

    <div style={styles.container} onScroll={scrollHandler} >
      <div style={styles.center_logo}>
        <div style={styles.center_logo_inner} >
          <Link to="/" >
            <img src="/images/full_logo.svg" alt="Non_Fiction_Store" style={{ transform: `rotate(${rad}rad)` }} />
          </Link>
        </div>

      </div>

      <Container style={styles.page}>
        {products.map((product) => (
          <Button key={product.id}>
            <Link to={`/product/${product.id}`} style={styles.center_logo_a}>
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

      <div style={styles.footer}>
        footer
      </div>
    </div >

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
    top: "50%",
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
    PointerEvent: "none",
  },
  page: {
    position: "relative",
    top: "10vh",
    bottom: "20033vh",
    PointerEvents: "none"
  },
  footer: {
    position: "relative",
    bottom: "0",
    left: "50%",
    right: "0",
    top: "2000px",

  }

} as const

export default HomePage;
