import './styles/global.css';
import './styles/animations.css';
import './App.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import { useEffect } from 'react';

function StarField() {
  return (
    <div className="starfield" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i * 0.3) % 3}s`,
            animationDuration: `${1.5 + (i % 4) * 0.5}s`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const animation = useAnimation();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        animation.toggle();
      }
      if (e.code === 'ArrowRight' && animation.isPlaying) {
        animation.nextMove();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [animation]);

  return (
    <>
      <StarField />
      <Layout>
        <DancingCat
          animationClass={animation.animationClass}
          isPlaying={animation.isPlaying}
        />
        <AnimationControls
          isPlaying={animation.isPlaying}
          onToggle={animation.toggle}
          onNextMove={animation.nextMove}
          currentMoveName={animation.currentMoveName}
          danceMoves={animation.danceMoves}
          currentMoveIndex={animation.currentMoveIndex}
        />
      </Layout>
    </>
  );
}
