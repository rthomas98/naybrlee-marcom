## Description
<!-- Provide a brief description of the changes in this PR -->

## Type of Change
<!-- Mark the relevant option with an "x" -->

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 UI/UX improvement
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement
- [ ] 🔒 Security fix

## Related Issues
<!-- Link to related issues, e.g., Fixes #123, Closes #456 -->

## Screenshots (if applicable)
<!-- Add screenshots to help explain your changes -->

## Checklist
<!-- Mark completed items with an "x" -->

### Code Quality
- [ ] My code follows the project's style guidelines
- [ ] I have run `vendor/bin/pint --dirty` to format PHP code
- [ ] I have run `npm run format` to format JavaScript/TypeScript code
- [ ] I have run `npm run lint` and fixed any issues
- [ ] I have run `npm run types` for TypeScript type checking

### Testing
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with `php artisan test`
- [ ] I have tested the changes in multiple browsers (Chrome, Firefox, Safari)
- [ ] I have tested responsive design on mobile, tablet, and desktop viewports

### Documentation
- [ ] I have updated the documentation accordingly
- [ ] I have added/updated comments in the code where necessary
- [ ] I have updated the CLAUDE.md file if there are significant architectural changes

### Laravel Specific
- [ ] I have run migrations successfully with `php artisan migrate`
- [ ] I have cleared and rebuilt caches if configuration changed
- [ ] I have used Form Request classes for validation (not inline validation)
- [ ] I have followed Laravel best practices and conventions

### Frontend Specific
- [ ] Components are modular and reusable
- [ ] I have used the correct fonts (Poppins for headers, Nunito for body)
- [ ] I have applied the brand colors correctly
- [ ] The UI follows the Shopify-inspired clean aesthetic
- [ ] All interactive elements have proper hover states
- [ ] CTAs use the accent orange (#E48B59) appropriately

### Accessibility & SEO
- [ ] The changes meet WCAG 2.1 AA standards
- [ ] All images have appropriate alt text
- [ ] Forms have proper labels and error messages
- [ ] The page has proper meta tags for SEO
- [ ] Color contrast ratios meet accessibility standards

### Performance
- [ ] The changes do not significantly impact page load time
- [ ] Images are optimized and use appropriate formats
- [ ] No unnecessary re-renders in React components
- [ ] Database queries are optimized (no N+1 problems)

## Additional Notes
<!-- Add any additional notes or context about the PR -->