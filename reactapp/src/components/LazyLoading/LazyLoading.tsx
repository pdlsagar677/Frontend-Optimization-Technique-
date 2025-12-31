// Perfect! Now let’s go through **React lazy loading**, which is another key optimization for large applications. I’ll explain **what it is**, **why it matters**, and give a **realistic example** you can use immediately.

// ---

// # 1. What is Lazy Loading?

// * **Lazy loading** means **loading a component only when it’s needed**, instead of loading everything upfront.
// * Reduces **initial bundle size** → **faster page load**
// * Ideal for **large components, dashboards, pages, modals, charts**

// Think of it as:

// > “Don’t download or execute this code until the user actually needs it.”

// ---

// # 2. How React Implements It

// React provides two APIs:

// 1. `React.lazy()` – to **define a lazily loaded component**
// 2. `Suspense` – to **show a fallback UI while loading**

// ---

// ### Basic Syntax

// ```tsx
// const LazyComponent = React.lazy(() => import("./MyComponent"));

// function App() {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </React.Suspense>
//   );
// }
// ```

// * `fallback` shows something while the component is downloading
// * Component code is **split into a separate chunk** by bundlers like Vite, Webpack

// ---

// # 3. Real-Time Example (Dashboard with Lazy Pages)

// Imagine a **multi-page admin panel**:

// * Home Page → small, quick
// * Analytics Page → heavy charts and tables
// * Settings Page → rarely used

// We **lazy load** heavy pages.

// ---

// ### File Structure

// ```
// src/
//  ├── pages/
//  │   ├── Home.tsx
//  │   ├── Analytics.tsx
//  │   └── Settings.tsx
//  └── App.tsx
// ```

// ---

// ### `Home.tsx`

// ```tsx
// export default function Home() {
//   console.log("Home rendered");
//   return <h2>Home Page</h2>;
// }
// ```

// ### `Analytics.tsx` (Heavy Page)

// ```tsx
// export default function Analytics() {
//   console.log("Analytics rendered");
//   return <h2>Analytics Page - heavy charts loaded</h2>;
// }
// ```

// ### `Settings.tsx`

// ```tsx
// export default function Settings() {
//   console.log("Settings rendered");
//   return <h2>Settings Page</h2>;
// }
// ```

// ---

// ### `App.tsx` with Lazy Loading

// ```tsx
// import React, { Suspense, lazy } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // Lazy load heavy pages
// const Home = lazy(() => import("./pages/Home"));
// const Analytics = lazy(() => import("./pages/Analytics"));
// const Settings = lazy(() => import("./pages/Settings"));

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/analytics">Analytics</Link> | <Link to="/settings">Settings</Link>
//       </nav>

//       <Suspense fallback={<div>Loading Page...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;
// ```

// ---

// # 4. How It Works in Real Time

// 1. User visits `/` → **only Home bundle is loaded** → fast load
// 2. User clicks `/analytics` → **Analytics chunk is fetched on demand** → Suspense shows fallback until ready
// 3. User clicks `/settings` → **Settings chunk is fetched** → fallback shown

// **Console logs show when pages render** → you can confirm lazy loading in action.

// ---

// # 5. Real-World Use Cases

// * Admin dashboards with multiple pages
// * Routes with large chart libraries (`recharts`, `chart.js`)
// * Modal dialogs or popups that load rarely
// * Third-party components or libraries that are heavy

// ---

// # 6. Important Notes

// * **Always wrap lazy-loaded components in `<Suspense>`**
// * You can lazy load **routes, components, or even small parts of a page**
// * Use in combination with **React.memo/useMemo/useCallback** to maximize performance

// ---

// If you want, I can make a **full real dashboard example combining**:

// * Lazy loading
// * React.memo
// * useMemo
// * useCallback

// …so you can **see all optimizations working together** in one app.

// Do you want me to do that?


import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lazy load heavy pages
const Home = lazy(() => import("./pages/Home"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/analytics">Analytics</Link> | <Link to="/settings">Settings</Link>
      </nav>

      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
