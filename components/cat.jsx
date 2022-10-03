import Image from "next/image";
import Link from "next/link";
import coffee from "/assets/coffee.json";

export default function Cat(props) {
  const limit = props.limit;
  var shops;

  if (limit == undefined) {
    shops = coffee.shops.map(MyFunction);
  } else {
    shops = coffee.shops.map(MyFunction).slice(0, limit);
  }
  function MyFunction(element) {
    return (
      <>
        <div>
          <Image
            src={element.shopImage}
            alt="coffee"
            height={300}
            width={400}
          />
        </div>
        <div>
          <Link href={`/catalogue/${element.shopID}`}>
            <h2>{element.shopName}</h2>
          </Link>
        </div>
        <p>{element.shopDesc}</p>
      </>
    );
  }

  return <>{shops}</>;
}
