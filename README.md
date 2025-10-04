# CS6.302 Software System Development - Course Website

A modern, responsive course website for the Software System Development course at IIIT Hyderabad (Monsoon 2025). This project showcases a clean, professional design with interactive features and comprehensive course information.

## 📋 Project Overview

This is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript that serves as the official course website for CS6.302. The website provides students with all essential course information including schedules, assignments, staff details, and policies.

## 🎯 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle**: Users can switch between light and dark modes with preference persistence
- **Smooth Scrolling Navigation**: Smooth scrolling between sections with active link highlighting
- **Real-time Clock**: Live clock display in the footer
- **Scroll-to-Top Button**: Convenient navigation back to the top of the page
- **Interactive Tables**: Hover effects and status badges for better user experience

### Content Sections
- **Hero Section**: Course introduction with key statistics
- **About Course**: Detailed course description and learning objectives
- **Course Policy**: Academic policies, grading distribution, and AI tool usage guidelines
- **Lecture Schedule**: Complete schedule with materials and status tracking
- **Lab Schedule**: Lab sessions with topics and resources
- **Exams & Assignments**: Assignment deadlines and exam information
- **Staff Information**: Instructor and TA details with contact information

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, flexbox, and grid layouts
- **Vanilla JavaScript**: No external frameworks, pure ES6+ JavaScript
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter and JetBrains Mono fonts for typography

## 📁 Project Structure

```
Q2/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with CSS custom properties
├── script.js           # JavaScript functionality
└── README.md           # This documentation file
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Slate (#64748b) - Supporting text
- **Accent**: Amber (#f59e0b) - Highlights and warnings
- **Success**: Green (#10b981) - Completed states
- **Error**: Red (#ef4444) - Error states

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (Google Fonts)
- **Responsive Typography**: Uses clamp() for fluid scaling

### Layout
- **Container Max Width**: 1280px
- **Grid System**: CSS Grid with auto-fit columns
- **Spacing**: Consistent spacing using CSS custom properties
- **Border Radius**: Rounded corners with consistent radius values

## ⚡ JavaScript Features

### Core Functionality
1. **Theme Management**: Toggle between light/dark modes with localStorage persistence
2. **Scroll Effects**: Header background change and scroll-to-top button visibility
3. **Navigation**: Smooth scrolling with active section highlighting
4. **Animations**: Intersection Observer for scroll-triggered animations
5. **Interactive Elements**: Hover effects on tables and loading states for external links

### Event Handlers
- Window scroll events for header and scroll-to-top button
- Click events for theme toggle and navigation
- Keyboard accessibility for scroll-to-top button
- Mobile menu placeholder for future enhancement

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

### Mobile Optimizations
- Collapsible navigation menu
- Stacked hero statistics
- Adjusted padding and font sizes
- Touch-friendly button sizes

## 🎭 Animations & Effects

### CSS Animations
- **Fade In**: Page load animation
- **Slide Up**: Section entrance animations
- **Loading**: Skeleton loading animation
- **Hover Effects**: Transform and shadow transitions

### JavaScript Animations
- Smooth scrolling between sections
- Progressive enhancement with opacity transitions
- Table row hover effects with transform

## 🔧 Customization

### CSS Custom Properties
The design system uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
    /* ... more variables */
}
```

### Dark Mode
Dark mode is implemented by overriding CSS custom properties:

```css
body.dark-mode {
    --primary-color: #60a5fa;
    --bg-primary: #0f172a;
    --text-primary: #f1f5f9;
    /* ... more overrides */
}
```

## 📊 Course Information

### Course Details
- **Course Code**: CS6.302
- **Title**: Software System Development
- **Institution**: IIIT Hyderabad
- **Semester**: Monsoon 2025
- **Total Lectures**: 29
- **Total Lab Sessions**: 14

### Schedule
- **Lectures**: Tuesdays and Fridays, 8:30 AM - 9:55 AM
- **Labs**: Thursdays/Fridays, 2:00 PM - 3:00 PM (Extended: 2:00 PM - 5:00 PM on Fridays)
- **Venue**: Lecture Hall H-205 (Lectures), SH1 (Labs)

### Grading Distribution
- Assignments (4): 15%
- Lab Activities (14): 15%
- Practice and Class Activity (5): 10%
- Quiz (2): 10%
- Mid Exam (1): 10%
- Final Exam (Team Project): 40%

## 🚀 Getting Started

### Prerequisites
- Modern web browser with ES6+ support
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, serve files through a local server

### Development
- Edit `index.html` for content changes
- Modify `style.css` for styling updates
- Update `script.js` for functionality changes

## 🔗 External Dependencies

### CDN Resources
- **Google Fonts**: Inter and JetBrains Mono
- **Font Awesome**: Icons (v6.4.0)
- **External Links**: Course materials and resources

### External Services
- GitHub Pages (hosting)
- Google Docs Viewer (PDF viewing)
- Notion (course notes)

## 📝 Content Management

### Updating Course Information
1. **Lecture Schedule**: Update the table in the schedule section
2. **Lab Schedule**: Modify the lab sessions table
3. **Assignments**: Update the exams and assignments table
4. **Staff Information**: Update instructor and TA details

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `style.css`
3. Add navigation link if needed
4. Update JavaScript for any interactive features

## 🎯 Future Enhancements

### Planned Features
- Mobile menu implementation
- Search functionality
- Course calendar integration
- Student portal integration
- Assignment submission system

### Technical Improvements
- Progressive Web App (PWA) features
- Service worker for offline functionality
- Performance optimizations
- Accessibility improvements

## 📄 License

This project is part of the CS6.302 course at IIIT Hyderabad. All course materials and content are property of the respective instructors and institution.

## 👥 Contributors

- **Course Instructors**: Dr. Abhishek Singh, Dr. Sai Anirudh Karre
- **Teaching Assistants**: Chirag Dhamija, Tejas Cavale, Divyansh Pandey, Aaditya Vardhan Narain, Kunal Kamalkishore Bhosikar, Chandrasekar S, Ashwani Raj, Hiya Bhatt
- **Website Development**: Course staff and students

## 📞 Contact

For course-related queries:
- **Email**: saianirudh.karre[at]iiit.ac.in
- **Office Hours**: 15 minutes before every class (8:15 AM)
- **Course Portal**: [Courses Portal](https://courses.iiit.ac.in/course/view.php?id=5324)

---

*Last updated: September 2025*
