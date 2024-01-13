const SectionDisplay = () => {
    const cards = [
      {
        title: 'Section-1',
        text: 'sample data of card 1'
      },
      {
        title: 'Section-2',
        text: 'sample data of card 2'
      },
      {
        title: 'Section-3',
        text: 'sample data of card 3'
      },
      {
        title: 'Section-4',
        text: 'sample data of card 4'
      },
      {
        title: 'Section-5',
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
  
  export default SectionDisplay;
  