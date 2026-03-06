import { CheckCircle, Translate } from '@phosphor-icons/react';
import type { LanguageCode, SupportedLanguage } from '../homeIdleData';

interface LanguageSelectorProps {
  activeLanguage: LanguageCode;
  label: string;
  languages: SupportedLanguage[];
  onSelect: (languageCode: LanguageCode) => void;
}

export default function LanguageSelector({
  activeLanguage,
  label,
  languages,
  onSelect,
}: LanguageSelectorProps) {
  return (
    <div className="utility-section utility-section--stacked">
      <span className="utility-label">{label}</span>
      <div className="utility-chip-row utility-chip-row--languages">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`utility-button language-button ${language.code === activeLanguage ? 'active' : ''}`}
            onClick={() => onSelect(language.code)}
            aria-pressed={language.code === activeLanguage}
          >
            <Translate size={16} weight="bold" aria-hidden="true" />
            <span className="language-button-copy">
              <strong>{language.nativeLabel}</strong>
              <small>{language.label}</small>
            </span>
            {language.code === activeLanguage && <CheckCircle size={16} weight="fill" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
