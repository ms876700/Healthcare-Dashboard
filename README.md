#  B2B Healthcare Dashboard

A modern **B2B Healthcare UI application** built to demonstrate frontend development skills using React and TypeScript.
The application simulates a healthcare management dashboard with authentication, analytics, patient management, and real-time notifications.

---

##  Features

**Authentication**

  * Secure login using Firebase Authentication (Email/Password)

**Dashboard**

  * Overview of key healthcare metrics
  * Total patients, active cases, and emergency alerts

**Analytics**

  * Interactive charts for patient trends and insights

**Patient Management**

  * View patient data in:

    * Grid View (Card layout)
    * List View (Table layout)
  * Toggle between views seamlessly

**Notifications**

  * Emergency alerts implemented using Service Worker notifications

---

##  Tech Stack

* **Frontend:** React + TypeScript
* **Styling:** Tailwind CSS
* **Authentication:** Firebase Authentication
* **Charts:** Recharts
* **Notifications:** Service Worker API
* **Deployment:** Vercel

---

##  Project Structure

```
src/
 ├── components/
 │    ├── Navbar.tsx
 │    ├── Layout.tsx
 │    ├── PatientCard.tsx
 │    ├── PatientTable.tsx
 │
 ├── pages/
 │    ├── Login.tsx
 │    ├── Dashboard.tsx
 │    ├── Analytics.tsx
 │    ├── Patients.tsx
 │
 ├── services/
 │    └── firebase.ts
 │
 ├── data/
 │    └── patients.ts
 │
 ├── routes/
 │    └── AppRoutes.tsx
 │
 ├── App.tsx
 └── main.tsx
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ms876700/healthcare-dashboard.git
cd healthcare-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

##  Firebase Configuration

This project uses Firebase Authentication.

Update your Firebase config in:

```
src/services/firebase.ts
```

Example:

```ts
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};
```

---

##  Live Demo

(https://healthcare-dashboard-lyart.vercel.app/)

---

##  Notes

* Notifications require browser permission
* Service Worker is used for handling notifications
* Works best on modern browsers like Chrome

---

##  Submission Details

This project was created as part of a **Frontend Developer Assignment** to demonstrate:

* UI development skills
* Component architecture
* State management
* Real-world feature implementation

---

##  Author

**Mamta Saini**

---

##  Acknowledgement

Built as part of a technical assignment to showcase frontend engineering capabilities in a healthcare domain.
