import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const inputRef = useRef();

  const countVowels = e => {
    e.preventDefault();
    let total = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const currentRef = inputRef.current.value.toLowerCase();

    for (let word of currentRef) {
      if (vowels.includes(word)) {
        total++;
      }
    }

    setTotal(total);
  };

  return (
    <div className="app">
      <div className="app_container">
        <h1>Vowel Counter</h1>
        <form onSubmit={countVowels} className="app_form">
          <input type="text" ref={inputRef} />
          <button>Count</button>
        </form>
        {total > 0 ? (
          <div className="app_result">{`"${inputRef.current.value}" has ${total} vowels`}</div>
        ) : (
          <div className="app_result">No input inserted yet!</div>
        )}
      </div>
    </div>
  );
}

export default App;
