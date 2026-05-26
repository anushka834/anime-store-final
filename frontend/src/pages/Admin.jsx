import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const getProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    getProducts();
  };

  const openEditModal = (product) => {

    setSelectedProduct(product);

    setShowModal(true);

  };

  const handleChange = (e) => {

    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value
    });

  };

  const saveProduct = async () => {

    await axios.put(
      `http://localhost:5000/api/products/${selectedProduct._id}`,
      selectedProduct
    );

    setShowModal(false);

    getProducts();

  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Manage Products
      </h1>

      <div className="grid gap-6">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-zinc-900 p-5 rounded-xl flex justify-between items-center"
          >

            <div className="flex items-center gap-5">

              <img
                src={product.image}
                alt=""
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <p>
                  ₹{product.price}
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <button
                onClick={() => openEditModal(product)}
                className="bg-yellow-500 px-5 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 px-5 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {
        showModal && (

          <div className="fixed inset-0 bg-black/70 flex justify-center items-center">

            <div className="bg-zinc-900 p-10 rounded-2xl w-[500px]">

              <h2 className="text-3xl font-bold mb-6">
                Edit Product
              </h2>

              <div className="grid gap-4">

                <input
                  type="text"
                  name="name"
                  value={selectedProduct.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-3 rounded-lg text-black"
                />

                <input
                  type="number"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="p-3 rounded-lg text-black"
                />

                <input
                  type="text"
                  name="image"
                  value={selectedProduct.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="p-3 rounded-lg text-black"
                />

                <input type="file" onChange={uploadFileHandler} />

                <button
                  onClick={saveProduct}
                  className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 py-3 rounded-lg"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )
      }

    </div>

  )
}

export default Admin