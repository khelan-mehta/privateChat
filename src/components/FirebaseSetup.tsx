
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const FirebaseSetup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Firebase Setup Required
          </CardTitle>
          <CardDescription className="text-center">
            Please configure Firebase to enable the chat functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              <strong>To get started:</strong>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Create a Firebase project at <a href="https://console.firebase.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://console.firebase.google.com</a></li>
                <li>Enable Authentication with Email/Password</li>
                <li>Create a Firestore database</li>
                <li>Get your Firebase config object</li>
                <li>Update the Firebase configuration in <code className="bg-muted px-1 rounded">src/lib/firebase.ts</code></li>
              </ol>
            </AlertDescription>
          </Alert>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Your Firebase config should look like this:</p>
            <pre className="text-xs bg-background p-2 rounded border overflow-x-auto">
{`const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FirebaseSetup;
