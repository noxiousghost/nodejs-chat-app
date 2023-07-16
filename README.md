# Chat App

Welcome to the Chat App! This is a real-time chat application built with Node.js, Express.js, React.js, and Chat Engine API. It allows users to communicate with each other in real-time, creating chat rooms and engaging in conversations. This README file will guide you through setting up and using the project effectively.


## Setup

To set up the Chat App on your local machine, follow the steps below:

### Prerequisites

- Node.js (version 12 or above) installed on your machine.
- Chat Engine API credentials (You can obtain them by signing up at [Chat Engine](https://chatengine.io/))

### Installation

1. Clone the repository to your local machine using the following command:

```shell
git clone https://github.com/noxiousghost/nodejs-chat-app.git
```

2. Navigate to the project directory:

```shell
cd nodejs-chat-app
```

3. Install the required dependencies in both frontend and backend direcotry seperately by running the following command:

```shell
cd Frontend
npm install
```

```shell
cd Backend
npm install
```

4. Modify the following files to enter you ChatEngine project ID and private key: 
    i. Frontend/src/ChatsPage.jsx
    ii. Backend/index.js

## Usage

Once you have completed the setup process, you can start using the Chat App by following these steps:

1. Start the Backend:

```shell
npm start --host
```

2. Start the Frontend:

```shell
npm run dev -- --host
```

3. Open your web browser and visit `http://localhost:5173` to access the Chat App.

4. Enter any username desired and click on continue.

5. Create or join a chat room to start chatting with other users in your local network.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

Before contributing, please make sure to familiarize yourself with the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this project for your own purposes.