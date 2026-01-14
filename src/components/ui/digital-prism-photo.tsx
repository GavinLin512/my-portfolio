import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface DigitalPrismPhotoProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * 數位稜鏡照片組件 (Digital Prism Photo)
 * 
 * 設計概念：
 * - 賽博龐克美學 (Cyberpunk Aesthetic)：使用掃描線、雜訊和幾何切割
 * - 色差故障效果 (Chromatic Aberration)：懸停時 RGB 通道分離 (紅/藍位移)
 * - 科技感邊框：帶有數據標記和切角的邊框設計
 * - "Code is my DNA"：強調技術本質的視覺隱喻
 */
export function DigitalPrismPhoto({
  src,
  alt,
  className,
}: DigitalPrismPhotoProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // 滑鼠位置狀態 (歸一化 -1 到 1)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 計算滑鼠相對於中心的歸一化位置 (-1 到 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // RGB 色差位移量 (hover 時根據滑鼠位置計算)
  const chromaOffset = 12;
  const redOffset = isHovered 
    ? { x: mousePos.x * chromaOffset, y: mousePos.y * chromaOffset }
    : { x: 0, y: 0 };
  const blueOffset = isHovered 
    ? { x: -mousePos.x * chromaOffset, y: -mousePos.y * chromaOffset }
    : { x: 0, y: 0 };

  return (
    <div
      ref={containerRef}
      className={cn("relative group cursor-crosshair select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 外部發光光暈 (Breathing Glow) */}
      <motion.div
        className="absolute inset-0 bg-primary/20 blur-3xl rounded-full z-0"
        animate={{
          scale: isHovered ? 1.2 : [0.9, 1.1, 0.9],
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* 主要容器：應用切角遮罩 (Cut-corner Mask) */}
      <div 
        className="relative z-10 w-full h-full bg-black/80 shadow-2xl"
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
        }}
      >
        {/* 背景網格裝飾 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,6px_100%] pointer-events-none" />

        {/* 基礎影像層 (Base Image) - 放在底層 */}
        <motion.img
          src={src}
          alt={alt}
          className="absolute inset-0 z-[2] w-full h-full object-cover"
          animate={{
            filter: isHovered ? "grayscale(0%) contrast(1.1)" : "grayscale(20%) contrast(1)",
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* 紅色通道層 (Red Channel) - 只在 hover 時顯示位移 */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-[-20px] z-[3] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.6,
                x: redOffset.x,
                y: redOffset.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 0.2 },
                x: { type: "spring", stiffness: 150, damping: 15 },
                y: { type: "spring", stiffness: 150, damping: 15 },
              }}
              style={{ mixBlendMode: "lighten" }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(100%) brightness(1.2)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* 紅色疊加層 */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  backgroundColor: "rgba(255, 0, 0, 0.8)",
                  mixBlendMode: "multiply",
                }} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 藍色通道層 (Blue Channel) - 只在 hover 時顯示位移 */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-[-20px] z-[3] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.6,
                x: blueOffset.x,
                y: blueOffset.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 0.2 },
                x: { type: "spring", stiffness: 150, damping: 15 },
                y: { type: "spring", stiffness: 150, damping: 15 },
              }}
              style={{ mixBlendMode: "lighten" }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(100%) brightness(1.2)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* 藍色/青色疊加層 */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  backgroundColor: "rgba(0, 200, 255, 0.8)",
                  mixBlendMode: "multiply",
                }} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 掃描線紋理 (Scanlines) */}
        <div 
          className="absolute inset-0 z-[4] pointer-events-none opacity-40"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />
        
        {/* 數據干擾閃爍 (Glitch Overlay) - 偶爾出現 */}
        <motion.div
          className="absolute inset-0 z-[5] bg-white/5 pointer-events-none"
          animate={{
            opacity: [0, 0, 0, 0.15, 0, 0, 0.08, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.9, 0.92, 0.94, 0.96, 0.98, 0.99, 1],
            ease: "linear",
          }}
        />
      </div>

      {/* 科技邊框裝飾 (Tech Border Overlay) */}
      <div 
        className="absolute inset-[-4px] z-20 pointer-events-none border border-primary/30"
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
        }}
      />
      
      {/* 邊角裝飾 (Corner Accents) */}
      <div className="absolute top-[-4px] left-[10%] w-12 h-[2px] bg-primary z-20" />
      <div className="absolute bottom-[-4px] right-[10%] w-12 h-[2px] bg-primary z-20" />
      <div className="absolute top-[10%] left-[-4px] w-[2px] h-12 bg-primary z-20" />
      <div className="absolute bottom-[10%] right-[-4px] w-[2px] h-12 bg-primary z-20" />

      {/* 數據標籤 (Data Label) */}
      <motion.div
        className="absolute bottom-4 right-4 z-30 flex flex-col items-end gap-1 opacity-80"
        animate={{ opacity: isHovered ? 1 : 0.5 }}
      >
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-primary/80">SYSTEM.ONLINE</span>
        </div>
        <div className="text-[8px] font-mono text-white/40">ID: 89-72-XJ</div>
      </motion.div>
    </div>
  );
}
