import Footer from "./Footer"
import Button from "./Button"
import Card from "./Card"
import Product from "./Product"
import ProfileCard from "./ProfileCard"

function App() {
  return (
    <>
      <h1>React Practice Tasks</h1>

      <Button text="Click Me" />
      <Button text="Submit" />

      <Card>
        <h2>Welcome</h2>
        <p>This is a reusable Card component</p>
      </Card>

      <Product name="Laptop" price={55000} />
      <Product name="Mobile" price={20000} />

      <ProfileCard />
      <ProfileCard />

      <Footer year={2026} />
    </>
  )
}

export default App