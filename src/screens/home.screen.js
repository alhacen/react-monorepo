import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectAllUsers, fetchPosts } from '../../reducers/usersSlice'
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
