import { useState } from 'react';



const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
);

//The export default keywords specify the main component in the file.
export default function MyApp() { 
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  } 
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <br />
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
      <br />
      <ul>{listItems}</ul>

    </div>
  );
}

function MyButton({ count, onClick }) {
  
  return (
    <button onClick={onClick}>
      Clicked {count} times
      {console.log('Button clicked', count)}
    </button>
  );
}
