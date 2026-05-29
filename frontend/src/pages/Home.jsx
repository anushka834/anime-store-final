import React from "react";

function Home() {
  const products = [
    {
      id: 1,
      name: "Naruto Hoodie",
      price: "₹999",
      image:
        "https://wallpapercave.com/wp/wp7845899.jpg",
    },
    {
      id: 2,
      name: "One Piece Poster",
      price: "₹499",
      image:
        "https://wallpapercave.com/wp/wp7443970.jpg",
    },
    {
      id: 3,
      name: "Demon Slayer Figure",
      price: "₹1499",
      image:
        "https://wallpapercave.com/wp/wp10009287.jpg",
    },
    {
      id: 4,
      name: "Attack On Titan Keychain",
      price: "₹299",
      image:
        "https://wallpapercave.com/wp/wp7424085.jpg",
    },
  ];

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Anime Store</h1>
        <p>Buy Amazing Anime Merchandise</p>

        <button
          style={{
            padding: "12px 25px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* CATEGORY SECTION */}
      <div style={{ padding: "20px" }}>
        <h2>Popular Categories</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <button>Naruto</button>
          <button>One Piece</button>
          <button>Demon Slayer</button>
          <button>Attack On Titan</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "20px" }}>
        <h2>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#222",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3>{product.name}</h3>
              <p>{product.price}</p>

              <button
                style={{
                  padding: "10px",
                  width: "100%",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;