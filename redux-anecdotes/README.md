# Redux Anecdotes

This is a Redux-powered version of the Anecdotes voting application. It's built as part of the [Fullstack Open](https://fullstackopen.com) course and gradually evolves through exercises 6.3 to 6.19.

The application allows users to:
- View a list of anecdotes
- Vote for their favorite ones
- Add new anecdotes
- Filter anecdotes by keyword
- Receive notifications on actions
- Sync data with a backend using Redux Thunk

## 🔧 Technologies Used

- React
- Redux Toolkit
- Redux Thunk
- json-server (for backend)
- JavaScript (ES6+)

---

## 🚀 Getting Started

### 1. Clone and Setup

```bash
git clone https://github.com/fullstack-hy2020/redux-anecdotes
cd redux-anecdotes
rm -rf .git   # If cloned inside another git repo
npm install
```

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