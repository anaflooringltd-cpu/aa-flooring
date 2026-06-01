# How to Update Your Website (No Coding Required)

This guide explains how to make changes to the A&A Flooring website using Claude Code — an AI assistant that writes and updates the code for you. You just describe what you want in plain English.

---

## What you need installed (one-time setup)

1. **Claude Code** — download from [claude.ai/code](https://claude.ai/code)
2. **That's it.** Claude Code handles everything else.

---

## Opening the project

1. Open the **Claude Code** app
2. Click **Open Project**
3. Navigate to the `aa-flooring` folder on your computer and select it

You'll see a chat window. This is where you talk to Claude.

---

## How to make changes

Just type what you want — like texting someone. You don't need to know anything about code.

### Examples of things you can say:

**Update business info:**
> "Change the phone number to (778) 555-1234"

> "Update the address to 123 Main Street, Coquitlam"

**Update services:**
> "Add a new service called 'Bathroom Tile Installation' with a short description"

> "Remove the vinyl laminate service from the website"

**Update content:**
> "Change the hero headline on the homepage to 'Coquitlam's Trusted Flooring Specialists'"

> "Add Port Coquitlam to the list of service areas"

**Update reviews:**
> "Add this Google review: [paste the review text and reviewer name]"

Claude will make the changes and tell you what it did. You can ask follow-up questions or say "undo that" if something looks wrong.

---

## Publishing your changes (going live)

After Claude makes a change, it will usually ask if you want to publish. You can also just say:

> "Push the changes live"

or

> "Deploy to the website"

Claude will upload everything to Vercel (the service that hosts your site) and within about 1 minute your changes will be live at **aa-flooring.vercel.app**.

---

## Checking if the site is working

Ask Claude:

> "Is the website deployed and working?"

or

> "Check the latest deployment"

Claude will tell you if everything is green or if there's a problem to fix.

---

## Common tasks — copy and paste these

| What you want | What to type |
|---|---|
| Change phone number | "Update the phone number to XXX-XXX-XXXX" |
| Change email | "Update the contact email to newemail@gmail.com" |
| Add a service area | "Add [city name] to the service areas" |
| Add a photo | "Add this photo to the portfolio: [drag the image into the chat]" |
| Fix a typo | "On the About page, change '[wrong text]' to '[right text]'" |
| See the site | "Open the website in my browser" |

---

## What NOT to worry about

- **You cannot break the website permanently.** Every change is saved to a history log (called git). If something goes wrong, Claude can undo it.
- **You don't need to understand the code.** Claude reads and writes it for you.
- **You don't need to know technical terms.** Describe what you want in plain English — Claude will figure out the rest.

---

## If something goes wrong

Just tell Claude what you're seeing:

> "The form on the contact page isn't working"

> "The homepage looks broken on my phone"

> "The site is showing an error"

Claude will investigate and fix it.

---

## Getting help

- **Inside Claude Code:** Type `/help` and press Enter
- **Phone (urgent site issues):** Call Dmitry at the number you have on file

---

## One-time things that still need to be done

- [ ] **Activate the contact form** — Check `anaflooringltd@gmail.com` for an email from FormSubmit with subject "Activate your form" and click the link inside. This makes the quote request form work.
- [ ] **Connect aa-flooring.ca domain** — The site currently lives at aa-flooring.vercel.app. When ready to connect the real domain, ask Claude: "Help me connect the aa-flooring.ca domain to Vercel."
