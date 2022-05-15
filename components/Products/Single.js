import Data from "../../data/products.json";

const paths = Data.map((x) => {
  return { params: { id: x.id.toString() } };
});

const Product = ({ _id }) => {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center items-center">
        testpage
      </div>
    </>
  );
};

export default Product;
