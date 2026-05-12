import catSvg from '../assets/images/cat.svg';

const MUSIC_NOTES = ['♪', '♫', '♩', '♬', '🎵', '🎶'];

function MusicNote({ note, style }) {
  return (
    <span className="music-note" style={style} aria-hidden="true">
      {note}
    </span>
  );
}

export default function DancingCat({ animationClass, isPlaying }) {
  return (
    <div className="cat-stage">
      {isPlaying && MUSIC_NOTES.map((note, i) => (
        <MusicNote
          key={i}
          note={note}
          style={{
            left: `${10 + i * 14}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${1.5 + i * 0.2}s`,
          }}
        />
      ))}
      <div className="cat-wrapper">
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className={`cat-image ${animationClass}`}
          draggable="false"
        />
        {isPlaying && (
          <div className="disco-ring" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
