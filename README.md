# Netflix Clone

A modern, responsive Netflix-like streaming platform built with React, TypeScript, and Tailwind CSS. This single-page application allows users to browse movies and TV shows, view detailed information, and manage user authentication with a focus on exceptional user experience.

## 🎬 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Movie & TV Show Browsing**: Browse through curated collections of entertainment content
- **Detailed Views**: Rich media detail pages with pricing information for rentals and purchases
- **User Authentication**: Registration and login functionality (frontend only)
- **Interactive Hero Section**: Dynamic slideshow featuring popular content
- **Modern UI/UX**: Netflix-inspired design with smooth animations and transitions
- **RESTful API Integration**: Uses json-server for mock backend data

## 🚀 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Mock Backend**: json-server
- **Package Manager**: npm/yarn

## 📋 Prerequisites

Before running this project, make sure you have the following installed on your system:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

### Checking Your Installation

```bash
node --version
npm --version
git --version
```

## 🛠 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/dirghayu101/videostream
cd videostream
```

### Step 2: Install Dependencies

Choose one of the following methods:

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

### Step 3: Install json-server globally (if not already installed)

```bash
npm install -g json-server
```

## 🖥 Running the Project

### For All Operating Systems (Windows, macOS, Linux)

1. **Start the mock backend server:**

  ```bash
    npx json-server db.json
  ```

  This will start json-server on `http://localhost:3000`
2. **In a new terminal, start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

``` txt
videostream/
├── README.md
├── db.json
├── docs
│   ├── notes
│   │   └── reminder.txt
│   └── requirements
│       ├── CJV805-React_FV_Assignment#1_Summer2025.pdf
│       └── requirements-gathered.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── auth
│   │   │   ├── LoginModal.tsx
│   │   │   ├── RegisterModal.tsx
│   │   │   └── index.ts
│   │   ├── common
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── index.ts
│   │   ├── home
│   │   │   ├── ContentSection.tsx
│   │   │   ├── FeaturedItem.tsx
│   │   │   ├── FeaturedSection.tsx
│   │   │   ├── HeroSlideShow.tsx
│   │   │   └── index.ts
│   │   ├── media
│   │   │   ├── MediaDetail.tsx
│   │   │   ├── MediaList.tsx
│   │   │   ├── index.ts
│   │   │   └── media_detail
│   │   │       ├── MediaDetailHero.tsx
│   │   │       ├── MediaDetailTable.tsx
│   │   │       └── index.ts
│   │   └── pages
│   │       ├── Homepage.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── MediaDetailPage.tsx
│   │       ├── MediaPage.tsx
│   │       └── index.ts
│   ├── config
│   │   ├── homepage.config.ts
│   │   ├── index.ts
│   │   └── media.config.ts
│   ├── const
│   │   ├── index.ts
│   │   └── media.const.ts
│   ├── context
│   │   ├── MediaDetailContext.tsx
│   │   ├── MediaDetailProvider.tsx
│   │   └── index.ts
│   ├── index.css
│   ├── main.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── types
│   │   ├── auth.type.ts
│   │   ├── index.ts
│   │   ├── media.type.ts
│   │   └── util.type.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🗃 Database Schema (db.json)

The mock database contains the following structure:

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Movie Title",
      "image": "poster-url",
      "largePoster": "background-url",
      "synopsis": "Short description",
      "description": "Detailed description",
      "rentPrice": 4.99,
      "purchasePrice": 14.99,
      "year": 2023,
      "genre": "Action"
    }
  ],
  "tvshows": [
    {
      "id": 1,
      "title": "TV Show Title",
      "image": "poster-url",
      "largePoster": "background-url",
      "synopsis": "Short description",
      "description": "Detailed description",
      "rentPrice": 2.99,
      "purchasePrice": 9.99,
      "year": 2023,
      "genre": "Drama"
    }
  ],
  "featured": [...]
}
```

## 🌐 API Endpoints

The json-server provides the following endpoints:

- `GET /movies` - Fetch all movies
- `GET /movies/:id` - Fetch a specific movie
- `GET /tvshows` - Fetch all TV shows
- `GET /tvshows/:id` - Fetch a specific TV show
- `GET /heroMovies` - Fetch featured content

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Key Features

### Home Page

- Dynamic hero section with slideshow
- Featured movies and TV shows sections
- Responsive navigation header
- Comprehensive footer

### Media Listing Pages

- Grid layout for movies and TV shows
- Responsive card design
- Click-to-view details functionality

### Media Detail Pages

- Full-screen hero background
- Comprehensive media information
- Pricing for rentals and purchases
- Responsive layout with sticky sidebar

### Authentication

- Registration and login forms
- Modal or separate page implementation
- Form validation (frontend only)

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

Active Deployment Link: [Vercel Deployment](https://videostream-n458dyj3r-dirghayu101s-projects.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Dirghayu Joshi - <dirghayujoshi48@gmail.com>

## 🙏 Acknowledgments

- Design inspiration from Netflix
- React and TypeScript communities
- Tailwind CSS for styling system

---

**Note**: This is a educational project and not affiliated with Netflix. All content is for demonstration purposes only.
