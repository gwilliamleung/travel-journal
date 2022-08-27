import Header from "./Components/Header"
import Card from "./Components/Card"
import './styles.css';
import data from "./data"

function App() {
  const cards = data.map(item =>{
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  
  return (
    <div>
      <Header />
      <div className="cards-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
