# Task Tracker Instructions

## Overview

Task Tracker is a simple, user-friendly web application for managing your daily tasks. It allows you to create, edit, delete, and track the status of your tasks, with all data stored locally in your browser.

## Features

- ✅ Create new tasks with title and description
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Change task status (To Do → In Progress → Done)
- ✅ Automatic data persistence (tasks saved in browser)
- ✅ Clean, modern user interface

## Installation and Setup

### Requirements

- **Node.js**: Version 20.17.0 or higher
- **npm**: Version 10.9.2 or higher (comes with Node.js)

### Installation Steps

1. **Clone or download the project**
   ```bash
   git clone git@github.com:ArtyomZayarny/task-tracker-app.git
   cd task-tracker-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The Task Tracker application will load

### Production Build

To create a production build:

```bash
npm run build
npm start
```

## How to Use

### Viewing Tasks

- The main page displays all your tasks in a list
- Each task shows:
  - **Title**: The task name
  - **Description**: Additional details (if provided)
  - **Status Badge**: Visual indicator (To Do / In Progress / Done)
- If you have no tasks, you'll see a message: "No tasks yet. Add a task to get started!"

### Adding a New Task

1. Find the **"Add New Task"** card at the top of the page
2. Enter a **title** in the "Task title" field (required)
3. Optionally enter a **description** in the "Task description" field
4. Click the **"Add Task"** button
5. Your new task will appear in the list with "To Do" status

**Note**: The title field is required. If you try to submit without a title, you'll see an error message.

### Editing a Task

1. Find the task you want to edit in the list
2. Click the **"Edit"** button on that task
3. The task will switch to edit mode
4. Modify the title and/or description
5. Click **"Update Task"** to save changes, or **"Cancel"** to discard

### Deleting a Task

1. Find the task you want to delete
2. Click the **"Delete"** button (red button) on that task
3. The task will be immediately removed from the list

**Warning**: This action cannot be undone. The task will be permanently deleted.

### Changing Task Status

1. Find the task whose status you want to change
2. Use the **status dropdown** on the right side of the task card
3. Select one of the options:
   - **To Do**: Task is not started
   - **In Progress**: Task is currently being worked on
   - **Done**: Task is completed
4. The status badge will update immediately to reflect the new status

## Data Storage

### How Data is Stored

- All tasks are stored in your browser's **localStorage**
- Storage key: `orbios-tasks`
- Data persists across:
  - Page refreshes
  - Browser sessions
  - Browser restarts

### Data Limitations

- **Browser-specific**: Tasks are stored per browser/device
- **No cloud sync**: Tasks don't sync across devices
- **Clearing browser data**: If you clear browser data, all tasks will be lost

### Exporting/Backing Up Data

To backup your tasks:

1. Open browser Developer Tools (F12 or Right-click → Inspect)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Navigate to **Local Storage** → `http://localhost:3000`
4. Find the `orbios-tasks` key
5. Copy the JSON value
6. Save it to a text file

To restore tasks:

1. Follow steps 1-3 above
2. Paste your saved JSON value
3. Refresh the page

## FAQ

### Q: Where are my tasks stored?

A: Tasks are stored in your browser's localStorage. They persist across page refreshes but are specific to the browser and device you're using.

### Q: Can I use this on multiple devices?

A: Currently, tasks are stored locally in each browser. To sync across devices, you would need to manually export and import the data, or the application would need to be enhanced with cloud storage.

### Q: What happens if I clear my browser data?

A: Clearing browser data (including localStorage) will delete all your tasks. Make sure to export your data if you need to clear your browser.

### Q: How do I reset all tasks?

A: You can delete all tasks manually, or clear the localStorage:
1. Open Developer Tools (F12)
2. Go to Application → Local Storage
3. Delete the `orbios-tasks` key
4. Refresh the page

### Q: Can I add due dates or priorities?

A: The current version doesn't support due dates or priorities. This is a simple task tracker focused on basic CRUD operations. Future versions could include these features.

### Q: Why doesn't the app work after I refresh?

A: If tasks disappear after refresh, check:
1. Browser localStorage is enabled
2. You're not in private/incognito mode (which may restrict localStorage)
3. Browser storage isn't full

### Q: Can I filter or search tasks?

A: The current version doesn't include filtering or search. You can scroll through your task list to find what you need.

## Troubleshooting

### Problem: Tasks not saving

**Solution:**
- Check if localStorage is enabled in your browser
- Ensure you're not in private browsing mode
- Check browser console for errors (F12 → Console)

### Problem: Page not loading

**Solution:**
- Verify Node.js and npm are installed correctly
- Run `npm install` to ensure all dependencies are installed
- Check that port 3000 is not in use by another application
- Try `npm run dev` again

### Problem: Build errors

**Solution:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version: `node --version` (should be 20.17.0+)

### Problem: Styles not loading

**Solution:**
- Ensure Tailwind CSS is properly configured
- Check that `app/globals.css` includes Tailwind directives
- Rebuild the project: `npm run build`

## Browser Compatibility

Task Tracker works best in modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ Older browsers may have limited localStorage support

## Getting Help

If you encounter issues:
1. Check the Troubleshooting section above
2. Review browser console for error messages (F12)
3. Verify all installation steps were completed correctly
4. Check that you're using a supported Node.js version

## Future Enhancements

Potential features for future versions:
- Task filtering and search
- Due dates and reminders
- Task priorities
- Categories or tags
- Drag-and-drop status changes
- Data export/import (CSV, JSON)
- Cloud synchronization
- Dark mode toggle

