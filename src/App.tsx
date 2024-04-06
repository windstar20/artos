import './App.css'
import './reset.css'
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: "101",
      type: "beverage",
      name: "Iced Americano",
      nameKor: "아이스 카페 아메리카노",
      price: 4000,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg",
    },
    {
      id: "102",
      type: "beverage",
      name: "Iced Caffe Latte",
      nameKor: "아이스 카페 라떼",
      price: 5000,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg",
    },
    {
      id: "103",
      type: "beverage",
      name: "Strawberry Lemon Blended",
      nameKor: "딸기 레몬 블렌디드",
      price: 6300,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2023/04/[9200000004566]_20230407153247174.jpg",
    },
  ]);

  return (
    <main className={"main"}>
      <ul className='w-full  bg-white p-2.5 grid gap-y-5'>
        {products.map((product) => {
          return (
            <li key={product.id} className={"p-15 px-10 grid grid-cols-[100px_1fr] gap-x-10 items-center"}>
              <img
                src={product.imageUrl}
                alt="beverage"
                className={"rounded-full w-24"}
                title={product.name}
              />
              <div className={"text-base h-20 justify-start items-center grid"}>
                <label>{product.nameKor}</label>
                <label className='text-zinc-500'>{product.name}</label>
                <label className={"font-bold"}>{product.price}원</label>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
