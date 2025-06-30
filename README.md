# Microsoft Copilot ROI Calculator - Firebase Edition

A comprehensive ROI calculator for Microsoft Copilot products powered by Firebase for real-time analytics and data management.

## 🔥 Firebase Features

### Real-time Database
- **Firestore**: Real-time data synchronization
- **Analytics**: Live user tracking and behavior analysis
- **Cloud Functions**: Serverless data processing
- **Hosting**: Fast, global CDN hosting

### Firebase Services Integrated
- ✅ **Firebase Analytics**: Real-time user tracking
- ✅ **Firestore Database**: Document-based data storage
- ✅ **Firebase Hosting**: Global CDN deployment
- ✅ **Cloud Storage**: File uploads and management

## 🚀 Quick Start

### Firebase Setup

1. **Create Firebase Project**
```bash
npm install -g firebase-tools
firebase login
firebase init
```

2. **Configure Firebase**
- Update `src/lib/firebase.js` with your project credentials
- Set up Firestore database
- Enable Analytics
- Configure hosting

3. **Environment Variables**
Create `.env` file:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Firebase Emulator (Optional)**
```bash
firebase emulators:start
```

## 📊 Firebase Integration

### Firestore Collections
- `questionnaire_responses` - User assessment data
- `roi_calculations` - ROI calculation results
- `analytics` - Custom event tracking
- `job_role_benchmarks` - Performance benchmarks
- `page_views` - Page view analytics

### Analytics Features
- **Real-time Tracking**: Live user behavior
- **Event Tracking**: Custom events and conversions
- **Audience Insights**: User demographics and interests
- **Performance Monitoring**: App performance metrics

### Custom Events
- `roi_calculation_completed`
- `questionnaire_completed`
- `page_view`
- `module_selected`
- `report_downloaded`

## 🌐 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy --only hosting
```

### Vercel (Alternative)
```bash
npm run build
vercel --prod
```

### Netlify (Alternative)
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🛡️ Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questionnaire_responses/{document} {
      allow read, write: if true; // Public access
    }
    match /roi_calculations/{document} {
      allow read, write: if true; // Public access
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

## 📱 Progressive Web App

Firebase automatically provides:
- Offline caching
- Background sync
- Push notifications
- App install prompts

### Performance
- Global CDN hosting
- Automatic compression
- Image optimization
- Lazy loading

## 🎯 Features

### Core Functionality
- ✅ ROI Calculator with 5 Microsoft Copilot products
- ✅ Interactive questionnaires with AI suggestions
- ✅ Detailed PDF and PowerPoint report generation
- ✅ Community statistics and benchmarking
- ✅ Real-time analytics and tracking

### Firebase-Powered Features
- 🔥 Real-time data synchronization
- 📊 Live analytics dashboard
- ⚡ Instant report generation
- 🌐 Global CDN hosting
- 📱 Progressive Web App capabilities

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/firebase-enhancement`)
3. Commit changes (`git commit -am 'Add Firebase feature'`)
4. Push to branch (`git push origin feature/firebase-enhancement`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support and questions:
- 📧 Email: support@m365.show
- 💬 LinkedIn: [M365 Show](https://www.linkedin.com/school/m365-show/)
- 👨‍💻 Creator: [Mirko Colemberg](https://www.linkedin.com/in/m365-summit/)

---

**Built with ❤️ for productivity optimization**

🔥 Firebase • ⚡ React • 🎨 Tailwind CSS