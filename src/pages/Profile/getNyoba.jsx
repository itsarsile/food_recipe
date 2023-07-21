import axios from 'axios';
import React, {useEffect, useState} from 'react';

const GetNyoba = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://food-recipe-be.onrender.com/recipes')
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(process.env.REACT_APP_API_BACKEND);
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">userid</th>
            <th scope="col">photo</th>
            <th scope="col">title</th>
            <th scope="col">details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.userid}</td>
              <img src={item.photo} className="p-2 rounded" crossOrigin="anonymous" style={{height: 180, width: 220, objectFit: 'cover'}} alt="product-img" /> <td>{item.title}</td>
              <td>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetNyoba;
