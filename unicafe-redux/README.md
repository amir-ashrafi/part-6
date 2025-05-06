# Unicafe Redux

A simplified version of the Unicafe feedback app, built using Redux for state management. This project is part of the Fullstack Open 2024 course, covering exercises 6.1 and 6.2.

## Overview

The application allows users to give feedback in three categories:
- `Good`
- `Ok`
- `Bad`

Each feedback updates a centralized Redux store. The store keeps track of the number of each type of feedback, and the UI reflects these counts.

## Store State Structure

The Redux store holds the following state:

```js
{
  good: 0,
  ok: 0,
  bad: 0
}
