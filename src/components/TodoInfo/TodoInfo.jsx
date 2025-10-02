import './TodoInfo.scss';
import todos from '../../api/todos.json';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <article
    className={
      todo.completed === true ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
    }
  >
    <h2 className="TodoInfo__title">{todos.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
