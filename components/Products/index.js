import Data from "../../data/products.json";
import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: { delay: 1 },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap flex-row justify-center items-center"
      >
        {Data.map((x) => (
          <>
            <div
              key={x.id}
              variants={item}
              className="w-48 h-48 border-2 border-slate-200 bg-slate-50 rounded-lg m-4 p-4"
            >
              <Link href={`/products/${x.id}`}>{x.name}</Link>
            </div>
          </>
        ))}
      </motion.div>
    </>
  );
};

export default Products;
