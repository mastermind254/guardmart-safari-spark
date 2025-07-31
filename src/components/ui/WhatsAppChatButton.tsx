import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from './button';

interface WhatsAppChatButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export const WhatsAppChatButton: React.FC<WhatsAppChatButtonProps> = ({
  phoneNumber = "+254700000000",
  message = "Hi! I need help with my Guardmart order.",
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:support@guardmart.co.ke', '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Expanded Contact Options */}
      {isExpanded && (
        <div className="mb-4 bg-card border border-border rounded-xl shadow-strong p-4 animate-scale-in">
          <div className="space-y-3">
            <h3 className="font-medium text-foreground mb-3">Contact Guardmart</h3>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full justify-start gap-3 hover:bg-green-50 hover:border-green-300"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              WhatsApp Support
            </Button>
            
            <Button
              onClick={handlePhoneClick}
              variant="outline"
              className="w-full justify-start gap-3 hover:bg-blue-50 hover:border-blue-300"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              Call Us
            </Button>
            
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="w-full justify-start gap-3 hover:bg-purple-50 hover:border-purple-300"
            >
              <Mail className="h-4 w-4 text-purple-600" />
              Email Support
            </Button>
          </div>
        </div>
      )}

      {/* Main Chat Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`h-14 w-14 rounded-full shadow-strong animate-pulse-glow transition-all duration-300 ${
          isExpanded 
            ? 'bg-destructive hover:bg-destructive/90' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isExpanded ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Notification Dot */}
      {!isExpanded && (
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full animate-ping">
          <div className="absolute inset-0 h-4 w-4 bg-destructive rounded-full"></div>
        </div>
      )}
    </div>
  );
};