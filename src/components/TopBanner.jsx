import { Mail, Phone, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-blue-300 text-white flex justify-around px-4 py-4 items-center">
      <div className="flex gap-4 items-center">
        <span className="flex items-center gap-1 font-black text-gray-700">
          <Mail size={20} /> info@academicaedu.com
        </span>
        <span className="flex items-center gap-1 font-black text-gray-700">
          <Phone size={20} fill="white"/> +91 9876543210
        </span>
      </div>
      <div className="flex gap-2">
        {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
          <button key={i} className="bg-white  p-1 rounded">
            <Icon size={18} fill="gray-500"/>
          </button>
        ))}
      </div>
    </div>
  );
}
