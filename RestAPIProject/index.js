const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle GET request for /hello/amjad
app.get('/hello/amjad', (req, res) => {
  res.send('Hello, Amjad');
});

// Handle POST request to receive ProfessionalProfile
app.post('/profile', (req, res) => {
  const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

  // Check for missing fields
  if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Read existing profiles and append the new one
  const profile = { Name, Title, TargetedKeywords, Education, Certification, Contact };

  fs.readFile('profiles.json', (err, data) => {
    let profiles = [];
    if (!err) {
      profiles = JSON.parse(data);
    }

    profiles.push(profile);
    
    fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save profile' });
      res.status(201).json({ message: 'Profile saved successfully' });
    });
  });
});

// Handle GET request to fetch profiles from CSV file
app.get('/profiles', (req, res) => {
  const profiles = [];
  
  fs.createReadStream('profiles.csv')
    .pipe(csv())
    .on('data', (row) => {
      profiles.push(row);
    })
    .on('end', () => {
      res.status(200).json(profiles);
    })
    .on('error', (err) => {
      res.status(500).json({ error: 'Failed to load profiles' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
