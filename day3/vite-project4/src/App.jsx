
import Bottom from "./components/Bottom"
import Nav from "./components/Nav"
import ProductList,{Content1,Content2} from "./components/ProductList";

function App() {

  return (
    <>
    <div>
      <Nav />
      <Bottom />
      <Content1 />
      <ProductList />
      <Content2 />
    </div>
    </>
  )
}

export default App
