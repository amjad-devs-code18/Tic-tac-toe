# 🎮 Amjad's Tic Tac Toe

A modern and responsive Tic Tac Toe mobile application built using **React Native & Expo**.  
This app allows two players to play the classic game with automatic winner and draw detection.

---

## 📱 App Preview

### 🟢 Game Screen
![Game Screen](assets/build.jpeg)


![Game Screen](assets/game.png)

### 🏗️ Android Production Build (AAB Generated)
!![Build Screenshot](assets/android-play-store.jpeg)

### 📊 EAS Build Logs
![Build Logs](assets/play-game.jpeg)

---

## 🚀 Features

- ✅ 3x3 Interactive Game Board
- ✅ Two Player Mode (X vs O)
- ✅ Automatic Winner Detection
- ✅ Draw Detection
- ✅ Reset Game Button
- ✅ Responsive Layout
- ✅ Production AAB Build using EAS

---

## 🛠 Tech Stack

- React Native
- Expo
- EAS Build
- JavaScript (React Hooks)

---

## 🧠 Game Logic

- The board is stored as an array of 9 elements.
- Players alternate turns between X and O.
- All winning combinations are checked:
  - Rows
  - Columns
  - Diagonals
- If no winner and board is full → Game ends in Draw.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/amjad-tic-tac-toe.git
cd amjad-tic-tac-toe


2️⃣ Install Dependencies
npm install


3️⃣ Run the App
npx expo start


📦 Build for Android (Production AAB)
eas build -p android --profile production


Download the generated .aab file and upload it to Google Play Console.


📂 Project Structure
Amjad-Tic-Tac-Toe/
│
├── App.js
├── package.json
├── eas.json
├── assets/
│   ├── game.png
│   ├── build.png
│   └── logs.png
└── README.md

🔮 Future Improvements

🤖 Add AI Single Player Mode

🌐 Online Multiplayer Mode

🏆 Score Tracking

🎵 Sound Effects

🎨 Improved UI Animations

👨‍💻 Author

Amjad Khan
React Native Developer

⭐ If you like this project, give it a star on GitHub!


---

# 📸 IMPORTANT

Now create folder:



assets/


And put:
- `game.png`
- `build.png`
- `logs.png`

Then run:

```bash
git add .
git commit -m "Added professional README"
git push
