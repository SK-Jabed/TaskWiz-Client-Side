# TaskWiz Client

## 📌 Project Overview
The **TaskWiz Client** is the frontend of a modern task management application. It provides an interactive **drag-and-drop** interface to manage tasks in three categories: **To-Do, In Progress, and Done**. Built with **React, Vite.js, and TailwindCSS**, it ensures a smooth and efficient user experience.

## 🎯 Purpose
The primary goals of the **TaskWiz Client**:
- Provide an **intuitive UI** for task management.
- Enable **real-time task updates** with instant synchronization.
- Offer a **responsive** and **accessible** interface for both desktop and mobile users.
- Implement **Firebase Authentication** for secure access.

## 🚀 Live Site
> 🔗 **Live Demo:** [TaskWiz Live Site](https://taskwiz-01.web.app/)

---

## 🔑 Key Functionalities
- **User Authentication**
  - Google Sign-In via Firebase.
  - Store user details (name, email) upon first login.

- **Task Management**
  - Add, edit, and delete tasks.
  - Drag and drop tasks between **To-Do, In Progress, and Done**.
  - Reorder tasks within the same category.
  - Instantly save task updates to the database.

- **Real-Time Sync**
  - Updates persist even after refreshing the page.
  - Tasks maintain their last known order.
  
- **Responsive & Modern UI**
  - Optimized for **desktop and mobile**.
  - Uses **TailwindCSS & DaisyUI** for a sleek design.

---

## ✨ Additional Features
✔ **Optimistic UI Updates** – Task state updates instantly before backend confirmation.  
✔ **Dark Mode Support** – User-friendly interface with light/dark mode toggle.  
✔ **Toast Notifications** – Real-time feedback using `react-hot-toast`.  
✔ **Task Due Dates** – Display task deadlines using `moment.js`.  
✔ **Smooth Animations** – Draggable effects powered by `@dnd-kit`.  

---

## 🛠️ Technologies Used
| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Vite.js** | Fast development server |
| **Firebase** | Authentication |
| **React Router** | Client-side navigation |
| **TailwindCSS + DaisyUI** | UI styling |
| **@dnd-kit** | Drag-and-drop functionality |
| **Axios** | API calls |
| **React Query** | Data fetching & caching |
| **SweetAlert2** | Stylish pop-up alerts |
| **React Hook Form** | Form validation |
| **Moment.js** | Date/time formatting |

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/taskwiz-client.git
cd taskwiz-client
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_API_BASE_URL=https://your-api-url.com
```

### 4️⃣ Run the Application
```sh
npm run dev
```
The frontend should now be running on **http://localhost:5173**.

---

## 📦 Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| **react** | ^19.0.0 | UI framework |
| **vite** | ^6.1.0 | Development build tool |
| **firebase** | ^11.3.1 | Authentication |
| **react-router-dom** | ^7.2.0 | Routing |
| **axios** | ^1.7.9 | HTTP requests |
| **@tanstack/react-query** | ^5.66.9 | Data fetching |
| **tailwindcss** | ^4.0.7 | Styling |
| **daisyui** | ^5.0.0-beta.8 | UI components |
| **@dnd-kit/core** | ^6.3.1 | Drag-and-drop |
| **react-hot-toast** | ^2.5.2 | Notifications |

---

## 🎨 Design Philosophy
✔ **Minimalist & Clean UI** – Limited color palette (max 4 colors).  
✔ **User-Centered** – Simple interactions, no unnecessary distractions.  
✔ **Performance-Oriented** – Optimized React rendering with React Query caching.  
✔ **Accessibility First** – Ensures keyboard and screen-reader compatibility.  

---

## 🔮 Future Enhancements
- ✅ **WebSocket Integration** for real-time task updates.
- ✅ **Task Prioritization** (High, Medium, Low).
- ✅ **Task Deadlines & Reminders**.
- ✅ **Offline Mode** using LocalForage.
- ✅ **Theme Customization** (User-defined color schemes).

---

## 🤝 Contributing
We welcome contributions! To contribute:
1. Fork the repo.
2. Create a new branch (`feature-branch`).
3. Commit your changes (`git commit -m "Added feature X"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

---

## ❓ FAQ

### 1️⃣ How do I deploy this application?
You can deploy it using **Vercel** or **Netlify**:
```sh
npm run build
```
Then upload the `dist` folder to your hosting provider.

### 2️⃣ What happens if the API is down?
The app uses **React Query** for caching. If the API fails, the last fetched tasks will still be displayed.

### 3️⃣ Can I use a different authentication method?
Currently, **Google Sign-In via Firebase** is supported. However, additional auth methods (e.g., email/password) can be added.

---

## 📝 License
This project is licensed under the **ISC License**.

---

## 👨‍💻 Author
- **Sheikh Jabed** 🚀  
  [GitHub](https://github.com/SK-Jabed) | [LinkedIn](https://linkedin.com/in/your-profile)

---