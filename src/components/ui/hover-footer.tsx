"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";
import Link from "next/link";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="var(--ghana-gold)" />
              <stop offset="25%" stopColor="var(--ghana-red)" />
              <stop offset="50%" stopColor="var(--ghana-green)" />
              <stop offset="75%" stopColor="#80eeb4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0.05 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[var(--ghana-gold)] font-[helvetica] text-7xl font-bold 
        dark:stroke-[var(--ghana-gold)]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(15, 15, 17, 0.4) 50%, rgba(200, 150, 12, 0.2) 100%)",
      }}
    />
  );
};

export function HoverFooter() {
  const footerLinks = [
    {
      title: "Organisation",
      links: [
        { label: "About Oxzy", href: "/#about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Mission", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Programmes",
      links: [
        { label: "YES 2026 Summit", href: "/summit" },
        { label: "Entrepreneurs Club", href: "/club" },
        {
          label: "Youth Government",
          href: "/youth-government",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "hello@oxzy.org",
      href: "mailto:hello@oxzy.org",
    },
    {
      icon: <Phone size={16} />,
      text: "Accra, Ghana",
      href: "tel:+233000000000",
    },
    {
      icon: <MapPin size={16} />,
      text: "Roman Ridge, Accra",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "https://instagram.com/oxzyorg" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
    { icon: <Globe size={18} />, label: "Globe", href: "https://oxzy.org" },
  ];

  return (
    <footer className="bg-[#0f0f18] relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <img 
                src="https://res.cloudinary.com/dv1ignqxh/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-27_at_8.36.39_PM_k5cnpy" 
                alt="Oxzy" 
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-white text-2xl font-black tracking-tight">Oxzy</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8">
              Oxzy is an organisation of young innovators building sustainable communities through innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--ghana-gold)] hover:bg-white/10 transition-all border border-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2 & 3: Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-[var(--ghana-gold)] group-hover:w-3 transition-all"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-6">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--ghana-gold)]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">
                      {i === 0 ? "Email" : i === 1 ? "Location" : "Office"}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Reveal Text (Subtle Background) */}
        <div className="hidden lg:block h-32 mb-12 opacity-10 pointer-events-none select-none">
          <TextHoverEffect text="OXZY" />
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Oxzy Organisation. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600">
              <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <FooterBackgroundGradient />
    </footer>
  );
}
