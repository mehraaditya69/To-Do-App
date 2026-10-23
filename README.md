# To-Do App

A simple, lightweight to-do list built with plain HTML, CSS, and JavaScript. No frameworks or build tools needed, just open it in a browser and start adding tasks.

## Features

- Add new tasks using the input box and the **Add Task** button
- Mark tasks as done with a checkbox
- Delete tasks with the **Delete** button
- Empty or whitespace-only tasks are ignored
- Long task text wraps neatly, and the list scrolls when it gets long

## Tech Stack

- **HTML5** for the page structure
- **CSS3** for styling and layout (Flexbox and Grid)
- **JavaScript (vanilla)** for adding, completing, and deleting tasks

## Project Structure

```
To-Do-App/
├── index.html   # Page markup
├── style.css    # Styles and layout
├── script.js    # App logic
└── README.md    # Project documentation
```

## Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mehraaditya69/To-Do-App.git
   ```
2. Go into the project folder:
   ```bash
   cd To-Do-App
   ```
3. Open `index.html` in your web browser (double-click it, or use an extension like VS Code's Live Server).

## How to Use

1. Type a task into the input field.
2. Click **Add Task** to add it to the list.
3. Tick the checkbox next to a task to mark it as done.
4. Click **Delete** to remove a task.

## Known Limitations

- Tasks are not saved, so refreshing the page clears the list.
- Pressing Enter does not add a task; you need to click the button.

## Future Improvements

- Save tasks with `localStorage` so they persist after refresh
- Add tasks with the Enter key
- Strike-through styling for completed tasks
- Edit existing tasks
- Filter tasks (all, active, completed)

## Author

Made by [mehraaditya69](https://github.com/mehraaditya69)
