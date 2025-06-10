
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthForm from '@/components/Auth/AuthForm';
import ChatInterface from '@/components/Chat/ChatInterface';
import FirebaseSetup from '@/components/FirebaseSetup';
import { isFirebaseConfigured } from '@/lib/firebase';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show Firebase setup instructions if not configured
  if (!isFirebaseConfigured()) {
    return <FirebaseSetup />;
  }

  // Show auth form if user is not logged in
  if (!user) {
    return <AuthForm />;
  }

  // Show chat interface if user is logged in
  return <ChatInterface />;
};

export default Index;
