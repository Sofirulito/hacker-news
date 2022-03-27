import { useState } from 'react';
import './select.css';
import iconAngular from '../../assets/icons/icon-angular.png';
import iconReact from '../../assets/icons/icon-react.png';
import iconVue from '../../assets/icons/icon-vue.png';

const Select = ({selectValue, setSelectValue, setCurrentPage}) => {

  const [isActive, setIsActive] = useState(false);
  const options = [
    {value: 'Angular', icon: iconAngular},
    {value: 'Reactjs', icon: iconReact},
    {value: 'Vuejs', icon: iconVue}
  ]

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        {selectValue}
      </div>
      {isActive && (
        <div className="dropdown__content">
          {options.map((option, index) => (
            <div className="dropdown__item" key={index} 
              onClick={(e) => {
                setSelectValue(option.value);
                setIsActive(false);
                setCurrentPage(0);
              }} 
            >
              <img src={option.icon} alt={`icon-${option.value}`} className="dropdown__image"/>
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select;