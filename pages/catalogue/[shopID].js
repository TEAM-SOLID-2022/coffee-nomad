import Image from "next/image";
import { useRouter } from "next/router";
import coffee from "/assets/coffee.json";

export default function ShopID() {
  const router = useRouter();
  const shopID = router.query.shopID;
  const shop = MyFunction(coffee);

  function MyFunction(object) {
    return object.shops.find(FindFunction);
  }

  function FindFunction(element) {
    return element.shopID == shopID;
  }

  if (shopID == undefined) return null;

  console.log(shopID);
  return (
    <>
      <div>
          <Image
            src={shop.shopImage}
            alt="dog"
            height={300}
            width={400}
          />
        </div>
      <h1>{shop.shopName}</h1>
      <h2>Shop details</h2>
      <p>{shop.shopDesc}</p>
    </>
  );
}
