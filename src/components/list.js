import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectStatus,
  selectAllList,
  fetchList,
  addItem,
  removeItem,
} from '../reducers/listSlice';

import  '../styles/list.css'

const List = () => {
    const list = useSelector(selectAllList)
    const listStatus = useSelector(selectStatus)
    const [inputValue,setInputValue]=useState("");
    const dispatch = useDispatch()
    useEffect(() => {
      if (listStatus === 'idle') {
        dispatch(fetchList())
      }
    }, [listStatus, dispatch])
  const removeFromList = index => {
    dispatch(removeItem(index))
  }
  const handleSave = name => {
    if(name){
      setInputValue("");
      dispatch(addItem(name))
    }
  }
    return(
    <div className="ex_class_list card">
      <p  className="ex_class_title" >List</p>
      <input type="text"  className="ex_class_listTextbox" onChange={(e)=>{setInputValue(e.target.value)}} placeholder="" value={inputValue} />
      <input type="button" className="ex_class_button ex_class_listAddbutton" value="Add" onClick={()=>{handleSave(inputValue)}} />
      <ul>
        {
          listStatus==='loading'?'loading...':
          list.map((list,index)=>{
            return(<li key={index} className="ex_class_listValue">{list.title}<a href="#" className="ex_class_floatRight" onClick={()=>removeFromList(index)}>x</a></li>)
          })
        }
      </ul>
    </div>
    )
}
export default List;