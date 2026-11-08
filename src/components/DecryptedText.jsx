import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  delay = 0, // THE MAGIC FIX: Tells the text to wait for the preloader!
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [direction, setDirection] = useState('forward');

  const containerRef = useRef(null);
  const orderRef = useRef([]);
  const pointerRef = useRef(0);
  const intervalRef = useRef(null);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText, currentRevealed) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const computeOrder = useCallback(len => {
    const order = [];
    for (let i = 0; i < len; i++) order.push(i);
    return order;
  }, []);

  const encryptInstantly = useCallback(() => {
    setRevealedIndices(new Set());
    setDisplayText(shuffleText(text, new Set()));
    setIsDecrypted(false);
  }, [text, shuffleText]);

  const triggerDecrypt = useCallback(() => {
    orderRef.current = computeOrder(text.length);
    pointerRef.current = 0;
    setRevealedIndices(new Set());
    setDirection('forward');
    setIsAnimating(true);
  }, [computeOrder, text.length]);

  // INITIALIZATION: Start encrypted immediately so it looks hacked behind the preloader
  useEffect(() => {
    if (animateOn === 'view') {
      encryptInstantly();
    }
  }, [animateOn, encryptInstantly]);

  // OBSERVER & DELAY TRIGGER
  useEffect(() => {
    if (animateOn !== 'view') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Wait for the exact delay (preloader timing) before decrypting!
          setTimeout(() => triggerDecrypt(), delay);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.disconnect(); };
  }, [animateOn, hasAnimated, triggerDecrypt, delay]);

  // ANIMATION LOOP
  useEffect(() => {
    if (!isAnimating) return;

    intervalRef.current = setInterval(() => {
      setRevealedIndices(prevRevealed => {
        if (prevRevealed.size < text.length) {
          const nextIndex = prevRevealed.size;
          const newRevealed = new Set(prevRevealed).add(nextIndex);
          setDisplayText(shuffleText(text, newRevealed));
          return newRevealed;
        } else {
          clearInterval(intervalRef.current);
          setIsAnimating(false);
          setIsDecrypted(true);
          return prevRevealed;
        }
      });
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, text, speed, shuffleText]);

  const triggerHoverDecrypt = useCallback(() => {
    if (isAnimating) return;
    setRevealedIndices(new Set());
    setIsDecrypted(false);
    setDisplayText(text);
    setDirection('forward');
    setIsAnimating(true);
  }, [isAnimating, text]);

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={animateOn === 'hover' ? triggerHoverDecrypt : undefined}
      {...props}
    >
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealed = revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={index} className={isRevealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}