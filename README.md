# My Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This project was developed using Cursor IDE, leveraging AI-assisted development through Vibe coding. The initial plan was created using ChatGPT, and the implementation was guided and reviewed by the developer while Cursor handled the coding tasks.

## Development Process

This website was developed using an innovative approach:
1. Initial planning and architecture design using ChatGPT
2. Implementation using Cursor IDE with Vibe coding
3. Continuous review and guidance from the developer
4. Iterative improvements and refinements

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

The development server provides all Next.js features including:
- Hot Module Replacement (HMR)
- Fast Refresh
- Development-specific optimizations
- Server-side features

Note: The `output: 'export'` setting in `next.config.mjs` only affects the production build process and does not impact local development.

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

## Deployment

### CI/CD Setup

The website uses GitHub Actions for automated deployment. When you push to the `main` branch, the following happens:

1. The Next.js site is built as a static site
2. The built files are automatically pushed to the `site` branch
3. Hostinger automatically deploys from the `site` branch

#### GitHub Actions Configuration

The workflow is configured in `.github/workflows/deploy.yml` and uses:
- `actions/checkout@v4` for repository checkout
- `actions/setup-node@v4` for Node.js setup
- `peaceiris/actions-gh-pages@v3` for pushing to the `site` branch

No additional secrets are required as the workflow uses the automatically provided `GITHUB_TOKEN` secret.

#### Hostinger Setup

1. Connect your Hostinger hosting to the `site` branch of your repository
2. Configure Hostinger to deploy from the `site` branch
3. The deployment will happen automatically when the CI/CD pipeline pushes to the `site` branch

## License

[Your chosen license]


