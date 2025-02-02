# 🎵 Music Player Web App

## 📌 Overview
This is a **music player web app** built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to browse music, create playlists, and play their favorite songs. It integrates with the **Spotify API** for fetching music data and uses **Redux** for state management. The app is hosted on **Render**.

## 🛠️ Technologies Used
- **MongoDB** – For database management
- **Express** – For backend server and API
- **React.js** – For building the user interface
- **Node.js** – For backend logic
- **Redux** – For state management
- **Tailwind CSS** – For styling
- **Spotify API** – For fetching music data
- **Render** – For hosting the app online

## 🎯 Features
✅ **User authentication** – Sign up, log in, and manage user sessions  
✅ **Music library management** – Add and remove music from personal library  
✅ **Playlist creation** – Create and organize custom playlists  
✅ **Music playback** – Stream songs directly from the app  
✅ **Real-time updates** – Add songs to playlists or library and view changes instantly  
✅ **Responsive design** – Optimized for both desktop and mobile use  

## 📂 Project Structure
```
/music-player-web-app
│── frontend/            # Frontend React app
│   ├── components/      # Reusable React components
│   ├── App.js           # Main React component
│   ├── index.js         # Entry point
│   ├── redux/           # Redux state management
│   ├── services/        # API calls and interactions
│── backend/             # Backend server code (Node.js)
│   ├── controllers/     # API controllers
│   ├── routes/          # API routes
│   ├── models/          # MongoDB models
│── package.json         # Dependencies & scripts for both frontend and backend
│── .env                 # API keys and environment variables
│── README.md            # Project documentation
```

## 🚀 How to Use
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/music-player-web-app.git
   ```  
2. **Navigate to the project folder**  
   ```bash
   cd music-player-web-app
   ```  
3. **Install dependencies for both frontend and backend**  
   - For frontend:  
   ```bash
   cd frontend
   npm install
   ```  
   - For backend:  
   ```bash
   cd backend
   npm install
   ```  
4. **Set up the backend**  
   - Create a `.env` file in the backend folder and add your Spotify API key and MongoDB connection string:  
   ```
   REACT_APP_SPOTIFY_API_KEY=your_spotify_api_key_here
   MONGODB_URI=your_mongo_db_connection_string_here
   ```  
5. **Run the app**  
   - Start the backend server:  
   ```bash
   cd backend
   npm start
   ```  
   - Start the React frontend:  
   ```bash
   cd frontend
   npm start
   ```  
6. Open `http://localhost:3000/` in your browser.  

## 📸 Screenshots
![Music Stream](https://github.com/user-attachments/assets/c7730bab-e05b-4045-9b93-ce287ed45991)


## 🔗 Live Demo
[Live Preview](https://music-app-e9rm.onrender.com/)

## 📌 Future Enhancements
- Add **music search** functionality for easy song discovery  
- Implement **dark mode** support  
- Add **social features** such as sharing playlists with friends  
- Integrate **advanced audio controls** like shuffle, repeat, etc.  
- Support **song recommendations** based on user listening history  

## 📝 License
This project is **free to use** and open-source.
