import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../services/anecdotes'
import { useNotification } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const [notification, dispatch] = useNotification()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      
      dispatch({ type: 'SHOW', payload: `you created '${newAnecdote.content}'` })
      setTimeout(() => {
        dispatch({ type: 'HIDE' })
      }, 5000)
    },
    onError: (error) => {
      // ✅ مدیریت خطا
      dispatch({ type: 'SHOW', payload: 'too short anecdote, must have length 5 or more' })
      setTimeout(() => {
        dispatch({ type: 'HIDE' })
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
