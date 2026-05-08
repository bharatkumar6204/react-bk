import Card from "./components/Card"

function App() {
  return (
    <div className="parent">
      <Card user='Bharat' age={25} img='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Gunja' age={23} img='https://plus.unsplash.com/premium_photo-1776104180199-2cead081b8a5?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Kajal' age={19} img='https://images.unsplash.com/photo-1652454107898-eb0050b17f29?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Kanchan' age='21' img='https://images.unsplash.com/photo-1761850956738-1326d6c0c07d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      
    </div>
  )
}

export default App