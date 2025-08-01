# 📺 TV Shows API — Node.js + Express

This is a simple RESTful API for managing TV shows. It allows users to perform full CRUD (Create, Read, Update, Delete) operations using Express and JSON as data storage. The API is tested using Postman and supports basic endpoints for managing a list of TV shows.

---

## 🔧 Technologies Used

- Node.js
- Express
- Nodemon
- MongoDB Atlas (optional if implemented)
- dotenv
- Postman (for testing)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

2. Install dependencies

npm install

3. Set up environment variables

Create a .env file and add your MongoDB URI (if using MongoDB):

MONGODB_URI=your_mongodb_connection_string

If you’re not using MongoDB, you can ignore this step and just use the local tv.json.

4. Run the server

npm run dev

You should see:

✅ Connected to MongoDB Atlas (if used)
🚀 Server running on port 5000


⸻

📚 API Endpoints

Method	Endpoint	Description
GET	/api/tv	Get all TV shows
GET	/api/tv/:id	Get a single show by ID
POST	/api/tv	Add a new show
PUT	/api/tv/:id	Update a show by ID
DELETE	/api/tv/:id	Delete a show by ID

📌 Sample JSON for POST & PUT

{
  "title": "Stranger Things",
  "genre": "Sci-Fi",
  "seasons": 4,
  "year": 2016
}


⸻

📸 Postman Testing

The API was tested using Postman. Each operation (GET, POST, PUT, DELETE) was verified and screenshots were included in the final PDF report.

⸻

📁 File Structure

├── tv.json             # JSON file for storing TV shows
├── server.js           # Main Express server
├── package.json
├── .env                # Environment variables (optional)
├── README.md


⸻

📃 Author

Name: Annie Castillo Diaz
Student ID: 200588586
Project: TV Shows CRUD API
Date: July 31 2025

⸻

✅ Status

✔️ Project completed
✔️ CRUD endpoints functional
✔️ Tested with Postman
✔️ Submitted with screenshots PDF and GitHub link
