```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to the home page with a query parameter using the correct syntax
    router.push({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}
```
```javascript
//pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const name = router.query.name;
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {name && <p>Welcome, {name}!</p>}
    </div>
  );
}
```