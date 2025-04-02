# Changelog

## 2024-04-01 - CI/CD Setup and Code Improvements
### CI/CD and Build Configuration
- Added GitHub Actions workflow for automated builds and deployments to site branch
- Updated Next.js configuration for static exports
- Removed deprecated serverActions option
- Added generateStaticParams and getAllContentPaths functions for static route generation
- Disabled image optimization for static exports

### Code Improvements
- Fixed import paths across components and configuration files
- Moved content type definitions to a separate file to improve client-side loading
- Fixed dynamic color classes in NotesPageClient to prevent Tailwind purge issues
- Removed GitHub API endpoint to support static exports
- Cleaned up console.log statements from source files
- Added WIP placeholder page for projects without blog posts
- Updated project links to use WIP page instead of returning 404s
- Fixed colorMap keys in NotesPageClient to match content type directory names

## 2024-03-23 - Theme Consolidation
- Consolidated theme colors across components
- Improved dark mode consistency
- Added gradient text effects to headings
