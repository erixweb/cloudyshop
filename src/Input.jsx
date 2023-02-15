import { useEffect, useState } from "react"
import Result from "./Result"

function Input() {
  const [input, setInput] = useState("")
  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (category === "") {
      if (input === "") {
        fetch(`https://dummyjson.com/products/`)
          .then(res => res.json())
          .then((data) => {
            setProducts(
              data
            )
          })
      }
    } else {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then((data) => {
          setProducts(
            data
          )
        })
    }
  }, [category])
  const changeCategory = (e) => {
    setCategory(e.target.value)
  }
  const onChangeSearch = (e) => {
    setInput(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then(res => res.json())
      .then((data) => {
        setProducts(
          data
        )
      })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Explora nuevos limites</h1>
        <div className="options">
          <input type="text" onChange={onChangeSearch} value={input} />
          <select onClick={changeCategory}>
            <option value="">Explorar</option>
            <option value="smartphones">Móbiles</option>
            <option value="laptops">Portátiles</option>
          </select>
        </div>
      </form>
      {typeof products.products === "object" ?
        <Result property={products} />
        : <h1>404....</h1>
      }
    </>
  );
}

export default Input;
