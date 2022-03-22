import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../data/products.json";
import useStore from "../../store";
import { Container, Button } from "@mui/material";

const HomePage = () => {
  const store = useStore();

  useEffect(() => {
    console.log(store.counter);
    store.addCounter();
  }, []);

  return (
    <div>
      <Container>
        {products.map((product) => (
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
    </div>
  );
};

export default HomePage;
