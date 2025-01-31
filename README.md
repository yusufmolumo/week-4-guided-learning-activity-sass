# Modern Portfolio Website

A responsive portfolio website built with SASS/SCSS, showcasing modern design principles and best practices in web development.

## 🚀 Features

- Responsive design that works across all devices
- Modern, clean aesthetic with smooth animations
- Modular SCSS architecture using the 7-1 pattern
- Custom mixins for repetitive styles
- Fluid typography using CSS clamp
- CSS Grid and Flexbox for layouts
- Dark/Light theme support

## 🛠 Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yusufmolumo/week-4-guided-learning-activity-sass.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the SASS compiler:
```bash
npm run sass-watch
```

4. Open `index.html` in your browser

## 🎨 SASS Features Used

### Variables
- Custom color palette with semantic naming
- Typography scale using CSS clamp
- Spacing units and breakpoints

### Mixins
- Responsive breakpoints
- Flexbox and Grid utilities
- Typography styles
- Button variations

### Functions
- Color manipulation for hover states
- Fluid typography calculation
- Spacing calculations

### Partials
The project follows the 7-1 pattern for SCSS organization:
```
scss/
|
|– abstracts/
|   |– _variables.scss    # Variables
|   |– _functions.scss    # Functions
|   |– _mixins.scss      # Mixins
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _forms.scss       # Forms
|   |– _cards.scss       # Cards
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _about.scss       # About specific styles
|   |– _projects.scss    # Projects specific styles
|   |– _contact.scss     # Contact specific styles
|
|– themes/
|   |– _theme.scss       # Default theme
|
|– vendors/
|   |– _normalize.scss   # Normalize.css
|
`– main.scss             # Main file
```

## 📱 Responsive Design
The website uses a mobile-first approach with breakpoints at:
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 🎯 Design Decisions
- Used a minimalist design approach to highlight content
- Implemented subtle animations for better user experience
- Created a consistent visual hierarchy using typography and spacing
- Used CSS Grid for project layout and Flexbox for component alignment
- Implemented dark/light theme with smooth transitions

## 📝 License
MIT License