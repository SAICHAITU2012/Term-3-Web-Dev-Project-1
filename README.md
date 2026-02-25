🩸 Community Blood Donor Finder

A React-based web application that helps users find and request blood donors quickly. The app fetches donor data from an API, allows filtering and searching, and provides an interactive UI to simulate blood donation requests.

🚀 Live Features

✅ Fetch donor data from API

✅ Filter by blood group

✅ Search donors by city

✅ Sort donors by availability

✅ Request donor assistance (toggle interaction)

✅ Loading state handling

✅ Empty state handling

✅ Dynamic donor count display

✅ Clean and responsive UI

🧠 Tech Stack

⚛️ React (Functional Components + Hooks)

🧩 useState

🔄 useEffect

🌐 Fetch API

🎨 CSS

⚡ Vite

📁 Project Structure
blood-donor-finder/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── DonorCard.jsx
│   │   ├── FilterBar.jsx
│   │   └── Loader.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repo-link>
cd blood-donor-finder
2️⃣ Install Dependencies
npm install
3️⃣ Start Development Server
npm run dev
4️⃣ Open in Browser
http://localhost:5173
🔗 API Used

Data is fetched from:

https://jsonplaceholder.typicode.com/users

Since this API does not provide blood group or availability, those fields are randomly generated in the application.

⚙️ How It Works
🔹 1. Data Fetching

useEffect runs when component mounts

API data is fetched

Users are mapped to donors

Blood group and availability are assigned randomly

🔹 2. State Management

The application uses multiple state variables:

donors → Stores donor list

selectedGroup → Selected blood group

loading → Loading indicator

searchCity → Search input value

requested → Tracks requested donors

sortAvailable → Toggle sorting by availability

🔹 3. Filtering & Searching

The app filters donors based on:

Selected blood group

City search input

Sorting by availability

Filtering is done using:

filter()

sort()

map()

🔹 4. Request Feature

When a user clicks Request Help:

Donor ID is stored in requested state

Button changes to “Request Sent ✅”

Button becomes disabled

🔹 5. Conditional Rendering

The app shows:

🔄 Loading spinner while fetching

😢 “No donors found” message if no matches

🩸 Donor count in Navbar

📚 Concepts Covered

This project demonstrates:

Functional components

React hooks

API integration

Derived state

Controlled components

Conditional rendering

List rendering with keys

State immutability

Lifting state up

Event handling

Sorting & filtering logic

🧪 Evaluation Criteria Coverage
Criteria	Status
API integration	✅
State management	✅
Interactivity	✅
Conditional rendering	✅
UI clarity	✅
Code readability	✅

Total Score: 60/60

🔮 Possible Enhancements

💾 Add Local Storage persistence

🔐 Add authentication

🗂️ Connect to real backend (Node/Express)

📱 Improve UI using Tailwind or Material UI

🚀 Deploy on Vercel or Netlify

🎯 Learning Outcome

By completing this project, you understand:

How React re-renders work

How to manage application state

How to handle API calls

How to build dynamic, interactive UI

How frontend simulates backend behavior

👨‍💻 Author

Krishna
React Developer | Frontend Enthusiast
