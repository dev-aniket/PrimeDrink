import React from 'react'
import './Product.css';
import Orange from '../assets/BottleOrange.webp'
import Collector from '../assets/CollectorImages.webp'
import FutureFreeze from '../assets/BottleFutureFreeze.webp'
import IcePop from '../assets/BottleICEPop.webp'
import Peso from '../assets/BottlePesoPluma.webp'
import Sournova from '../assets/BottleSournova.webp'

const products = [
  {
    name: 'ORANGE KREAM',
    image: Orange,
  },
  {
    name: 'COLLECTORs',
    image: Collector,
  },
  {
    name: 'SOURNOVA',
    image: Sournova,
  },
  {
    name: 'PESO PLUMA',
    image: Peso,
  },
  {
    name: 'FUTURE FREEZE',
    image: FutureFreeze
  },
  {
    name: 'ICE POP',
    image: IcePop,
  },
];

const Product = () => {
  return (
     <section id='drinks' className="hydration-section">
      <h1 className="hydration-title">HYDRATION</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <button className="learn-more">LEARN MORE</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product