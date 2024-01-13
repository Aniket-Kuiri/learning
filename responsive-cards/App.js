
import './App.css';

function App() {
  const cards = [
    {
      title: 'Card-1',
      text: 'sample data of card 1'
    },
    {
      title: 'Card-2',
      text: 'sample data of card 2'
    },
    {
      title: 'Card-3',
      text: 'sample data of card 3'
    },
    {
      title: 'Card-4',
      text: 'sample data of card 4'
    },
    {
      title: 'Card-5',
      text: 'sample data of card 5'
    }
  ]
  return (
    <div>
      <h1>Responsive Cards</h1>
      <section>
        <div className='container'>
          <div className='cards'>
            {cards.map((card, i) => (
              <div key={i} className='card'>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="btn">Explore</button>
              </div>  
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
