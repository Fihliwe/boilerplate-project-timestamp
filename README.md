# Timestamp Microservice

## Project URL
https://3000-freecodecam-boilerplate-r3sle28yjmw.ws-eu117.gitpod.io/

## Description
This is a simple timestamp microservice that converts dates between Unix timestamps and UTC string format. The service can handle various date formats and Unix timestamps, providing a consistent JSON response format.

## Features
- Convert date strings to Unix timestamps and UTC format
- Convert Unix timestamps to human-readable UTC format
- Get current timestamp when no date is provided
- Handle invalid date inputs with appropriate error messages
- Clean and responsive web interface

## Demo
Example requests:
- `/api/2015-12-25` - Convert a date string
- `/api/1451001600000` - Convert a Unix timestamp
- `/api/` - Get current timestamp

Example response:
```json
{
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Requirements
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd timestamp-microservice
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (optional):
```
PORT=3000
```

## Usage
1. Start the server:
```bash
npm start
```

2. For development with auto-reload:
```bash
npm run dev
```

3. Access the application:
- Web Interface: `http://localhost:3000`
- API Endpoint: `http://localhost:3000/api/:date?`

## API Endpoints

### GET `/api/:date?`
- `:date` (optional) - Date string or Unix timestamp
- If no date is provided, returns current timestamp
- Returns JSON object with `unix` and `utc` keys

#### Success Response
```json
{
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

#### Error Response
```json
{
    "error": "Invalid Date"
}
```

## Technical Details
- Built with Express.js
- Uses CORS middleware for cross-origin requests
- Serves static files from 'public' directory
- All dates are handled in GMT timezone

## Project Structure
```
timestamp-microservice/
├── index.js           # Main server file
├── package.json       # Project configuration
├── .env              # Environment variables (optional)
├── public/           # Static files
│   └── style.css     # Stylesheet
└── views/            # Frontend views
    └── index.html    # Main page
```

## Dependencies
- express: Web framework
- cors: Cross-origin resource sharing
- dotenv: Environment variable management
- nodemon (dev): Auto-reload during development

## License
[MIT License](LICENSE)

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Testing
To verify the API is working correctly, you can test the following scenarios:
1. Valid date string: `/api/2015-12-25`
2. Unix timestamp: `/api/1451001600000`
3. Current time: `/api/`
4. Invalid date: `/api/invalid-date`

## Troubleshooting
- If the server won't start, check if the port is already in use
- Ensure all dependencies are installed correctly
- Verify the .env file configuration if using custom settings

## Support
For issues and questions, please open an issue in the GitHub repository.
