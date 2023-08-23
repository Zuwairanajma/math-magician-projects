import LoremIpsum from 'react-lorem-ipsum';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <h2 style={{ margin: '60px 140px' }}>Welcome to our page!</h2>
      <div className="text-wrapper">
        <LoremIpsum avgSentencesPerParagraph={10} random={false} p={2} />
      </div>
    </div>
  );
}

export default Home;
