import { Redirect } from 'expo-router';

// This component will automatically redirect the user to the '(tabs)' layout.
// This is a robust way to ensure the correct initial screen is loaded,
// bypassing any potential caching issues with the router's default behavior.
export default function Index() {
  return <Redirect href="/(tabs)" />;
}

