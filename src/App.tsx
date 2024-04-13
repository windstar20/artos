import "./App.css";
import "./reset.css";
import { MouseEvent, useState } from "react";

interface Product {
  id: string;
  type: string;
  name: string;
  nameKor: string;
  price: number;
  imageUrl: string;
}

interface Order {
  id: string;
  count: number;
}

function App() {
  const [products] = useState<Product[]>([
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
    {
      id: "104",
      type: "beverage",
      name: "Grapefruit Honey Black Tea",
      nameKor: "자몽 허니 블랙 티",
      price: 6500,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000187]_20210419131229539.jpg",
    },
    {
      id: "105",
      type: "beverage",
      name: "Malcha Tiramisu Latte",
      nameKor: "말차 티라미수 라떼",
      price: 6500,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004954]_20231127093740911.jpg",
    },
    {
      id: "106",
      type: "beverage",
      name: "Iced Jeju Green Tea",
      nameKor: "유기농 녹차로 만든 티",
      price: 6500,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[400400000094]_20210415230316646.jpg",
    },
  ]);

  const convertNumType = (number: number) => {
    return number.toLocaleString("ko-KR", {
      // style: 'currency',
      // currency: 'USD',
      // maximumFractionDigits: 2,
      // minimumFractionDigits: 2,
    });
  };

  const [orderList, setOrderList] = useState<Order[]>([]);

  const handleProductClick = (
    _e: MouseEvent<HTMLLIElement>,
    product: Product,
  ) => {
    setOrderList((prevState) => {
      if (prevState.length === 0) {
        return [
          ...prevState,
          {
            id: product.id,
            count: 1,
          },
        ];
      } else {
        const hasProductIdx = orderList.findIndex(
          (item) => item.id === product.id,
        );
        console.log("[ App/ : 90, james ] hasProduct =", hasProductIdx);
        if (hasProductIdx >= 0) {
          return prevState.map((item, idx) => {
            if (idx === hasProductIdx) {
              return {
                ...item,
                count: item.count + 1,
              };
            } else {
              return item;
            }
          });
        } else {
          return [
            ...prevState,
            {
              id: product.id,
              count: 1,
            },
          ];
        }
      }
    });
  };

  const handlePlusClick = (
    _e: MouseEvent<HTMLButtonElement>,
    orderItem: Order,
  ) => {
    setOrderList((prevState) => {
      return prevState.map((order) => {
        if (order.id === orderItem.id) {
          return {
            ...order,
            count: order.count + 1,
          };
        } else {
          return order;
        }
      });
    });
  };

  const handleMinusClick = (
    _e: MouseEvent<HTMLButtonElement>,
    orderItem: Order,
  ) => {
    setOrderList((prevState) => {
      return prevState.map((order) => {
        if (order.id === orderItem.id && order.count > 0) {
          return {
            ...order,
            count: order.count - 1,
          };
        } else {
          return order;
        }
      });
    });
  };

  return (
    <main className={"main bg-white"}>
      <ul className="w-full  bg-white p-2.5 grid grid-cols-3x350 gap-3">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              data-id={product.id}
              className={
                "py-2 px-2.5 p-15 grid grid-cols-[100px_auto] gap-x-5 items-center h-48 shadow-lg rounded-xl hover:-translate-y-2 hover:duration-200 hover:ease-in"
              }
              onClick={(e) => handleProductClick(e, product)}
            >
              <img
                src={product.imageUrl}
                alt="beverage"
                className={"rounded-full w-24"}
                title={product.name}
              />
              <div className={"text-base h-20 justify-start items-center grid"}>
                <label>{product.nameKor}</label>
                <label className="text-zinc-500">{product.name}</label>
                <label className={"font-bold"}>
                  {convertNumType(product.price)}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      <section>
        <div className={"p-2.5"}>
          <div className={"grid grid-cols-3 h-10 items-center text-lg"}>
            <label>주문내역</label>
            <label>수량</label>
            <label>소계</label>
          </div>
          {orderList.length > 0 &&
            orderList.map((item) => {
              const product = products.find(
                (product) => product.id === item.id,
              );
              if (!product) return;
              return (
                <div
                  key={item.id}
                  className={"grid grid-cols-3 h-10 items-center text-sm"}
                >
                  <label>{product?.nameKor}</label>
                  <div className={"flex items-center gap-x-2"}>
                    <button
                      name={"minus"}
                      onClick={(e) => handleMinusClick(e, item)}
                      className={
                        "w-6 h-7 leading-9 px-4.5 text-sm text-white rounded-md cursor-pointer bg-cyan-900 flex justify-center items-center"
                      }
                    >
                      -
                    </button>
                    <label>{item.count}</label>
                    <button
                      name={"plus"}
                      onClick={(e) => handlePlusClick(e, item)}
                      className={
                        "w-6 h-7 leading-9 px-4.5 text-sm text-white rounded-md cursor-pointer bg-cyan-900 flex justify-center items-center"
                      }
                    >
                      +
                    </button>
                  </div>
                  <label>
                    {convertNumType(item.count * product?.price)} 원
                  </label>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default App;
