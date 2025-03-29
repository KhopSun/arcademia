'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Scene1() {
  const params = useParams();
  
  return (
    <div className="nes-container is-dark with-title scene-container">
      <p className="title">Scene 1: Prologue – The Lost World of Arcanova</p>
      <p>
        Long ago, the world of Arcanova shimmered with knowledge. It was a land where math shaped magic, science powered cities, language gave life to spells, and code held the world together behind the scenes. Students became heroes. Scholars became legends. The four great kingdoms—Numeria, Scientia, Lingua, and Technos—guarded the sacred Crystal Codex, the source of all learning.
      </p>
      <p>Current stage parameter: {params.stageId}</p>
      <Link href="/scene2">
        <button type="button" className="nes-btn is-primary">
          Next
        </button>
      </Link>
    </div>
  );
}
