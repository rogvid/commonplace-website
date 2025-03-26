# My Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Dynamic project showcase
- Content management with MDX
- Blog/Notes system with multiple content types
- Tag-based filtering and search
- Animated interactions
- SEO optimization

## Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Deployment**: [Your deployment platform]

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   ├── data/            # Data files (projects, notes)
│   ├── styles/          # Global styles
│   └── [routes]/        # Page components
├── content/             # MDX content
│   ├── blog/            # Long-form blog posts
│   ├── reports/         # Technical reports and analysis
│   ├── tif/            # Things I Found - quick insights
│   ├── til/            # Things I Learned - learning notes
│   └── reviews/        # Reviews (books, movies, etc.)
├── lib/                # Utility functions
│   └── mdx.js         # MDX processing utilities
└── public/            # Static assets
    └── projects/      # Project images
```

## Content Management

### Content Types

1. **Blog Posts** (`/content/blog/`)
   - Long-form articles
   - Project deep-dives
   - Technical tutorials

2. **Technical Reports** (`/content/reports/`)
   - Research findings
   - Technical analysis
   - Case studies

3. **Things I Found** (`/content/tif/`)
   - Interesting discoveries
   - Quick insights
   - Useful resources

4. **Things I Learned** (`/content/til/`)
   - Learning notes
   - Quick tips
   - Problem solutions

5. **Reviews** (`/content/reviews/`)
   - Book reviews
   - Movie reviews
   - Tool/technology reviews

### Adding New Content

1. Create a new `.mdx` file in the appropriate directory:
   ```md
   ---
   title: 'Your Title'
   excerpt: 'Brief description'
   date: 'YYYY-MM-DD'
   tags: ['tag1', 'tag2']
   # Optional fields:
   isProjectPost: true/false
   projectId: 'Project Name'
   rating: 4.5
   mediaType: 'book'/'movie'/'tool'
   author: 'Author Name'
   ---

   # Your Content Here
   ```

2. Add any related images to `/public/content/[type]/[slug]/`

3. The content will automatically appear in the Notes page with:
   - Proper categorization
   - Type-specific styling
   - Reading time calculation
   - Tag-based filtering

## Development

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Styling

- Tailwind CSS for utility-first styling
- Custom color scheme in `tailwind.config.js`
- Typography plugin for MDX content
- Responsive design utilities

### Content Types

To add a new content type:

1. Add the type to `ContentTypes` in `app/data/notes.js`
2. Create the corresponding directory in `/content`
3. Add type-specific styling in the Notes components

## License

[Your chosen license]


