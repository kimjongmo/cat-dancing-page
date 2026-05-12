import { useState, useCallback } from 'react';

const DANCE_MOVES = ['dance', 'spin', 'bounce', 'shimmy', 'moonwalk'];

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const nextMove = useCallback(() => {
    setCurrentMove(prev => (prev + 1) % DANCE_MOVES.length);
  }, []);

  const animationClass = isPlaying
    ? `animation-${DANCE_MOVES[currentMove]}`
    : 'animation-idle';

  return {
    isPlaying,
    toggle,
    nextMove,
    currentMoveName: DANCE_MOVES[currentMove],
    animationClass,
    danceMoves: DANCE_MOVES,
    currentMoveIndex: currentMove,
  };
}
