import React, { Suspense } from 'react';

const LazyGreeting = React.lazy(() => import('./Greeting'));

const AppSplit: React.FC = () => {
  console.log('loading greet')
  const [showGreeting, setShowGreeting] = React.useState(false);

  const loadGreeting = () => {
    setShowGreeting(true);
  };

  return (
    <div>
      <h1>Hello from the greeting app!</h1>
      <button onClick={loadGreeting}>Load Greeting</button>
      {showGreeting && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyGreeting />
        </Suspense>
      )}
    </div>
  );
};

export default AppSplit;

