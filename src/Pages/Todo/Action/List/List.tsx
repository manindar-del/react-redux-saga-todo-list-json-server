import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../../../../Store/config';
import { ITask } from '../../../Interface/interface'
import { todoSliceAction } from '../ruducer/TodoSlice';
import queryString from 'query-string';
import { useAppSelector } from '../../../../Store/hooks';

export default function List() {
  const list = useAppSelector(state => state.todo.list);
  const location  = useLocation();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  
  useEffect(() => {

    const q: { page?: string } = queryString.parse(location.search);
    if (q.page) {
      setPage(+q.page);
      dispatch(todoSliceAction.getToDo({ _page: +q.page, _limit: 10 }));
      
    } else {
      dispatch(todoSliceAction.getToDo({  _limit: 10 }));
    }
    
  }, [location.search]);
  

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">List</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            list.map((elem) => (
              <tr>
                <th scope="row">{elem.id}</th>
                <td key={elem.id}>{elem.title}</td>
                <td><Link to={`/Form/${elem.id}`}><button>Edit</button></Link></td>
                <td><button onClick={() => dispatch(todoSliceAction.deleteTodo(elem.id))}>Delete</button></td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  )
}



