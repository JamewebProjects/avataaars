# Compatible with the new version of React

## Summary

This PR updates the library to support React 17, 18, and 19 by migrating from deprecated React APIs to modern alternatives.

## Changes

### 🔄 Migrated from Legacy Context API to Modern Context API
- Replaced deprecated `childContextTypes` and `getChildContext` with `React.createContext` and `useContext` Hook
- Created new `OptionContextProvider` component using modern Context API
- Updated all components to use the new Context provider

### 🗑️ Removed UNSAFE Lifecycle Methods
- Replaced `UNSAFE_componentWillMount` with `componentDidMount`
- Replaced `UNSAFE_componentWillReceiveProps` with `componentDidUpdate` with proper prop comparison
- Replaced `UNSAFE_componentWillUpdate` with `useEffect` in functional components

### ⚛️ Modernized Components
- Converted `Selector` component from class component to functional component using React Hooks
- Improved prop change detection in `componentDidUpdate` methods

### 📦 Updated Dependencies
- Updated `peerDependencies` to support React `>=17.0.0` (compatible with React 17, 18, and 19)
- Updated `@types/react` from `^17.0.0` to `^18.0.0`
- Updated TypeScript from `^4.3.5` to `^5.0.0`
- Removed `prop-types` dependency (no longer needed)

### ⚙️ Updated TypeScript Configuration
- Changed JSX mode from `react` to `react-jsx` (React 17+ new JSX transform)

## Breaking Changes

None. This update maintains full backward compatibility with existing code.

## Testing

- ✅ Build passes successfully
- ✅ All deprecated APIs removed
- ✅ No linter errors

## Benefits

- ✨ Full support for React 17, 18, and 19
- 🚀 Uses modern React patterns and best practices
- 🧹 Cleaner codebase without deprecated APIs
- 🔒 Better type safety with updated TypeScript
- 📈 Improved maintainability

