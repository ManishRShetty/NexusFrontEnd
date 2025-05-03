import { useState, useEffect } from 'react';

export function useTypewriter(texts, speed = 10, delay = 200) {
  const [displayTexts, setDisplayTexts] = useState(Array(texts.length).fill(''));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    const currentText = texts[activeIndex];

    const timer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayTexts(prev => {
          const newTexts = [...prev];
          newTexts[activeIndex] = currentText.substring(0, index + 1);
          return newTexts;
        });
        index++;
      } else {
        if (activeIndex < texts.length - 1) {
          setTimeout(() => {
            setActiveIndex(prev => prev + 1);
          }, delay);
        } else {
          setIsTyping(false);
        }
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [texts, speed, delay, activeIndex, isTyping]);

  const startTyping = (initialTexts = Array(texts.length).fill('')) => {
    setDisplayTexts(initialTexts);
    setActiveIndex(0);
    setIsTyping(true);
  };

  return [displayTexts, startTyping, isTyping];
}