import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kenyan-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-6 text-sm">
            <a
              href="tel:+254703379980"
              className="flex items-center space-x-2 hover:text-earth-gold transition-colors"
            >
              <Phone size={16} />
              <span>+254703379980</span>
            </a>
            <a
              href="mailto:sidzac33@gmail.com"
              className="flex items-center space-x-2 hover:text-earth-gold transition-colors"
            >
              <Mail size={16} />
              <span>sidzac33@gmail.com</span>
            </a>
            <a
              href="https://chat.whatsapp.com/EYZKqhSV2OqIJSsR0WcPYl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-earth-gold transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Group</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Virtual Village Storyteller. Sharing authentic Kenyan stories with the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;