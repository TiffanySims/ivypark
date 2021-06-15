import React, { useState, createContext, useEffect } from "react";
import products from "../Data/Looks_data";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [productList, setProducts] = useState(products);
  const [likes, setLikes] = useState([]);
  const [filtered, setFiltered] = useState({
    filtered: productList,
    color: "all",
    size: "all",
    price: "all",
    type: "all",
    sortBy: "asc",
  });

  useEffect(
    () => {
      const storage = JSON.parse(localStorage.getItem("like"));

      // Restoring likes from the localStorage
      if (storage) setLikes(storage);
      filterData();
    },
    [
      filtered.color,
      filtered.size,
      filtered.price,
      filtered.type,
      filtered.sortBy,
    ]
  );
  useEffect(
    () => {
      localStorage.setItem("like", JSON.stringify(likes));
    },
    [likes]
  );

  const change = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setFiltered((prev) => ({ ...prev, [name]: value }));
  };

  const filterData = () => {
    let newData = productList;
    if (filtered.color !== "all") {
      newData = newData.filter((product) => {
        return filtered.color === product.colors;
      });
    }
    if (filtered.type !== "all") {
      newData = newData.filter((product) => {
        return filtered.type === product.type;
      });
    }
    if (filtered.price !== "all") {
      newData = newData.filter((product) => {
        return filtered.price >= product.price;
      });
    }
    if (filtered.sortBy === "dec") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (filtered.sortBy === "asc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    setFiltered((prev) => ({ ...prev, filtered: newData }));
  };

  const addLike = (product) => {
    const liked = likes.findIndex((like) => {
      return product.product_id === like.id;
    });
    if (liked === -1) {
      const newLike = {
        id: product.product_id,
        image: product.image[0],
        title: product.title,
        price: product.price,
      };
      setLikes([...likes, newLike]);
    } else {
      return;
    }
  };

  const deleteLike = (id) => {
    const newState = likes.filter((like) => {
      return like.id !== id;
    });
    setLikes(newState);
  };

  return (
    <GlobalContext.Provider
      value={{
        productList,
        likes,
        filtered: filtered.filtered,
        change,
        addLike,
        deleteLike,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
