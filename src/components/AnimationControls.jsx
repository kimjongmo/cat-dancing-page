const MOVE_LABELS = {
  dance:     '🕺 댄스',
  spin:      '🌀 스핀',
  bounce:    '⬆️ 바운스',
  shimmy:    '💃 쉬미',
  moonwalk:  '🌙 문워크',
};

export default function AnimationControls({
  isPlaying,
  onToggle,
  onNextMove,
  currentMoveName,
  danceMoves,
  currentMoveIndex,
}) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-play ${isPlaying ? 'playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? '정지' : '시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <button
        className="btn-next"
        onClick={onNextMove}
        aria-label="다음 댄스 동작"
        disabled={!isPlaying}
      >
        다음 동작 ➡
      </button>

      <div className="move-indicators" role="tablist" aria-label="댄스 동작 목록">
        {danceMoves.map((move, i) => (
          <span
            key={move}
            role="tab"
            aria-selected={i === currentMoveIndex}
            className={`move-dot ${i === currentMoveIndex ? 'active' : ''}`}
            title={MOVE_LABELS[move]}
          />
        ))}
      </div>

      <p className="move-label" aria-live="polite">
        {isPlaying ? MOVE_LABELS[currentMoveName] : '🐱 쉬는 중...'}
      </p>
    </div>
  );
}
