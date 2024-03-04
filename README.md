# Project Manager App

This project is a simple project management application built using React. It allows users to create projects, add tasks to those projects, and manage them effectively.

## Features
- **Project Creation:** Users can create new projects with a title, description, and due date.
- **Task Management:** Within each project, users can add tasks, mark them as completed, or delete them.
- **Project Selection:** Users can select a project from the sidebar to view and manage its details.
- **Responsive Design:** The application is designed to be responsive and can adapt to various screen sizes.

## How to Use
1. Start by selecting a project from the sidebar or create a new project.
2. To create a new project, click on the "Add Project" button on the sidebar, then enter the project details such as title, description, and due date.
3. Once a project is selected or created, you can view its details, add tasks, mark tasks as completed, or delete tasks.
4. To add a task, simply type the task in the input field and click "Add Task".
5. To mark a task as completed, click on the task. To delete a task, click on the "Clear" button next to the task.
6. You can also delete the entire project by clicking the "Delete" button at the top of the project details section.

## File Structure
- **App.jsx:** Main component managing the application's state and rendering different components based on user actions.
- **DefaultPage.jsx:** Component displayed when no project is selected, allowing users to create a new project.
- **NewProject.jsx:** Component for creating a new project, where users can input project details.
- **ProjectPage.jsx:** Component displaying the details of a selected project, including tasks and options to add, mark, or delete tasks.
- **Sidebar.jsx:** Component displaying a list of existing projects and providing options to create, select, or delete projects.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your web browser and go to  the provided localhost address to use the App.
