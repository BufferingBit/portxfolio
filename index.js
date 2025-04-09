import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import env from "dotenv";
import { Resend } from 'resend';


env.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const port = 3000;


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






app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
