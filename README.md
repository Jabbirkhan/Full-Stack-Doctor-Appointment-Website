# Doctor Appointment Booking Website

A modern, full-stack **Doctor Appointment Booking Platform** built using the **MERN Stack** (**MongoDB, Express.js, React.js, and Node.js**).
The platform provides dedicated portals for **Patients**, **Doctors**, and a **Single Administrator**, enabling seamless appointment scheduling, doctor management, profile management, online payments, healthcare tracking, and administrative operations.
Patients can discover doctors, view profiles, book appointments using **Cash on Delivery (COD)** or **Stripe**, manage appointments, and update their profiles. Doctors can manage availability, appointments, earnings, and patient interactions, while administrators oversee doctors, appointments, and platform operations.

---

# 🚀 Features
## 👤 Patient Features
- ✅ User Registration & Login
- ✅ Email Verification with OTP
- ✅ Forgot Password & Password Reset
- ✅ Google OAuth Authentication
- ✅ GitHub OAuth Authentication
- ✅ Browse & Search Doctors
- ✅ Filter Doctors by:
  - Name
  - Experience
  - Speciality
  - Consultation Fee
- ✅ View Detailed Doctor Profiles
- ✅ Book Appointments
- ✅ Stripe Payment Integration
- ✅ Cash on Delivery (COD) Appointment Booking
- ✅ Appointment History
- ✅ Search Appointments
- ✅ Cancel Appointments
- ✅ Profile Management
- ✅ Profile Image Upload
- ✅ Contact Hospital / Clinic
- ✅ Responsive Design
---
## 👨⚕️ Doctor Features
- ✅ Secure Login
- ✅ Profile Management
- ✅ Availability Management
- ✅ View Personal Appointments
- ✅ Update Appointment Status
- ✅ Earnings Dashboard
- ✅ Payment Tracking
- ✅ OTP-Based Password Reset
- ✅ Personal Information Management
---
## 👨💼 Administrator Features
- ✅ Single Administrator Account Restriction
- ✅ Create Doctor Accounts
- ✅ View All Doctors
- ✅ Delete Doctor Accounts
- ✅ Appointment Management
- ✅ Platform Statistics
- ✅ Dashboard Analytics
- ✅ OTP-Based Password Reset
---
# 🏗️ Technology Stack
## 🎨 Frontend
| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| Tailwind CSS | Styling |
| React Router DOM | Client-Side Routing |
| Context API | State Management |
| Axios | API Communication |
---
## ⚡ Backend
| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| REST APIs | API Architecture |
---
## ☁️ Database
| Technology | Purpose |
|------------|----------|
| MongoDB Atlas | Primary Database |
---
## 🔐 Authentication & Security
| Technology | Purpose |
|------------|----------|
| JWT | Authentication |
| bcrypt | Password Hashing |
| HTTP Cookies | Secure Sessions |
| Google OAuth | Third-Party Authentication |
| GitHub OAuth | Third-Party Authentication |
---
## 📁 Media & File Management
| Technology | Purpose |
|------------|----------|
| Cloudinary | Media Storage |
| Multer | File Upload Handling |
---
## 💳 Payment Processing
| Technology | Purpose |
|------------|----------|
| Stripe | Online Payments |
| Cash on Delivery (COD) | Offline Payment Method |
---
## 📧 Email Services
| Technology | Purpose |
|------------|----------|
| Nodemailer | Email Delivery |
| SMTP | Email Transport |
---
## 🚦 Security & Performance
| Technology | Purpose |
|------------|----------|
| Upstash Redis | API Rate Limiting |
---
## 🚀 Deployment
| Component | Platform |
|------------|----------|
| Patient Frontend | Vercel |
| Admin Dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
---
# 📂 Project Structure
```text
Doctor-Appointment-Website/
│
├── frontend/        # Patient-facing React Application
├── admin/           # Administrator Dashboard
├── backend/         # Express API & Server Logic
└── README.md
```
---
# 👥 User Roles
The system provides separate experiences for three user roles.
---
## 👤 Patient
Patients can:
- Register & Login
- Search Doctors
- Book Appointments
- Make Online Payments
- Cancel Appointments
- Update Profiles
---
## 👨⚕️ Doctor
Doctors can:
- Login Securely
- Manage Availability
- Update Profile Information
- View Appointments
- Update Appointment Status
- View Earnings
---
## 👨💼 Administrator
Administrators can:
- Create Doctor Accounts
- Manage Doctors
- Monitor Appointments
- View Platform Analytics
- Track Healthcare Metrics
---
# 🔐 Authentication System
The application provides separate authentication flows for Patients, Doctors, and Administrators.
---
## 👤 Patient Authentication
- Email & Password Login
- JWT Cookie Authentication
- Email Verification
- OTP Password Recovery
- Google OAuth Login
- GitHub OAuth Login
---
## 👨💼 Administrator Authentication
- Email & Password Login
- Single Administrator Restriction
- ADMIN_EMAIL Validation
- JWT Authentication
- OTP Password Recovery
---
## 👨⚕️ Doctor Authentication
- Admin-Created Accounts
- Email & Password Login
- JWT Authentication
- OTP Password Recovery
---
# 👨⚕️ Doctor Discovery
Patients can:
- Browse Doctors
- Search by Name
- Search by Experience
- Search by Speciality
- Filter by Consultation Fees
---
## 📋 Doctor Profile Details
Each doctor profile includes:
- Profile Image
- Name
- Degree
- Speciality
- Experience
- Consultation Fee
- Description
- Address
---
# 📅 Appointment Booking System
## Booking Workflow
1. Select a Doctor
2. Select an Appointment Date
3. Choose an Available Time Slot
4. Select a Payment Method:
   - Cash on Delivery (COD)
   - Stripe
