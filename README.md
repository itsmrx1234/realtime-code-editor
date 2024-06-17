# Real-Time Code Editor

A real-time collaborative code editor built with React, CodeMirror, Socket.io, and Tailwind CSS.

## Features

- **Real-Time Collaboration**: Multiple users can edit the code simultaneously with real-time updates.
- **Code Syntax Highlighting**: Syntax highlighting support for various programming languages using CodeMirror.
- **User Management**: Display of connected users with avatars.
- **Room Management**: Unique room IDs for collaborative sessions, with the ability to copy the room ID and leave the session.
- **Responsive Design**: User interface designed with Tailwind CSS for a clean and responsive experience.

## Technologies Used

- **React**: For building the user interface.
- **CodeMirror**: For the code editor component.
- **Socket.io**: For real-time communication between clients and server.
- **Tailwind CSS**: For styling the application.
- **React Hot Toast**: For notifications.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/real-time-code-editor.git
    cd real-time-code-editor
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

4. **Navigate to**:
    ```
    http://localhost:3000
    ```

## Usage

1. **Creating a Room**:
    - Navigate to the home page and enter your username.
    - Click on "Create Room" to create a new collaborative session.

2. **Joining a Room**:
    - Enter the room ID provided by the room creator.
    - Click "Join Room" to join the collaborative session.

3. **Collaborating**:
    - Multiple users can edit the code simultaneously.
    - User list on the sidebar displays connected users.
    - Copy the room ID to share with others.
    - Leave the room anytime by clicking the "Leave" button.

## Project Structure

```plaintext
real-time-code-editor/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Client.js
│   │   └── Editor.js
│   ├── pages/
│   │   └── EditorPage.js
│   ├── socket/
│   │   └── index.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
