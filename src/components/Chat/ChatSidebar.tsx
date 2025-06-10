
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, User } from 'lucide-react';

interface ChatSidebarProps {
  currentRoom: string;
  onRoomChange: (room: string) => void;
  onLogout: () => void;
  userEmail: string;
}

const ChatSidebar = ({ currentRoom, onRoomChange, onLogout, userEmail }: ChatSidebarProps) => {
  const chatRooms = [
    { id: 'general', name: 'General', description: 'General discussion' },
    { id: 'random', name: 'Random', description: 'Random conversations' },
    { id: 'tech', name: 'Tech Talk', description: 'Technology discussions' },
    { id: 'announcements', name: 'Announcements', description: 'Important updates' }
  ];

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ChatApp
        </h1>
      </div>

      {/* Chat Rooms */}
      <ScrollArea className="flex-1 p-2">
        <div className="space-y-1">
          <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Channels
          </div>
          {chatRooms.map((room) => (
            <Button
              key={room.id}
              variant={currentRoom === room.id ? "secondary" : "ghost"}
              className="w-full justify-start h-auto p-2 text-left"
              onClick={() => onRoomChange(room.id)}
            >
              <div className="flex items-center gap-2 w-full">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{room.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {room.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-border">
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium truncate">{userEmail}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onLogout}
            className="w-full"
          >
            Sign Out
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ChatSidebar;
