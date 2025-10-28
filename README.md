# Victor & Preethi - Wedding Website

An elegant, responsive Christian wedding website built with React (Vite), Tailwind CSS, Framer Motion, and Lottie animations.

## 🎉 Features

- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Hero Section**: Elegant landing with couple names and wedding date
- **Save the Date Modal**: First-visit modal with localStorage persistence
- **Our Story Timeline**: Animated timeline of the couple's journey
- **Event Schedule**: Cards for Engagement, Wedding Ceremony, and Reception
  - Add-to-calendar buttons (Google Calendar, Outlook, Apple Calendar)
  - QR codes for venue directions
  - Integrated Google Maps
- **Live Countdown**: Real-time countdown to the wedding (IST timezone)
- **Interactive Maps**: Embedded Google Maps with QR codes for each venue
- **RSVP Form**: Contact form with mailto fallback
- **Photo Gallery**: Responsive grid with lightbox carousel
- **Parents Section**: Family information cards
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, structured data ready

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env
   ```
   
   Add your Google Maps API key to `.env`:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:8080`

## 📝 Customization Guide

### 1. Update Couple Information

**src/components/Hero.tsx**
- Update couple names (line 25-27)
- Update wedding date and venue (line 39-44)

**src/components/OurStory.tsx**
- Edit the timeline array (lines 5-22)
- Replace story descriptions with your actual story

### 2. Update Event Details

**src/components/Events.tsx**
- Update events array (lines 5-54)
- Change dates, times, venues, and addresses
- Update map URLs and calendar event data

### 3. Update Countdown Date

**src/components/Countdown.tsx**
- Change WEDDING_DATE constant (line 6)
- Format: `'YYYY-MM-DDTHH:MM:SS+05:30'` (IST timezone)

### 4. Update Contact Information

**src/components/RSVPForm.tsx**
- Update GROOM_PHONE, BRIDE_PHONE, RSVP_EMAIL (lines 8-10)

**src/components/Footer.tsx**
- Update social media URLs (lines 5-6)
- Update Bible verse and reference (lines 7-8)

### 5. Update Parents Information

**src/components/ParentsSection.tsx**
- Edit families array (lines 5-22)
- Update parent and sibling names

### 6. Add Google Maps API Key

1. Get API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Enable "Maps JavaScript API" and "Maps Embed API"
3. Add to `.env` file:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

### 7. Replace Images

**Gallery Images:**
- Replace images in `src/assets/`:
  - `gallery-1.jpg`
  - `gallery-2.jpg`
  - `gallery-3.jpg`
- Update `src/components/PhotoGallery.tsx` imports and galleryImages array

**Hero Background:**
- Replace `src/assets/hero-bg.jpg` with your own hero image

### 8. Update Meta Tags & SEO

**index.html**
- Update title, description, and Open Graph tags (lines 6-21)

**src/pages/Index.tsx**
- Update Helmet meta tags (lines 14-29)

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist/` folder.

## 📤 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables in Vercel dashboard

## 📧 RSVP Setup

The RSVP form currently opens a mailto link. To add a backend:

1. **Option 1: Netlify Functions**
   - Create `netlify/functions/rsvp.js`
   - Use SendGrid or similar email service
   - Update form submission in `RSVPForm.tsx`

2. **Option 2: Vercel Serverless Functions**
   - Create `api/rsvp.js`
   - Use Resend, SendGrid, or Nodemailer
   - Update form submission in `RSVPForm.tsx`

3. **Option 3: External Service**
   - Use Formspree, Form-Data, or Google Forms
   - Update form action in `RSVPForm.tsx`

## 🎨 Design Customization

### Colors

Update `src/index.css` (lines 20-48):
- `--primary`: Main accent color (rose-gold)
- `--secondary`: Secondary color (ivory)
- All colors use HSL format

### Fonts

Update `index.html` Google Fonts link (line 11):
- Currently: Playfair Display + Poppins
- Change fonts in `src/index.css` (lines 118-123)

## 📱 Key Libraries

- **React**: UI framework
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lottie React**: Decorative animations
- **qrcode.react**: QR code generation
- **react-helmet**: Meta tags management
- **Lucide React**: Icons

## 🤝 Support

For questions or issues:
1. Check the code comments (marked with `// EDITABLE:`)
2. Review component props and interfaces
3. Check browser console for errors

## 📜 License

This project is created for Victor & Preethi's wedding. All rights reserved.

---

**Made with ❤️ for Victor & Preethi**
