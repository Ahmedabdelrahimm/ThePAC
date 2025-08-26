# The PAC CrossFit - Frontend Boilerplate

A modern, responsive React application for The PAC CrossFit gym with gamification features, session booking, and membership management.

## 🏋️ Features

### Core Features

- **Session Management**: View upcoming CrossFit sessions with real-time capacity tracking
- **Pricing Plans**: Multiple membership options with detailed feature breakdowns
- **Gamification Dashboard**: Rank system, progress tracking, and achievement rewards
- **Responsive Design**: Mobile-first approach with modern UI/UX

### Gamification System

- **Rank Progression**: Bronze → Silver → Gold → Elite
- **XP Tracking**: Experience points system with visual progress bars
- **Streak Counter**: Track consecutive workout days
- **Achievement Rewards**: Unlock benefits at each rank level

### UI Components

- `SessionCard`: Displays session details with capacity indicators
- `PricingCard`: Shows membership plans with feature lists
- `RankProgressBar`: Visual gamification progress tracker
- `Navbar`: Responsive navigation with active state indicators

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd the-pac-crossfit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── SessionCard.js  # Session display card
│   ├── PricingCard.js  # Pricing plan card
│   └── RankProgressBar.js # Gamification progress
├── screens/            # Page components
│   ├── Home.js         # Landing page
│   ├── Pricing.js      # Pricing plans page
│   └── Dashboard.js    # User dashboard
├── data/               # Dummy JSON data
│   ├── sessions.json   # Session information
│   ├── pricing.json    # Membership plans
│   └── rewards.json    # Gamification data
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Black and white monochromatic theme
- **Secondary**: Gray scale (`#f8fafc` to `#0f172a`)
- **Rank Colors**:
  - Bronze: `#525252` (Dark gray)
  - Silver: `#a3a3a3` (Medium gray)
  - Gold: `#d4d4d4` (Light gray)
  - Elite: `#f5f5f5` (Very light gray)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Primary (black) and secondary (gray) variants
- **Progress Bars**: Animated with black gradient fills

## 📊 Data Structure

### Sessions

```json
{
  "id": 1,
  "time": "6:00 AM",
  "capacity": 20,
  "spotsLeft": 12,
  "instructor": "Coach Mike",
  "type": "CrossFit",
  "difficulty": "Intermediate"
}
```

### Pricing Plans

```json
{
  "id": 1,
  "plan": "Drop-in",
  "price": "$15",
  "description": "Single session access",
  "features": ["One CrossFit session", "Equipment access"],
  "popular": false
}
```

### User Profile

```json
{
  "currentRank": "Silver",
  "currentXP": 1250,
  "nextRankXP": 2500,
  "streak": 7,
  "totalSessions": 45,
  "favoriteWorkout": "CrossFit",
  "joinDate": "2024-01-15"
}
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm eject` - Eject from Create React App

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Gamification Features

### Rank System

1. **Bronze** (0 XP): 5% off merchandise
2. **Silver** (1000 XP): 10% off + free protein shake
3. **Gold** (2500 XP): Free session + 15% off
4. **Elite** (5000 XP): Free month + 20% off + guest pass

### Progress Tracking

- Visual progress bars with animations
- XP counter with next rank preview
- Streak tracking with flame icons
- Achievement badges and rewards

## 🔧 Customization

### Adding New Sessions

Edit `src/data/sessions.json` to add new session times and details.

### Modifying Pricing

Update `src/data/pricing.json` to change membership plans and features.

### Adjusting Rewards

Modify `src/data/rewards.json` to customize the gamification system.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team.

---

**The PAC CrossFit** - Transform your fitness journey with our premium CrossFit experience! 💪
