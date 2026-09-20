import { useContext } from 'react';
import { AccentContext } from '../context/AccentContext';

const colors = [
  { name: 'Cyan', value: 'cyan', hex: '#00E5FF' },
  { name: 'Violet', value: 'violet', hex: '#8B5CF6' },
  { name: 'Emerald', value: 'emerald', hex: '#22C55E' },
  { name: 'Rose', value: 'rose', hex: '#FF4D8D' },
];

function AccentSwitcher() {
  const { accent, setAccent } = useContext(AccentContext);

  return (
    <div className="accent-switcher" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {colors.map((color) => (
        <button
          key={color.value}
          onClick={() => setAccent(color.value)}
          title={`Use ${color.name} accent`}
          aria-label={`Use ${color.name} accent`}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: color.hex,
            border: accent === color.value ? '2px solid white' : '2px solid transparent',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            boxShadow: accent === color.value ? `0 0 10px ${color.hex}` : 'none',
            transition: 'all 0.2s ease-in-out'
          }}
        />
      ))}
    </div>
  );
}

export default AccentSwitcher;
