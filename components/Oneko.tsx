"use client";

import { useEffect } from "react";

export default function Oneko() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nekoEl = document.createElement("div");
    nekoEl.id = "oneko";
    nekoEl.setAttribute("aria-hidden", "true");
    Object.assign(nekoEl.style, {
      width: "32px",
      height: "32px",
      position: "fixed",
      pointerEvents: "none",
      imageRendering: "pixelated",
      zIndex: "2147483647",
      backgroundImage: "url(/oneko.gif)",
    });

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N:  [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E:  [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S:  [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W:  [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    let nekoPosX = 32, nekoPosY = 32;
    let mousePosX = 0, mousePosY = 0;
    let frameCount = 0, idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10;

    // Restore persisted position
    try {
      const stored = JSON.parse(window.localStorage.getItem("oneko") ?? "null");
      if (stored) {
        ({ nekoPosX, nekoPosY, mousePosX, mousePosY, frameCount, idleTime, idleAnimation, idleAnimationFrame } = stored);
        nekoEl.style.backgroundPosition = stored.bgPos;
      }
    } catch {}

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    document.body.appendChild(nekoEl);

    function setSprite(name: string, frame: number) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
        const options = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) options.push("scratchWallW");
        if (nekoPosY < 32) options.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) options.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) options.push("scratchWallS");
        idleAnimation = options[Math.floor(Math.random() * options.length)];
      }
      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) { setSprite("tired", 0); break; }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) { idle(); return; }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;
      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    let lastFrameTimestamp: number | undefined;
    let rafId: number;

    function onAnimationFrame(timestamp: number) {
      if (!nekoEl.isConnected) return;
      if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }
      rafId = window.requestAnimationFrame(onAnimationFrame);
    }

    function onMouseMove(e: MouseEvent) {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    }

    function onBeforeUnload() {
      try {
        window.localStorage.setItem("oneko", JSON.stringify({
          nekoPosX, nekoPosY, mousePosX, mousePosY,
          frameCount, idleTime, idleAnimation, idleAnimationFrame,
          bgPos: nekoEl.style.backgroundPosition,
        }));
      } catch {}
    }

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("beforeunload", onBeforeUnload);
    rafId = window.requestAnimationFrame(onAnimationFrame);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("beforeunload", onBeforeUnload);
      nekoEl.remove();
    };
  }, []);

  return null;
}
