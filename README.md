# 📝 Expo Navigation Example 
## 💡 TL;DR - tabs and modals navigation nested within stacks navigation using expo all around. 

This repository contains an example of using Expo Router to set up a navigation system for an app with separate external and internal page stacks. It demonstrates how to implement tab navigation inside the internal stack while keeping the external stack (e.g., authentication pages) separate. 

## ⚠️ Problem

I encountered several issues while working with this app structure that involved routing and modal navigation across two main flows: external pages (e.g., authentication) and internal app pages (after sign-in). Here’s a summary of the problems I faced and the structure of the app:

### 🗂️📂 App Structure

- **app/_layout.js**: Controls the external pages (e.g., authentication flow).
- **app/(tabs)_layout.js**: Controls the internal app pages (after sign-in) and includes the tab navigation.
- **Tab Screens**: Contains the main app functionality (e.g., home, music) within the `app/(tabs)` directory.
- **External Screens**: Responsible for sign-in pages and other pre-sign-in content, located in the `app/_layout` directory.

```
ExpoNavigationStackExample
├── app
│   ├── auth
│   │   ├── _layout.jsx
│   │   ├── login.jsx
│   │   ├── signUp.jsx
│   │   └── welcome.jsx
│   ├── modals
│   │   ├── _layout.jsx
│   │   └── exampleModal.jsx
│   ├── tabs
│   │   ├── _layout.jsx
│   │   ├── anotherPage.jsx
│   │   ├── home.jsx
│   │   └── thirdPage.jsx
│   ├── _layout.jsx
│   └── index.jsx
├── assets
├── components
│   └── tabBar.jsx
├── app.json
├── package.json
└── ...
```


### 🐛 Issues Encountered

- **Back Navigation Issues**: The `router.back()` didn’t work as expected. For instance, swiping left on iOS returned me to the external authentication pages instead of staying within the internal app pages. I wanted back navigation to stay within the app unless explicitly directed to return to the external pages.
  
- **Modal Navigation**: Modals were not behaving as expected across different navigation stacks. I wanted to open modals within both the external and internal flows, but some pages were not properly defined in the stacks, leading to issues with modal presentation.

- **Tab Screen Back Navigation**: When using `router.back()` within a tab screen, I was always sent to the first tab, even when I reordered the tabs. The goal was for back navigation to stay within the current stack and not always reset to the first tab.

### ⭐ Desired Outcome

The goal was to achieve the following:

- Ensure back navigation works correctly within both the external and internal app flows without returning to the external pages unless explicitly desired.
- Implement proper modal navigation across both flows.
- Make sure back navigation works as expected within the tab screens, staying within the current screen stack.

## 🛠️ Installation

To get started, follow these steps:

1. **Initialize the app with Expo**:
    ```bash
    npx create-expo-app react-native-expo-navigation-example
    ```

2. **Install dependencies**:
    - **Expo Router**:
      ```bash
      npm install expo-router
      ```

    - **TypeScript dependencies**:
      ```bash
      npm install typescript @types/react @types/react-native
      ```

    - **React Native SVG (for icons)**:
      ```bash
      npm install react-native-svg
      ```

    - **Splash Screen**:
      ```bash
      npm install expo-splash-screen
      ```

3. **Run the app**:
    ```bash
    npx expo start
    ```

## Conclusion

This example should serve as a useful starting point for implementing navigation with Expo Router, where you have a clear separation between external authentication flows and internal app functionality, including tab navigation. You can adapt this approach to any app that requires a similar structure, whether it's for a social media app or any other type of app.
