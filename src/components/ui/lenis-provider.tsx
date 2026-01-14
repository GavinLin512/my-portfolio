import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 滾動動畫時長
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 指數衰減曲線，感覺更自然
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true, // 啟用滑鼠滾輪平滑
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
