import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Nav/Nav';
import {useraction} from '../../store/store.js'

const Result = () => {
  const currentscore = useSelector(state => state.user.currentscore);
  const maxscore = useSelector(state => state.user.maxScore);
  console.log(currentscore, maxscore);
  const dispatch = useDispatch();
  if (currentscore > maxscore) {
    dispatch(useraction.setscore(currentscore));
  }
  return (
    <>
      <Nav />
      <div>{currentscore}</div>
    </>
  )
}

export default Result