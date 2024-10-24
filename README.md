# Quotes Sharing and Exploring App
Welcome to the Quotes Sharing and Exploring App! This full-stack application, built with Next.js, styled using Tailwind CSS, and powered by Prisma for efficient data management, provides an intuitive platform for discovering and sharing inspiring quotes.

## Features
- Explore Quotes: Browse a diverse collection of quotes from various authors, perfect for daily inspiration.
- Share Your Favorites: Contribute your own quotes and share your thoughts with the community.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or later
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/samjaabo/Quotes-app.git
    cd Quotes-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Migrate Prisma**:
    This will create the necessary tables and columns in the database based on the Prisma schema defined in the prisma directory.
    ```bash
    npx prisma migrate dev --name init
    ```