import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Lost = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <p>
        {`404: You must be lost. Let's get you back `}
        <Link href={`/`}>HOME</Link> in 3..2..1
      </p>
    </div>
  );
};

export default Lost;
