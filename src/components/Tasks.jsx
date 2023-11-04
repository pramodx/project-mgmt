import { list } from 'postcss';
import NewTask from './NewTask';

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700'></h2>
      <NewTask onAdd={onAdd} />
      {!tasks.length && (
        <p className='text-stone-800 my-4'>
          This project does not have any tasks yet
        </p>
      )}
      {!!tasks.length && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li key={task.id} className='flex  justify-between my-4'>
              <span>{task.text}</span>
              <button
                className='text-stone-700 hover:text-red-500'
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
