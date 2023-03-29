import { useState } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);

return (
<div className='App'>
<p>{count}</p>
<button
style={{ marginBottom: '20px', display: 'block' }}
onClick={() => setCount(prev => prev + 1)}
>
Add Count
</button>
<button
style={{ marginBottom: '20px', display: 'block' }}
onClick={() => setCount(prev => prev - 1)}
>
Sub Count
</button>
</div>
);
}

export default App;
