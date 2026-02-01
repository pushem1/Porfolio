"use client";

import React from "react";
import { motion } from "@/components/motion";
import { cn } from "@/lib/utils";

interface CryptoIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

export interface Web3MediaHeroProps {
  id?: string;
  logo?: string | React.ReactNode;
  showHeader?: boolean;
  customBackground?: React.ReactNode;
  navigation?: Array<{
    label: string;
    onClick?: () => void;
  }>;
  contactButton?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  highlightedText?: string;
  subtitle: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  cryptoIcons?: CryptoIcon[];
  trustedByText?: string;
  brands?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export function Web3MediaHero({
  id,
  logo = "Web3 Media",
  showHeader = true,
  customBackground,
  navigation = [
    { label: "Home" },
    { label: "Gallery" },
    { label: "Cases" },
    { label: "About us" },
  ],
  contactButton,
  title,
  highlightedText = "Web3 Visibility",
  subtitle,
  ctaButton,
  cryptoIcons = [],
  trustedByText = "Trusted by",
  brands = [],
  className,
  children,
}: Web3MediaHeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={
        !customBackground
          ? {
              background:
                "linear-gradient(180deg, #0A0500 0%, #1A0F00 50%, #2A1500 100%)",
            }
          : undefined
      }
      role="banner"
      aria-label="Hero section"
    >
      {/* Background: custom (e.g. neural + gradient) or default radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-20" aria-hidden="true">
        {customBackground ? (
          customBackground
        ) : (
          <div
            className="absolute"
            style={{
              width: "1200px",
              height: "1200px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255, 153, 0, 0.3) 0%, rgba(255, 153, 0, 0) 70%)",
              filter: "blur(100px)",
            }}
          />
        )}
      </div>

      {/* Header */}
      {showHeader && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
          style={{
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div
            className="font-bold text-xl tracking-tight text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {typeof logo === "string" ? (
              <>
                <span className="font-normal">{logo.split(" ")[0]}</span>
                <span className="font-bold">{logo.split(" ")[1] || ""}</span>
              </>
            ) : (
              logo
            )}
          </div>

          <nav
            className="hidden lg:flex flex-row items-center gap-8"
            aria-label="Main navigation"
          >
            {navigation.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="hover:opacity-70 transition-opacity text-white text-[15px] font-normal"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {contactButton && (
            <button
              onClick={contactButton.onClick}
              className="px-6 py-2.5 rounded-full transition-all hover:scale-105 border border-white/30 text-white text-[15px] font-normal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {contactButton.label}
            </button>
          )}
        </motion.header>
      )}

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          {/* Floating Crypto Icons */}
          {cryptoIcons.map((crypto, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center gap-2"
              style={{
                left: crypto.position.x,
                top: crypto.position.y,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 + index * 0.1 },
                scale: { duration: 0.6, delay: 0.3 + index * 0.1 },
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className="flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              >
                {crypto.icon}
              </div>
              <span className="text-xs font-semibold text-white uppercase">
                {crypto.label}
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs font-normal text-white/60 tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {typeof logo === "string" ? logo : "WEBDZ SERVICES"}
            </motion.div>

            <h1
              className="font-medium text-white tracking-tight leading-tight text-[clamp(32px,5vw,64px)]"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
              <br />
              <span className="font-semibold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                {highlightedText}
              </span>
            </h1>

            <p
              className="font-normal text-white/70 leading-relaxed max-w-[500px] text-[clamp(14px,2vw,16px)]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {subtitle}
            </p>

            {ctaButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                onClick={ctaButton.onClick}
                className="px-8 py-3 rounded-md transition-all border border-white/30 text-white text-[15px] font-medium shadow-lg shadow-primary/20"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {ctaButton.label}
              </motion.button>
            )}
          </motion.div>
        </div>
      )}

      {/* Brand Slider */}
      {brands.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden pt-16 pb-16"
        >
          <div className="text-center mb-8">
            <span
              className="text-xs font-normal text-white/50 tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {trustedByText}
            </span>
          </div>

          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[200px] bg-gradient-to-r from-background to-transparent"
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[200px] bg-gradient-to-l from-background to-transparent"
            aria-hidden
          />

          <motion.div
            className="flex items-center gap-20 pl-20"
            animate={{
              x: [0, -(brands.length * 200)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: brands.length * 5,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity w-[120px] h-10"
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
