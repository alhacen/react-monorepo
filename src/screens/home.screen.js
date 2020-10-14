import React from 'react';
import Ajax from '../components/list';
import Counter from '../components/counter';
export default function HomeSceen() {
  return (
    <div className="p25">
      <Ajax />
      <Counter />
    </div>
  );
}
