import { useState, useEffect } from "react";

export default function AnimatedText() {
  const [displayText, setDisplayText] = useState("");
  let index = 0;
  const text = `H+ELLO IPSIT DAS`;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(
          (prev) =>
            prev.slice(0, prev.length - 1) + text.charAt(index) + "|"
        );
        index++;
      }
    }, 200); // 200ms delay

    return () => clearInterval(timer); // Clean up on unmount
  }, [text, index]);

  return (
    <div className="flex items-center justify-center font-[Ribeye_Marrow] text-4xl p-10">
      <h1 className="animate-pulse">{displayText}</h1>
    </div>
  );
}




