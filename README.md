# **PrimeScope News - Client-Side** 📰🚀

![PrimeScope News Banner](https://github.com/SK-Jabed/PrimeScope-News-Client/blob/8f762c0c8032396a2521db9a1e2f0e2c1a0d6f6f/src/assets/Screenshot%202025-02-07%20153003.png)

## 📌 **Project Overview**  
**PrimeScope News** is a modern, feature-rich, and interactive news platform designed to provide **real-time access to the latest news, trending stories, and premium content**. The client-side of **PrimeScope News** is built with **React, Tailwind CSS, and Firebase**, ensuring an **engaging, responsive, and secure** user experience.  

This platform **empowers users** by offering seamless **news browsing, article filtering, premium subscriptions, and an admin dashboard** for content management.  

---

## 🌍 **Live Demo & Deployment**  

🔗 **Live Site:** [PrimeScope News](https://b10-assignment-12.web.app/)  
🔗 **Client Hosted on:** [Netlify](https://b10-assignment-12.web.app/)  
🔗 **Server Hosted on:** [Vercel](https://b10-assignment-12-server.vercel.app/)  

---

## 🎯 **Project Purpose & Goals**  
The **PrimeScope News** client-side application aims to:  
✅ **Deliver engaging news content** in an intuitive and accessible format.  
✅ **Provide seamless access to premium content** for subscribed users.  
✅ **Empower admins** with tools for content moderation and analytics.  
✅ **Ensure a smooth user experience** with **fast-loading** pages and a **mobile-first** design.  
✅ **Support a modern and scalable news ecosystem** with API-first architecture.  

---

## 🔑 **Admin Credentials**  
📧 **Username:** `ironman@gmail.com`  
🔑 **Password:** `123456Aa@`  

---

## ✨ **Key Features**  

### 📰 **News & Content Features**  
✔ **Trending Articles** – Displays most viewed news dynamically.  
✔ **Premium Subscription** – Access exclusive news content.  
✔ **Advanced Search & Filters** – Find articles by category, date, and popularity.  
✔ **Live News Updates** – Real-time content updates powered by Firebase.  

### 🎨 **User Experience & UI Features**  
✔ **Fully Responsive Design** – Optimized for mobile, tablet, and desktop.  
✔ **Dark Mode Support** – Toggle between light and dark mode for better accessibility.  
✔ **Engaging Animations** – Smooth UI powered by `Framer Motion` and `GSAP`.  
✔ **Pagination & Infinite Scroll** – Efficient content browsing experience.  

### 🔐 **Security & Authentication Features**  
✔ **Secure Authentication** – Firebase authentication (Email, Google login).  
✔ **Role-Based Access Control** – Admin panel with restricted access.  
✔ **JWT Protected Routes** – Secure API interactions with user authentication.  

### 🛠 **Admin Dashboard Features**  
✔ **User Management** – View, ban, or promote users.  
✔ **Article Management** – Add, update, or remove news articles.  
✔ **Data Analytics** – View charts and metrics using `react-google-charts`.  

---

## 🛠 **Technologies Used**  

| **Category**         | **Technologies**  |
|----------------------|------------------|
| **Frontend**        | React, Tailwind CSS, DaisyUI |
| **State Management**| React Context API |
| **Authentication**  | Firebase Authentication |
| **Routing**         | React Router |
| **UI Animations**   | Framer Motion, GSAP |
| **Notifications**   | React Toastify, SweetAlert2 |
| **Data Visualization** | React Google Charts |
| **Backend**         | Node.js, Express.js |
| **Database**        | MongoDB |
| **Hosting**         | Netlify (Client), Vercel (Server) |

---

## 📦 **Dependencies**  

### 🔹 **Main Dependencies**
- `react` – Core UI library.  
- `axios` – Handle API requests.  
- `firebase` – User authentication and real-time data updates.  
- `react-router-dom` – Routing and navigation.  
- `framer-motion` – Smooth animations and transitions.  
- `gsap` – Advanced UI animations.  
- `react-google-charts` – Graphs & analytics for admin panel.  
- `react-hot-toast` – Beautiful toast notifications.  
- `sweetalert2` – Modern pop-up alerts.  
- `swiper` – Interactive news carousels.  

### 🔹 **Dev Dependencies**
- `vite` – Fast development server.  
- `tailwindcss` – Utility-first CSS framework.  
- `eslint` – Code quality and linting.  

---

## 📡 **API Endpoints Reference**  

| Method | Endpoint             | Description                      |
|--------|----------------------|----------------------------------|
| **Auth Routes** |||
| POST   | `/auth/register`     | Register a new user              |
| POST   | `/auth/login`        | Authenticate user & generate token |
| GET    | `/auth/profile`      | Retrieve authenticated user profile |
| **News Routes** |||
| GET    | `/news`              | Fetch all news articles          |
| POST   | `/news`              | Create a new article (Admin)     |
| GET    | `/news/:id`          | Get details of a specific article |
| PUT    | `/news/:id`          | Update an existing news article (Admin) |
| DELETE | `/news/:id`          | Remove a news article (Admin) |
| **Subscription Routes** |||
| POST   | `/subscribe`         | Subscribe to premium content    |
| GET    | `/subscriptions`     | Fetch subscription details      |

---

## 📐 Design Philosophy
- Minimalistic yet modern.
- Mobile-first responsive design.
- Accessibility-focused with user-friendly interactions.

---

## 🔧 **Installation & Setup**  

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
✔ **Node.js** (LTS version) - [Download Here](https://nodejs.org/)  
✔ **Git** - [Download Here](https://git-scm.com/)  

---

### **2️⃣ Clone the Repository**  
```bash
git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-SK-Jabed.git
cd b10a12-client-side-SK-Jabed
```

---

### **3️⃣ Install Dependencies**  
```bash
npm install
```

---

### **4️⃣ Configure Firebase & Environment Variables**  
Create a `.env` file in the root directory and add:  

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### **5️⃣ Start the Development Server**  
```bash
npm run dev
```
The application should now be running at `http://localhost:5173/`.  

---

## 🚀 **Future Enhancements**  
🔹 **AI-Powered Content Recommendations** – Personalized news feeds.  
🔹 **Live News Updates** – Integrate live API sources for breaking news.  
🔹 **Blockchain for Secure Transactions** – Transparent premium subscriptions.  
🔹 **User Notifications** – Alerts for new content & breaking news.  
🔹 **Multi-Language Support** – Expanding accessibility.  

---

## 🤝 **Contributing**  
🔹 **Fork the repository.**  
🔹 **Create a new branch:** `git checkout -b feature-branch`  
🔹 **Commit your changes:** `git commit -m "Added a new feature"`  
🔹 **Push to your forked repo:** `git push origin feature-branch`  
🔹 **Submit a pull request for review.**  

---

## 📜 **License**  
This project is licensed under the **MIT License**.  

---

## 🎯 **Final Thoughts**  
**PrimeScope News** is built to **redefine digital news consumption** with a **modern, engaging, and feature-rich platform**. 🚀  

💡 **If you like this project, don't forget to ⭐ star the repository!**  




# **LostFinder - User Interface** 🌍

![CasePix Banner](https://github.com/SK-Jabed/LostFinder-Project-Client/blob/6cf0178c021d12582d31fc8afb17cbd6113f58c2/src/assets/Project-view.png)
 
## 📖 Project Overview

**Welcome to LostFinder - A Modern Find and Lost items related website !!!** LostFinder's client side is built with React and focuses on delivering a smooth and user-friendly interface. Users can post details of lost or found items, search for items, and interact with others through the platform. It’s built with performance and scalability in mind. This client-side platform delivers an elegant and accessible UI that emphasizes user convenience. The design focuses on clarity, interactivity, and responsiveness.

---

## 🎯 Purpose

The "LostFinder" web application facilitates reconnecting individuals with their lost belongings via a streamlined and efficient platform. "LostFinder" aims to simplify the process of reporting and finding lost belongings. It bridges the gap between finders and owners with an intuitive web interface. The client-side of the application focuses on delivering a seamless and accessible user experience.

The client-side of **LostFinder** is optimized for performance, accessibility, and scalability, ensuring a seamless user experience across all devices.

---

## 🏆 **Key Features**
✅ **Responsive Design** – Fully optimized UI for mobile, tablet, and desktop views.  
✅ **Secure Authentication** – Firebase-based authentication with Google login support.  
✅ **Interactive Dashboard** – Users can manage posts, view matches, and track their items.  
✅ **Advanced Search Capabilities** – Location-based and category-based filtering.  
✅ **Notifications** – Users get real-time alerts when an item is matched.  
✅ **Dynamic Components** – Engaging animations using modern libraries.  
✅ **Protected Routes** – Ensuring data security for logged-in users.  
✅ **Multi-theme Support** – Light/Dark mode toggle for better accessibility.  

---

## 🌟 **Additional Features**
- **Custom Animations** – Implemented using `AOS`, `framer-motion`, and `lottie-react`.
- **Error Handling** – Enhanced error handling and custom toasts for better feedback.
- **User Accessibility** – Screen-reader-friendly UI and high-contrast modes.
- **Loading States** – Smooth loading spinners for API requests.
- **Comprehensive 404 Page** – User-friendly error pages for unmatched routes.

---

## 🌍 **Live Demo**
Check out the live version of LostFinder:  
🔗 [**LostFinder Live Site**](https://b10-assignment-11-753d2.web.app/)

---

## 🛠 **Technologies Used**
| **Category**         | **Technologies**  |
|----------------------|------------------|
| **Frontend**        | React, Tailwind CSS, DaisyUI |
| **Backend**         | Node.js, Express.js |
| **Database**        | MongoDB |
| **Authentication**  | Firebase Authentication |
| **Hosting**         | Netlify (client), Vercel (server) |
| **State Management**| Context API |
| **Routing**         | React Router |

---

## 📦 **Dependencies**
Here are the key dependencies used in LostFinder:

### 📌 **Main Dependencies**
- `@mui/material` - UI components for a modern look.
- `@nextui-org/react` - Beautiful and accessible UI library.
- `axios` - HTTP client for API requests.
- `date-fns` - Date formatting utilities.
- `firebase` - Authentication and database services.
- `framer-motion` - Animation library for smooth transitions.
- `react-datepicker` - Modern date picker.
- `react-icons` - Scalable vector icons.
- `swiper` - Image carousel for showcasing items.
- `sweetalert2` - Modern pop-up alerts.

### 📌 **Dev Dependencies**
- `vite` - Lightning-fast development environment.
- `eslint` - Code quality and linting.
- `tailwindcss` - Utility-first CSS framework.
- `daisyui` - Tailwind CSS component library.

---

## 🚀 **Installation & Setup**
Follow these steps to set up LostFinder on your local machine.

### **1️⃣ Prerequisites**
Ensure you have the following installed:
- **Node.js** (Latest LTS version) - [Download Here](https://nodejs.org/)
- **Git** - [Download Here](https://git-scm.com/)
- **VS Code** (or any preferred IDE)

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/lostfinder-client.git
cd lostfinder-client
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Configure Firebase**
Create a `.env` file in the root directory and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### **5️⃣ Start the Development Server**
```bash
npm run dev
```
The application should now be running at `http://localhost:5173/`.

---

## 🚧 **Future Enhancements**
🔹 **Multi-language Support** – Expanding accessibility for a global audience.  
🔹 **User Chat System** – Direct messaging between users for better communication.  
🔹 **Gamification** – Rewarding active contributors with badges and points.  
🔹 **AI-Powered Image Recognition** – Helping users identify lost items using AI.  

---

## 📐 Design Philosophy
- Minimalistic yet modern.
- Mobile-first responsive design.
- Accessibility-focused with user-friendly interactions.

---

## 🤝 **Contributing**
Contributions are welcome! Follow these steps to contribute:

1. **Fork** the repository.
2. **Clone** your forked copy:
   ```bash
   git clone https://github.com/your-username/lostfinder-client.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
4. **Make your changes** and **commit**:
   ```bash
   git commit -m "Added a new feature"
   ```
5. **Push** to your forked repo:
   ```bash
   git push origin feature-branch
   ```
6. **Submit a pull request** for review.

---

## 📖 **FAQ**
### **Q: How can I report a lost item?**  
A: Click the "Add Lost Item" button, fill in the details, and submit the form.

### **Q: How can I find a lost item?**  
A: Use the search bar to filter lost and found items based on location and category.

### **Q: Is my data secure?**  
A: Yes! We use Firebase Authentication and secure database storage.

### **Q: Can I use LostFinder on my mobile device?**  
A: Absolutely! LostFinder is fully responsive and optimized for mobile devices.

---

## 📜 **License**
This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it as per the terms of the license.

---

## 🎯 **Final Thoughts**
LostFinder is a step towards creating a more connected and helpful community where lost items can find their way back to their owners. We are committed to continuously improving and expanding its features.

🔹 **If you like this project, don't forget to ⭐ star the repository!**  
🔹 **Feel free to submit feature requests or bug reports!**  

🚀 **Happy Finding!** 🎉

---