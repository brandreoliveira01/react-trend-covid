import { useState, useEffect } from 'react';
import fetchData from './api/getCovidData.js';
import TrendView from './components/TrendView.jsx';
import RangeInput from './components/RangeInput.jsx';
import CheckBox from './components/CheckBox.jsx';

export default function App() {
  const [averages, setAverages] = useState([]);
  const [round, setRound] = useState(false);
  const [radius, setRadius] = useState(0);
  const [width, setWidth] = useState(0.6);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setAverages(data);
    };

    getData();
  }, []);

  function handleCheckboxChange(newRound) {
    setRound(newRound);
    if (newRound) {
      setRadius(25);
      return;
    }
    setRadius(0);
  }

  function handleWidthChange(newWidth) {
    setWidth(newWidth);
  }

  return (
    <div>
      <header>
        <div className='bg-indigo-300 mx-auto p-4'>
          <h1 className='text-center font-semibold text-xl'>react-trend Covid</h1>
        </div>
      </header>

      <main>
        <TrendView data={averages} radius={radius} width={width} />
        <CheckBox
          id='roundCheckbox'
          labelDescription='Arredondar'
          checkboxValue={round}
          onCheckboxChange={handleCheckboxChange}
        ></CheckBox>
        <RangeInput
          id='widthInput'
          labelDescription='Largura:'
          inputValue={width}
          onInputChange={handleWidthChange}
          min='0.1'
          max='5'
          step='0.1'
        />
      </main>
    </div>
  );
}
