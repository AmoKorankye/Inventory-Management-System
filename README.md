# Inventory Manager

This project is an Inventory Tracker web application built using React, Next.js, Firebase, and Material-UI. The application allows users to manage an inventory of items, including adding, removing, and searching for items.

## Features

- **Add Items**: Add new items to the inventory.
- **Remove Items**: Remove items from the inventory.
- **Search Items**: Search for items in the inventory.
- **Real-time Updates**: Inventory updates in real-time using Firebase Firestore.
- **User-friendly UI**: Built with Material-UI for a modern and responsive user interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
  - **Firestore**: A flexible, scalable database for mobile, web, and server development.
- **Material-UI**: A popular React UI framework.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmoKorankye/Inventory-Management-System.git
   cd inventory-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a Firestore database to your project.
   - Copy your Firebase configuration and replace the placeholder in the [`firebase.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FHP%2FDesktop%2Fdev%2Fheadstarter%20AI%20projects%2Finventory-management-system%2Ffirebase.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\HP\Desktop\dev\headstarter AI projects\inventory-management-system\firebase.js") file.

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- **Add New Item**: Click the "Add New Item" button, enter the item name, and click "Add".
- **Remove Item**: Click the "Remove" button next to the item you want to remove.
- **Search Items**: Use the search bar to filter items by name.

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Contains reusable React components.
- [`firebase.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FHP%2FDesktop%2Fdev%2Fheadstarter%20AI%20projects%2Finventory-management-system%2Ffirebase.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\HP\Desktop\dev\headstarter AI projects\inventory-management-system\firebase.js"): Firebase configuration and initialization.
