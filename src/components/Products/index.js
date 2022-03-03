import React, { useEffect, useState } from "react";
import { Spin, Space, Switch,Pagination } from "antd";
import { UnorderedListOutlined, TableOutlined } from "@ant-design/icons";
import ProductItem from "../ProductItem";
import axios from "axios";
import "./index.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isList, setIsList] = useState(true);
  const [page,setPage]=useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  const onCheckChange = (event) => {
    console.log(event);
    setIsList(event);
  };

  const getProductsWithPage = (pageNo) =>{
      const start = (pageNo-1)*10
      const end = pageNo*10
      console.log(start,end);
      return products.slice(start,end)
  }

  const setCurrentPage = pageNo =>{
      setPage(pageNo)
  }

  const getProducts = async () => {
    const url = "https://asos2.p.rapidapi.com/products/v2/list";
    const options = {
      method: "GET",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "b66726f640mshdc6ef0ed717da33p13dee3jsn2aeaaac712a3",
      },
    };

    //const res = await fetch(url, options);
    const res = await axios.get(url, options);
    console.log(res);
    if (res.status === 200) {
      setProducts(res.data.products);
    } else {
    }
  };
  return (
    <div className="list-outer">
      {products.length > 0 ? (
        <div className="">
          <div className="inner-list-cont">
            <h1 className="head">Products</h1>
            <Switch
              checkedChildren={<UnorderedListOutlined />}
              unCheckedChildren={<TableOutlined />}
              defaultChecked
              onChange={onCheckChange}
              className="togglebar"
              size="large"
            />
          </div>

          <div className="products-list-cont">
            {getProductsWithPage(page).map((eachItem) => (
              <ProductItem key={eachItem.id} item={eachItem} isList={isList} />
            ))}
          </div>

                <div className="pagination-cont">
                    <Pagination defaultCurrent={1} total={products.length} onChange={setCurrentPage}/>
                </div>

        </div>
      ) : (
        <Space>
          <Spin size="large" />
        </Space>
      )}
    </div>
  );
}

export default Products;
