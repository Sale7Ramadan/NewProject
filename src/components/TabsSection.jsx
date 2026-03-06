import { useState } from 'react';

function TabsSection({ tabs }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((tab) => tab.id === active) || tabs[0];

  return (
    <section className="tabs-section">
      <div className="tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === active ? 'active' : ''}
            onClick={() => setActive(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-panel">{current?.content}</div>
    </section>
  );
}

export default TabsSection;
