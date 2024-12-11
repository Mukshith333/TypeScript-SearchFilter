import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingUI from "./LoadingUI";
import Ratings from "./Ratings";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number | undefined;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProductAsync();
  }, [id]);

  const getProductAsync = async () => {
    if (id) {
      setLoading(true);
      await axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error(`Error fetching product data:${error} //${id}`);
        });

      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingUI />;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        className="mb-5 px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <img
        src={product?.images[0]}
        alt={product?.title}
        className="w-[50%] h-auto mb-5"
      />
      <h1 className="text=2xl mb-4 font-bold">{product?.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product?.description}</p>
      <div className="flex">
        <p>Price: ${product?.price}</p>
        <p className="flex  items-center gap-1 mt-2 ml-10">
          Rating: <Ratings rating={product?.rating} /> {product?.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
