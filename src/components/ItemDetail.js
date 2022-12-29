import "../styles/itemdetail.css";
import ItemCount from "./ItemCount.js";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";


export default function Detail() {
  const {countVisualisation, setCountVisualisation } = useContext(CartContext)
  const params = useParams();
  const [detail, setDetail] = useState([]);


  useEffect(() => {
    fetch(`https://emiuxuidev.github.io/gin_toc_api/argentinianGins.json`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (item) => item.id === parseInt(params.ginId)
        );
        console.log(result);
        setDetail(result);
      })
      .catch((error) => console.log(error));
  }, []);


  //Inicia el contador en 1
  const [amount, setAmount] = useState(1);
  
  const subHandler = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };

  const addHandler = () => {
    console.log();
    if (amount < detail[0].stock) {
      setAmount(amount + 1);
    } else {
      setAmount(amount);
    }
  };

  return detail != "" ? (
    countVisualisation ? (
      <>
        <h1>GinToc - Product detail</h1>
        <section className="wrapper-detail">
          <div className="content-detail">
            <div className="img-detail">
              <img src={detail[0].path} alt="Gin bottle selected" />
              <p id="precio">${detail[0].price}</p>
            </div>
            <div className="bar-detail"></div>
            <div className="description-detail">
              <h2>Brand : {detail[0].brand}</h2>
              <p>Varietal: {detail[0].wand}</p>
              <p>Origin: {detail[0].origin}</p>
              <p>Stock: {detail[0].stock}</p>

              <ItemCount
                onSubHandler={subHandler}
                onAddHandler={addHandler}
                amountItems={amount}
                detail={detail}
              />
            </div>
          </div>

          <div className="btn-detail">
            <button className="buy-btn">Buy now</button>
            <Link to="/" className="back-btn">
              Back
            </Link>
          </div>
        </section>
      </>
    ) : (
      <>
        <h1>GinToc - Product detail</h1>
        <section className="wrapper-detail">
          <div className="content-detail">
            <div className="img-detail">
              <img src={detail[0].path} alt="Gin bottle selected" />
            </div>
            <div className="bar-detail"></div>
            <div className="description-detail">
              <h2>Brand : {detail[0].brand}</h2>
              <p>Varietal: {detail[0].wand}</p>
              <p>Origin: {detail[0].origin}</p>
              <p>Stock: {detail[0].stock}</p>
              <p>Precio: {detail[0].price}</p>
            </div>
          </div>

          <div className="btn-detail">
            <Link to="/Cart" className="buy-btn">
              Buy now
            </Link>
            <Link to="/" className="back-btn">
              Back
            </Link>
          </div>
        </section>
      </>
    )
  ) : (
    console.log("Devuelve vacio")
  );
}
