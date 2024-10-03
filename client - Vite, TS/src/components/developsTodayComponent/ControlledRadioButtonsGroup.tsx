import * as React from 'react';
import { SearchOptions } from './models/search';

interface ControlledRadioButtonsGroupProps {
  setSearchOption: (option: string) => void;
  option: string;
}

const ControlledRadioButtonsGroup: React.FC<ControlledRadioButtonsGroupProps> = ({ setSearchOption, option }) => (
  <fieldset>
    <legend className="search-legend">Search By</legend>
    <div id="search-options">
      {Object.values(SearchOptions).map((opt: SearchOptions) => (
        <label key={opt}>
          <input
            type="radio"
            name="search-option"
            value={opt}
            checked={option === opt}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchOption(event.target.value)}
          />
          {opt}
        </label>
      ))}
    </div>
  </fieldset>
);

export default ControlledRadioButtonsGroup;
