### React Query Section
- `6.20` – Fetch anecdotes with React Query (with error handling)
- `6.21` – Add new anecdote using React Query
- `6.22` – Voting using React Query
- `6.23` – Notification system using `useReducer` and Context API
- `6.24` – Error handling on too-short anecdotes


## 2. Run the Application

```md
npm run dev
npx json-server --port 3001 --watch db.json
Make sure db.json is in the root folder with initial data like:
```
```
{
  "anecdotes": [
    { "content": "If it hurts, do it more often", "id": "1", "votes": 0 },
    { "content": "Adding manpower to a late software project makes it later!", "id": "2", "votes": 0 }
  ]
}
```