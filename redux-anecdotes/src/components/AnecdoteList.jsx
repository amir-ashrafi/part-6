import { useSelector, useDispatch } from 'react-redux'
import { setNotificationWithTimeout } from '../reducers/notificationReducer' // اضافه شده
import { voteAnecdote } from '../reducers/anecdoteReducer' 
const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotificationWithTimeout(`you voted '${anecdote.content}'`, 5)) // اضافه شده
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
