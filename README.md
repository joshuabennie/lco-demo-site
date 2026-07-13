# Legislative Communications Office (LCO) Website

## Overview

The Legislative Communications Office (LCO) Website is a modernized static website for the Louisiana Legislature's Legislative Communications Office. The site presents LCO services, staff information, press resources, credentialing information, social media links, and contact options in a consistent Bootstrap-based layout.

This project has been updated to Bootstrap 5.3.8 and organized for easier long-term maintenance. The current structure favors Bootstrap utilities for layout and spacing while preserving LCO branding, Louisiana legislative identity, custom imagery, and page-specific visual treatments.

---

## Technology Stack

- HTML5
- CSS3
- Bootstrap 5.3.8
- Google Fonts (Inter)
- Vanilla JavaScript (Bootstrap Bundle)

---

## Project Structure

```text
lco-demo-site/
|-- index.html
|-- staff.html
|-- what-we-do.html
|-- press-releases.html
|-- press-credentialing.html
|-- social-media.html
|-- contact.html
|-- css/
|   `-- lco.css
`-- images/
```

### Page Overview

- `index.html`  
  Homepage featuring the LALEGE app, LCO mission messaging, service highlights, and calls to action.

- `staff.html`  
  Staff directory page with team member cards, staff roles, and contact-oriented support information.

- `what-we-do.html`  
  Services page describing LCO communication, media, design, web, and public information support.

- `press-releases.html`  
  Press releases page linking to House and Senate release archives and selected legislative press documents.

- `press-credentialing.html`  
  Press credentialing page with credentialing information and links to official application forms.

- `social-media.html`  
  Social media page featuring official House and Senate social accounts and embedded social content areas.

- `contact.html`  
  Contact page with office information and an embedded JotForm contact form.

- `css/lco.css`  
  Main custom stylesheet for LCO branding, page-specific treatments, shared components, image styling, hover effects, and responsive refinements.

- `images/`  
  Image and media assets used throughout the site, including logos, staff photos, page imagery, and supporting visual assets.

---

## Bootstrap Usage

Bootstrap 5.3.8 is loaded via CDN on the site pages. Layouts primarily use Bootstrap's grid, spacing, and utility systems.

Common Bootstrap patterns used throughout the project include:

- `container`
- `row`
- `col`
- `g-*` spacing utilities
- `d-flex` utilities
- `gap-*` utilities
- `rounded-*` utilities
- `shadow-*` utilities
- responsive display and alignment classes

Spacing and layout should generally be handled through Bootstrap utilities before creating new custom CSS. Custom CSS should be reserved for styling needs that Bootstrap does not directly provide or that are specific to LCO branding and page identity.

---

## CSS Architecture

The main stylesheet, `css/lco.css`, is organized to follow the site from global foundations through page-specific sections and responsive refinements.

Current stylesheet organization:

1. CSS Variables / Design Tokens
2. Global Base Styles
3. Buttons
4. Header / Navigation
5. Shared Layout Helpers
6. Shared Section Headings
7. Page Hero Sections
8. Homepage / App Feature
9. Homepage / Brand Spotlight
10. Homepage / Hero
11. Homepage / Highlights
12. Homepage / Featured Resource
13. Staff / Team Page
14. What We Do / Services Page
15. Press Releases Page
16. Press Credentialing Page
17. Social Media Page
18. Contact Page
19. Footer
20. Responsive Media Queries

Branding, colors, gradients, typography, image treatments, background imagery, custom buttons, and hover effects remain in CSS. General layout, spacing, alignment, and sizing should use Bootstrap utilities where practical.

---

## Development Guidelines

### Before Writing New CSS

1. Check if Bootstrap already provides the feature.

2. Prefer Bootstrap utilities for:

   - spacing
   - alignment
   - flex layouts
   - grid layouts
   - shadows
   - border radius

3. Use custom CSS only when:

   - implementing LCO branding
   - creating custom page treatments
   - adding custom hover effects
   - styling custom imagery
   - defining custom typography

When adding or updating components, keep existing custom class names when they support branding, page identity, image treatment, or shared legislative styling.

---

## Accessibility Notes

- Use meaningful `alt` text for informative images.
- Preserve a logical heading hierarchy on every page.
- Use `rel="noopener noreferrer"` on external links that open with `target="_blank"`.
- Use `loading="lazy"` for non-critical images below the first viewport.
- Keep navigation, buttons, cards, and form embeds usable across desktop, tablet, and mobile layouts.
- Verify keyboard focus states remain visible, especially on custom buttons and card-style links.

---

## Maintenance Notes

- The navbar and footer are repeated across pages. Updates to either should be applied consistently to all HTML files.
- Shared CSS selectors in `css/lco.css` may affect multiple pages. Review all related pages after changing global or shared component styles.
- Test every page after modifying global CSS, navbar markup, footer markup, Bootstrap version references, or shared card patterns.
- Preserve existing page copy, legislative branding, URLs, image paths, phone numbers, email addresses, and third-party embed scripts unless a content owner approves changes.

---

## Version Information

Bootstrap Version: 5.3.8

Last Modernization: Bootstrap 5 migration and CSS reorganization.

---

## Future Enhancements

Suggested future improvements:

- Introduce shared includes or templates for repeated navbar and footer markup.
- Optimize large image, video, and design source assets.
- Perform a CSS dead-code review after confirming all production pages and assets.
- Run a formal accessibility audit.
- Improve performance through responsive images, image compression, caching strategy, and third-party embed review.
