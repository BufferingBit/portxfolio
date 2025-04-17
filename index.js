import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import env from "dotenv";
import { Resend } from 'resend';
import fetch from 'node-fetch';
import NodeCache from 'node-cache';
import compression from 'compression';

env.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize cache with 30 minutes TTL
const cache = new NodeCache({ stdTTL: 1800 });

const app = express();
const port = process.env.PORT || 3000;

// Add compression middleware
app.use(compression());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

//Routes.

app.get("/about-me", (req, res) => {
  res.render("routes/about-me.ejs");
});

app.get("/contact", (req, res) => {
  res.render("routes/contact.ejs");
});

app.get("/inventory", (req, res) => {
    res.render("routes/inventory.ejs");
})

app.get("/quests", (req, res)=> {
    res.render("routes/quests.ejs");
})

app.get("/titles", (req, res)=>{
    res.render("routes/titles.ejs");
})
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const response = await resend.emails.send({
        from: 'RPG Contact Form <onboarding@resend.dev>',
        to: `${process.env.YOUR_MAIL_URL}`,
        subject: `📩 New message from ${name}`,
        html: `
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
      });
  
      res.status(200).send('Message sent successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to send message.');
    }
  });
  app.get('/github-data', async (req, res) => {
    try {
        // Check cache first
        const cachedData = cache.get('github_repos');
        if (cachedData) {
            return res.json(cachedData);
        }

        const response = await fetch('https://api.github.com/users/BufferingBit/repos?sort=updated&per_page=100');
        const data = await response.json();
        
        const processedData = data.map(repo => ({
            title: repo.name,
            description: repo.description || "No description provided",
            language: repo.language || "Various",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated: new Date(repo.updated_at).toLocaleDateString(),
            url: repo.html_url,
            topics: repo.topics || []
        }));

        // Store in cache
        cache.set('github_repos', processedData);
        
        res.json(processedData);
    } catch (error) {
        console.error('GitHub API error:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub data' });
    }
});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
