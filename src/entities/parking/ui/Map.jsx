import { useSelector, useDispatch } from 'react-redux'
import styleMap from './Map.module.css'

import { setCancelReservationVisibility } from '../../../widgets/form-cancel-reser/cancelReservation/cancelReservationSlice';
import { setReservationVisibility } from '../../../widgets/form-reser/reservation/reservationSlice';
import { setID } from '../model/IDSlice';

const Map = () => {
  const dispatch = useDispatch();
  const activeFloor = useSelector((store) => store.floorsList.activeFloor)
  const places = useSelector((store) => store.placesList.places)

  const openForm = (number) => {
    if (places.filter(item => item.id === number)[0].active === 'inactive') {
      dispatch(setReservationVisibility(true))
      dispatch(setID(number))
    }
    else {
      dispatch(setCancelReservationVisibility(true))
      dispatch(setID(number))
    }
  }

  const strokeNum = (number) => {
    if (places.filter(item => item.id === number)[0].active === 'inactive') {
      return "#0ab331"
    }
    else {
      return "#f05255"
    }
  }

  if (places.length !== 0 && activeFloor !== 0) {
    switch (activeFloor) {
      case 'Этаж 1':
        return (
          <div className={styleMap.div}>
            <h2 className={styleMap.h2}>Карта парковки</h2>
            <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810.53 554.59">
              <defs>
                <style>{`
                g {
                  cursor: pointer;
                }
                
                .cls-1, .cls-2, .cls-3, .cls-4 {
                  fill: #ffffff;
                  stroke: #1d1d1b;
                }

                .cls-1, .cls-2, .cls-3, .cls-4 { stroke-miterlimit: 10; }
        
                .cls-1 { stroke-width: 6px; }

                .cls-2 { stroke-width: 9px; }

                .cls-3 { stroke-width: 8px; }

                .cls-4 { stroke-width: 3px; }

                .cls-5 {
                  fill: #ffffff;
                  stroke-linejoin: round; 
                  stroke-width: 4px;
                }

                .cls-6 {
                  font-size: 18px; 
                  fill: #1d1d1b; 
                  font-family: TinkoffSans-Bold, Tinkoff Sans; 
                  font-weight: 700;

                  user-select: none;
                }`
                }
                </style>
              </defs>
              <path className="cls-1" d="M26.16,490.37l255.76,81.85a16.2,16.2,0,0,0,5,.78H803a16.33,16.33,0,0,0,16.33-16.34V40.75A16.33,16.33,0,0,0,803,24.41H31.14A16.33,16.33,0,0,0,14.81,40.75V474.81A16.34,16.34,0,0,0,26.16,490.37Z" transform="translate(-11.81 -21.41)" />
              <line className="cls-2" x1="352.94" y1="261.84" x2="327.44" y2="261.84" />
              <line className="cls-2" x1="352.69" y1="397.45" x2="327.19" y2="397.45" />
              <polyline className="cls-3" points="349.69 5.34 349.69 119.59 324.19 119.59" />
              <line className="cls-2" x1="227.61" y1="261.84" x2="218.69" y2="261.84" />
              <line className="cls-2" x1="226.23" y1="119.59" x2="217.31" y2="119.59" />
              <line className="cls-2" x1="10.69" y1="261.84" x2="1.78" y2="261.84" />
              <line className="cls-2" x1="10.44" y1="119.59" x2="1.53" y2="119.59" />
              <line className="cls-2" x1="115.86" y1="261.84" x2="106.94" y2="261.84" />
              <line className="cls-2" x1="116.69" y1="119.59" x2="107.78" y2="119.59" />
              <line className="cls-2" x1="227.61" y1="397.45" x2="218.69" y2="397.45" />
              <line className="cls-2" x1="10.44" y1="397.45" x2="1.53" y2="397.45" />
              <line className="cls-2" x1="112.44" y1="397.45" x2="103.53" y2="397.45" />
              <line className="cls-2" x1="500.02" y1="397.45" x2="488.7" y2="397.45" />
              <polyline className="cls-4" points="491.03 327.5 491.03 394.25 348.94 394.25" />
              <line className="cls-2" x1="502.51" y1="261.84" x2="491.19" y2="261.84" />
              <line className="cls-4" x1="495.69" y1="261.84" x2="514.94" y2="261.84" />
              <polyline className="cls-4" points="491.03 123.05 491.03 261.64 491.03 275.5 491.03 261.64 348.94 261.64 348.94 394.25 348.94 123.05" />
              <line className="cls-2" x1="500.45" y1="122.92" x2="489.13" y2="122.92" />
              <line className="cls-4" x1="720.28" y1="394.25" x2="753.86" y2="394.25" />
              <line className="cls-4" x1="785.19" y1="394.25" x2="807.53" y2="394.25" />
              <line className="cls-2" x1="610.11" y1="397.45" x2="601.19" y2="397.45" />
              <line className="cls-4" x1="107.98" y1="461.92" x2="107.98" y2="498.8" />
              <polyline className="cls-4" points="10.44 397.45 107.98 397.45 107.98 436.26" />
              <line className="cls-3" x1="494.79" y1="76.92" x2="494.79" y2="31.59" />
              <line className="cls-4" x1="3" y1="49.59" x2="69.53" y2="49.59" />
              <polyline className="cls-4" points="99.44 49.59 112.23 49.59 112.23 5.34" />
              <line className="cls-4" x1="218.69" y1="3.26" x2="218.69" y2="62.46" />
              <polyline className="cls-4" points="218.69 104.42 218.69 119.59 324.19 119.59" />
              <g onClick={() => openForm(7)} textAnchor="middle">
                <rect className="cls-5" x="222.96" y="337.13" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(7)} />
                <text className="cls-6" transform="translate(282 367.79)">7</text>
              </g>
              <g onClick={() => openForm(8)} textAnchor="middle">
                <rect className="cls-5" x="222.96" y="274.51" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(8)} />
                <text className="cls-6" transform="translate(282 304.15)">8</text>
              </g>
              <g onClick={() => openForm(9)} textAnchor="middle">
                <rect className="cls-5" x="222.96" y="198.84" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(9)} />
                <text className="cls-6" transform="translate(282 227.26)">9</text>
              </g>
              <g onClick={() => openForm(10)} textAnchor="middle">
                <rect className="cls-5" x="222.96" y="134.46" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(10)} />
                <text className="cls-6" transform="translate(282 162.38)">10</text>
              </g>
              <g onClick={() => openForm(5)} textAnchor="middle">
                <rect className="cls-5" x="361.74" y="408.28" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(5)} />
                <text className="cls-6" transform="translate(422 440.93)">5</text>
              </g>
              <g onClick={() => openForm(6)} textAnchor="middle">
                <rect className="cls-5" x="222.96" y="408.28" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(6)} />
                <text className="cls-6" transform="translate(282 440.93)">6</text>
              </g>
              <path className="cls-3" d="M617.46,141l98.8,1a18.24,18.24,0,0,1,18,18.24V418.86h24.36" transform="translate(-11.81 -21.41)" />
              <line className="cls-4" x1="606.65" y1="120.86" x2="606.65" y2="80.99" />
              <line className="cls-4" x1="606.65" y1="45.21" x2="606.65" y2="5.34" />
            </svg>
          </div>
        )

      case 'Этаж 2':
        return (
          <div className={styleMap.div}>
            <h2 className={styleMap.h2}>Карта парковки</h2>
            <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810.53 554.59">
              <defs>
                <style>{`
                g {
                  cursor: pointer;
                }

                .cls-1, .cls-2, .cls-3, .cls-4 {
                  fill: #ffffff;
                  stroke: #1d1d1b;
                }
    
                .cls-1, .cls-2, .cls-3, .cls-4 { stroke-miterlimit: 10; }
    
                .cls-1 { stroke-width: 6px; } 
    
                .cls-2 { stroke-width: 9px; }
    
                .cls-3 { stroke-width: 8px; }
    
                .cls-4 { stroke-width: 3px; }
    
                .cls-5 { 
                  font-size: 18px;
                  fill: #1d1d1b;
                  font-family: TinkoffSans-Bold, Tinkoff Sans;
                  font-weight: 700;
                  user-select: none;
                }
    
                .cls-6 {
                  fill: #ffffff;
                  stroke-linejoin: round;
                  stroke-width: 4px;
                }`
                }
                </style>
              </defs>
              <path className="cls-1" d="M29.82,491.54,281.14,572a21.64,21.64,0,0,0,6.58,1h510a21.59,21.59,0,0,0,21.59-21.59V46a21.59,21.59,0,0,0-21.59-21.59H36.4A21.59,21.59,0,0,0,14.81,46V471A21.6,21.6,0,0,0,29.82,491.54Z" transform="translate(-11.81 -21.41)" />
              <line className="cls-2" x1="352.94" y1="261.84" x2="327.44" y2="261.84" />
              <line className="cls-2" x1="352.69" y1="397.45" x2="327.19" y2="397.45" />
              <polyline className="cls-3" points="349.69 5.34 349.69 119.59 324.19 119.59" />
              <line className="cls-2" x1="227.61" y1="261.84" x2="218.69" y2="261.84" />
              <line className="cls-2" x1="226.23" y1="119.59" x2="217.31" y2="119.59" />
              <line className="cls-2" x1="10.69" y1="261.84" x2="1.78" y2="261.84" />
              <line className="cls-2" x1="10.44" y1="119.59" x2="1.53" y2="119.59" />
              <line className="cls-2" x1="115.86" y1="261.84" x2="106.94" y2="261.84" />
              <line className="cls-2" x1="116.69" y1="119.59" x2="107.78" y2="119.59" />
              <line className="cls-2" x1="227.61" y1="397.45" x2="218.69" y2="397.45" />
              <line className="cls-2" x1="10.44" y1="397.45" x2="1.53" y2="397.45" />
              <line className="cls-2" x1="112.44" y1="397.45" x2="103.53" y2="397.45" />
              <line className="cls-2" x1="500.02" y1="397.45" x2="488.7" y2="397.45" />
              <polyline className="cls-4" points="491.03 327.5 491.03 394.25 348.94 394.25" />
              <line className="cls-2" x1="502.51" y1="261.84" x2="491.19" y2="261.84" />
              <line className="cls-4" x1="495.69" y1="261.84" x2="514.94" y2="261.84" />
              <polyline className="cls-4" points="491.03 123.05 491.03 261.64 491.03 275.5 491.03 261.64 348.94 261.64 348.94 394.25 348.94 123.05" />
              <line className="cls-2" x1="500.45" y1="122.92" x2="489.13" y2="122.92" />
              <path className="cls-3" d="M734.31,53.25V408.92a9.94,9.94,0,0,0,9.94,9.94h14.42" transform="translate(-11.81 -21.41)" />
              <line className="cls-4" x1="722.5" y1="394.25" x2="753.86" y2="394.25" />
              <line className="cls-4" x1="785.19" y1="394.25" x2="807.53" y2="394.25" />
              <line className="cls-2" x1="610.11" y1="397.45" x2="601.19" y2="397.45" />
              <line className="cls-4" x1="107.98" y1="461.92" x2="107.98" y2="498.8" />
              <polyline className="cls-4" points="10.44 397.45 107.98 397.45 107.98 436.26" />
              <line className="cls-3" x1="494.79" y1="76.92" x2="494.79" y2="31.59" />
              <line className="cls-4" x1="3" y1="49.59" x2="69.53" y2="49.59" />
              <polyline className="cls-4" points="99.44 49.59 112.23 49.59 112.23 5.34" />
              <line className="cls-4" x1="218.69" y1="3.26" x2="218.69" y2="62.46" />
              <polyline className="cls-4" points="218.69 104.42 218.69 119.59 324.19 119.59" />
              <g onClick={() => openForm(23)} textAnchor="middle">
                <rect className="cls-6" x="361.74" y="270.72" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(23)} />
                <text className="cls-5" transform="translate(420 299.14)">23</text>
              </g>
              <g onClick={() => openForm(21)} textAnchor="middle">
                <rect className="cls-6" x="593.65" y="42.25" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(21)} />
                <text className="cls-5" transform="translate(652 70.67)">21</text>
              </g>
              <g onClick={() => openForm(20)} textAnchor="middle">
                <rect className="cls-6" x="593.65" y="106.13" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(20)} />
                <text className="cls-5" transform="translate(652 134.55)">20</text>
              </g>
              <g onClick={() => openForm(19)} textAnchor="middle">
                <rect className="cls-6" x="593.65" y="170.01" width="116.5" height="49.5" rx="8.51" stroke={strokeNum(19)} />
                <text className="cls-5" transform="translate(652 198.43)">19</text>
              </g>
            </svg>
          </div>
        )
      default:
        return (
          <div>0</div>
        )
    }
  }

}

export default Map;