5. Confirm Appointment
6. Track Appointment Status
---
## 📊 Appointment Statuses
| Status | Description |
|----------|-------------|
| Pending | Appointment awaiting completion |
| Completed | Appointment successfully completed |
| Cancelled | Appointment cancelled |
> Doctors can manage appointment statuses directly from their dashboard.
---
# 💳 Payment Integration
The platform supports multiple payment methods.
---
## Cash on Delivery (COD)
- Appointment booked instantly
- Offline payment collection
---
## Stripe Payment Gateway
- Secure online payments
- Stripe checkout flow
- Payment verification endpoint
- Booking confirmation after successful payment
---
# 👤 Patient Profile Management
Patients can update:
- Full Name
- Phone Number
- Gender
- Date of Birth
- Address
- Profile Image
---
## Additional Features
- Secure Logout
- Password Reset
- Account Management
- Email Verification
---
# 👨⚕️ Doctor Dashboard
Doctors can manage appointments, earnings, availability, and profile details.
---
## 👨⚕️ Profile Information
- Name
- Degree
- Speciality
- Experience
- Consultation Fees
- Description
- Address
- Profile Image
---
## 🟢 Availability Management
Doctors can update status:
- Available
- Unavailable
---
## 📅 Appointment Management
Doctors can:
- View Upcoming Appointments
- View Completed Appointments
- View Cancelled Appointments
- Update Appointment Status
---
## 💰 Earnings Dashboard
Track:
- Total Earnings
- Completed Paid Appointments
- Revenue Statistics
- Appointment Analytics
---
# 👨💼 Admin Dashboard
## 👨⚕️ Doctor Management
Administrators can:
- Add Doctors
- View Doctors
- Delete Doctors
---
## Doctor Information
Each doctor record includes:
- Name
- Profile Image
- Email
- Password
- Degree
- Speciality
- Experience
- Address
- Description
- Consultation Fees
---
## 📈 Dashboard Analytics
### Doctor Statistics
- Total Doctors
- Active Doctors
- Available Doctors
- Average Experience
### Appointment Statistics
- Total Appointments
- Pending Appointments
- Cancelled Appointments
- Revenue Metrics
---
# 📱 Pages & Screens
## 👤 Patient Frontend
| Page | Description |
|--------|------------|
| Home | Main Landing Page |
| Register | Patient Registration |
| Doctors | Browse Doctors |
| Doctor Detail | Doctor Information |
| Appointments | Manage Appointments |
| Profile | Personal Information |
| About | Website Information |
| Contact | Contact Hospital/Clinic |
| Privacy Policy | Privacy Information |
| Forgot Password | Password Recovery |
| Verify Email | Email Verification |
---
## 👨💼 Administrator Dashboard
| Page | Description |
|--------|------------|
| Register | Administrator Registration |
| Add Doctor | Create Doctor Accounts |
| All Doctors | Manage Doctors |
| All Appointments | View Platform Appointments |
| Forgot Password | Password Recovery |
---
## 👨⚕️ Doctor Panel
| Page | Description |
|--------|------------|
| Profile | Doctor Information |
| Appointments | Manage Appointments |
| Forgot Password | Password Recovery |
---
# 🌐 API Architecture
The backend follows a REST API architecture with separate route groups for Patients, Doctors, and Administrators.
---
## 👤 User APIs
### Base URL
```text
/api/v1/user
```
| Method | Endpoint | Description |
|----------|-------------|-------------|
| POST | /register | Register Patient |
| POST | /login | Login Patient |
| GET | /verify | Verify User |
| POST | /logout | Logout Patient |
| GET | /profile | Get Profile |
| PATCH | /updateprofile | Update Profile |
| GET | /doctors | Get Doctors |
| POST | /bookappointment | Book Appointment (COD) |
| POST | /book-stripe-appointment | Stripe Appointment Booking |
| POST | /verify-stripe-payment | Verify Stripe Payment |
| GET | /appointments | Get Patient Appointments |
| PATCH | /cancelappointment/:id | Cancel Appointment |
| POST | /send-contact-message | Contact Hospital |
---
## 👨⚕️ Doctor APIs
### Base URL
```text
/api/v1/doctor
```
| Method | Endpoint | Description |
|----------|-------------|-------------|
| POST | /login | Doctor Login |
| GET | /verify | Verify Doctor |
| POST | /logout | Logout Doctor |
| GET | /profile | Get Doctor Profile |
| PATCH | /updateprofile/:id | Update Profile |
| PATCH | /change-availability | Change Availability |
| GET | /appointments | Get Appointments |
| PATCH | /change-status/:id | Update Appointment Status |
---
## 👨💼 Admin APIs
### Base URL
```text
/api/v1/admin
```
| Method | Endpoint | Description |
|----------|-------------|-------------|
| POST | /register | Register Admin |
| POST | /login | Login Admin |
| GET | /verify | Verify Admin |
| POST | /logout | Logout Admin |
| POST | /adddoctor | Add Doctor |
| GET | /doctors | Get All Doctors |
| DELETE | /deletedoctor/:id | Delete Doctor |
| GET | /appointments | Get All Appointments |
---
# ☁️ Database & Storage
## MongoDB Atlas
Stores:
- Patients
- Doctors
- Administrators
- Appointments
- Patient Profiles
- Payment Data
- Media URLs
---
## Cloudinary
Used for storing:
- Doctor Images
- Patient Images
- Uploaded Files
- Media Assets
---
# 📧 Email Services
The application uses **Nodemailer** and **SMTP** for:
- Email Verification OTPs
- Password Reset OTPs
- Contact Messages
- Authentication Notifications
---
# ⚙️ Environment Variables
## Backend (.env)
```env
PORT=
ADMIN_EMAIL=
MONGODB_URI=
DB_NAME=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SENDER_EMAIL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_WEBHOOK_ENDPOINT=
```
---
## Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:8008
```
---
## Admin (.env)
```env
VITE_BACKEND_URL=http://localhost:8008
```
---
# 🚀 Local Installation
## 1️⃣ Clone Repository
```bash
git clone https://github.com/Jabbirkhan/Full-Stack-Doctor-Appointment-Website.git
```
---
## 2️⃣ Install Dependencies
### Backend
```bash
cd backend
npm install
```
### Patient Frontend
```bash
cd frontend
npm install
```
### Admin Dashboard
```bash
cd admin
npm install
```
---
## 3️⃣ Configure Environment Variables
Create:
```text
backend/.env
frontend/.env
admin/.env
```
Configure credentials for:
- MongoDB Atlas
- Cloudinary
- SMTP
- Google OAuth
- GitHub OAuth
- Stripe
- Upstash Redis
---
## 4️⃣ Start Development Servers
### Backend
```bash
cd backend
npm run server
```
### Patient Frontend
```bash
cd frontend
npm run dev
```
### Admin Dashboard
```bash
cd admin
npm run dev
```
✅ Run all applications in separate terminal windows.
---
# 🔒 Security Features
- bcrypt Password Hashing
- JWT Authentication
- Cookie-Based Sessions
- Google OAuth Authentication
- GitHub OAuth Authentication
- Email Verification
- OTP-Based Password Recovery
- Route Protection Middleware
- Input Validation
- Secure File Upload Handling
- API Rate Limiting via Upstash Redis
---
# 📱 Responsive Design
Optimized for:
- 💻 Desktop
- 📱 Mobile Devices
- 📟 Tablets
---
# ☁️ Deployment Architecture
| Component | Platform |
|------------|----------|
| Patient Frontend | Vercel |
| Admin Dashboard | Vercel |
| Backend API | Render |
| Database | MongoDB Atlas |
| File Storage | Cloudinary |
---
# 📄 License
This project is licensed under the **MIT License**.
---
# 👨💻 Author
Developed using:
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Cloudinary
- Stripe Payment Integration
- JWT Authentication
- Google & GitHub OAuth
- Tailwind CSS
---
