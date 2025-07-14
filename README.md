# Advice Generator App

<img width="1918" height="910" alt="Screenshot 2025-07-14 181643" src="https://github.com/user-attachments/assets/24988be4-52be-4dd5-a64c-09e3def73b7d" />


A simple application built with React that generates random advice slips by fetching data from the Advice Slip API. This project is a great example of how to handle asynchronous API requests, manage state, and deal with side effects in a modern React application using hooks.

## ✨ Features

-   **Generate New Advice**: Click the dice button to fetch a new piece of advice.
-   **Loading State**: Displays a loading message while fetching data, improving user experience.
-   **Disabled Button**: The button is temporarily disabled during an API call to prevent multiple simultaneous requests.

## 🚀 Technologies Used

-   **React.js**: A JavaScript library for building user interfaces.
-   **React Hooks**:
    -   `useState`: For managing component state (advice data, loading status).
    -   `useEffect`: For handling side effects, like fetching initial data.
    -   `useCallback`: For memoizing functions and optimizing performance.
-   **Advice Slip API**: A free, simple API for generating random advice.
-   **HTML5 & CSS3**: For structure and styling.
-   **Fetch API**: For making network requests to the API.

## ⚙️ How to Run This Project

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Nini1912/Random_Advice_Generator.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Random_Advice_Generator
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the application:**
    ```sh
    npm run dev
    ```
    The app will open in your default browser at `http://localhost:5173`.

## 🙏 Credits & API

This project was created as a fun exercise and wouldn't be possible without the free [**Advice Slip API**](https://api.adviceslip.com/).
#
