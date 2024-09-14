"use client";

import React, { useState, useEffect, useRef } from "react";

const TextCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [textHeight, setTextHeight] = useState(20);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const isText = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6"].includes(
        e.target.tagName,
      );
      setIsHoveringText(isText);
      if (isText) {
        const computedStyle = window.getComputedStyle(e.target);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        setTextHeight(
          isNaN(lineHeight) ? parseFloat(computedStyle.fontSize) : lineHeight,
        );
      }
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        left: 0,
        top: 0,
        transition: "width, height, border-radius, background-color",
      }}
    >
      {isHoveringText ? (
        <div
          // Text Cursor
          style={{
            width: "3px",
            height: `${textHeight}px`,
            backgroundColor: "rgba(0, 143, 255, 1)",
            transform: "translate(-50%, -50%)",
            transition: "border-radius 0.1s ease-in",
          }}
        />
      ) : (
        <div
          // Grey-Dot Cursor
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            transform: "translate(-50%, -50%)",
            transition: "width 0.1s ease-out",
          }}
        />
      )}
    </div>
  );
};

export default TextCursor;
