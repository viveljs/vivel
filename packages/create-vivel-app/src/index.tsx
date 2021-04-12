import * as React from 'react'

const { useState, useEffect } = React

const Counter: React.FC<{
  count: number
}> = ({ count }) => (
  <div>
    <p
      key={count}
    >
      {count}
    </p>
  </div>
)


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 99) return setCount(0)

      setCount(count + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, setCount])

  return <Counter count={count} />
}

export default App