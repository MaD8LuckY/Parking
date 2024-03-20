import styleMap from './CSS/Map.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { setNoBookingVisibility } from "../../features/noBooking/noBookingSlice"
import { setBookingVisibility } from '../../features/booking/bookingSlice'
import { setID } from "../../features/ID/IDSlice";

const Map = ({ floor }) => {

  const dispatch = useDispatch();
  const places = useSelector((state) => state.placesList.places)

  const booking = (id) => {
    dispatch(setBookingVisibility(true))
    dispatch(setID(id));
  }

  const noBooking = (id) => { // форма "Освободить место"
    dispatch(setNoBookingVisibility(true))
    dispatch(setID(id));
  }

  switch (floor) {
    case 1:
      return <div className={styleMap.div}>
        <h2 className={styleMap.h2}>Карта парковки</h2>
        {/* <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100%" viewBox="0 0 841.89 595.28" enableBackground="new 0 0 841.89 595.28" space="preserve">
          <polygon fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="14.808,486.735 285.356,573 822.342,573 822.342,24.411 14.808,24.411 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="364.75" y1="283.25" x2="339.25" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="364.5" y1="418.862" x2="339" y2="418.862" />
          <polyline fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" points="361.5,26.75 361.5,141 336,141 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="239.416" y1="283.25" x2="230.5" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="238.033" y1="141" x2="229.117" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.5" y1="283.25" x2="13.583" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.25" y1="141" x2="13.333" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="127.667" y1="283.25" x2="118.75" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="128.5" y1="141" x2="119.583" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="239.416" y1="418.862" x2="230.5" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.25" y1="418.862" x2="13.333" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="124.25" y1="418.862" x2="115.333" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="511.833" y1="418.862" x2="500.513" y2="418.862" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="502.839,348.915 502.839,415.658 360.75,415.658 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="514.32" y1="283.25" x2="503.001" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="507.496" y1="283.25" x2="526.75" y2="283.25" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="502.839,144.465 502.839,283.05 502.839,296.908 502.839,283.05 360.75,283.05 360.75,415.658 360.75,144.465 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="512.255" y1="144.334" x2="500.935" y2="144.334" />
          <polyline fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" points="619.001,141 717.308,141 717.308,418.862 741.667,418.862 " />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="726.084" y1="415.658" x2="759.667" y2="415.658" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="794.667" y1="415.658" x2="822.334" y2="415.658" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="620.221" y1="144.465" x2="620.221" y2="105.875" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="620.221" y1="51.208" x2="620.221" y2="26.875" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="627.917" y1="418.861" x2="619.001" y2="418.861" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="119.792" y1="483.333" x2="119.792" y2="520.21" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="22.25,418.862 119.792,418.862 119.792,457.667 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="506.596" y1="98.333" x2="506.596" y2="53" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="14.808" y1="71" x2="81.333" y2="71" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="111.25,71 124.042,71 124.042,26.75 " />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="230.5" y1="24.667" x2="230.5" y2="83.875" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="230.5,125.833 230.5,141 336,141 " />
          <rect x="228.5" y="156.5" fill="#FFFFFF" stroke={places.filter(item => item.id === 10)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="228.5" y="220" fill="#FFFFFF" stroke={places.filter(item => item.id === 9)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="228.5" y="296" fill="#FFFFFF" stroke={places.filter(item => item.id === 8)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="228.5" y="356" fill="#FFFFFF" stroke={places.filter(item => item.id === 7)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="228.5" y="432.917" fill="#FFFFFF" stroke={places.filter(item => item.id === 6)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="373.5" y="432.917" fill="#FFFFFF" stroke={places.filter(item => item.id === 5)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="121.5" height="49.5" />
          <rect x="430.709" y="452" fill="none" width="13.5" height="17.5" />
          <text transform="matrix(1 0 0 1 430.709 464.8877)" fontFamily="'ArialMT'" fontSize="18">5</text>
          <rect x="288.249" y="448.917" fill="none" width="13.5" height="17.5" />
          <text transform="matrix(1 0 0 1 288.249 461.8047)" fontFamily="'ArialMT'" fontSize="18">6</text>
          <rect x="288.25" y="313.662" fill="none" width="13.5" height="17.5" />
          <text transform="matrix(1 0 0 1 288.2495 326.5498)" fontFamily="'ArialMT'" fontSize="18">8</text>
          <rect x="288.249" y="376.162" fill="none" width="13.5" height="17.5" />
          <text transform="matrix(1 0 0 1 288.2485 389.0498)" fontFamily="'ArialMT'" fontSize="18">7</text>
          <rect x="288.249" y="236" fill="none" width="13.5" height="17.5" />
          <text transform="matrix(1 0 0 1 288.2485 248.8877)" fontFamily="'ArialMT'" fontSize="18">9</text>
          <rect x="283.499" y="172.5" fill="none" width="23.001" height="17.5" />
          <text transform="matrix(1 0 0 1 283.499 185.3877)" fontFamily="'ArialMT'" fontSize="18">10</text>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" version="1.1" viewBox="0 0 1122.52 793.707" xmlSpace="preserve"
        >
          <defs>
            <path d="M378.196 412.99H397.358V441.229H378.196z"></path>
            <path d="M308.103 286.924H466.94500000000005V359.538H308.103z"></path>
            <path d="M372.145 315.163H405.426V335.838H372.145z"></path>
            <path d="M314.155 292.976H465.938V355H314.155z"></path>
            <path d="M373.153 597.549H408.451V617.215H373.153z"></path>
            <path d="M378.196 226.917H407.947V249.104H378.196z"></path>
            <clipPath id="clipPath42" clipPathUnits="userSpaceOnUse">
              <path d="M0 595.28h841.89V0H0z"></path>
            </clipPath>
            <clipPath id="clipPath70" clipPathUnits="userSpaceOnUse">
              <path d="M0 595.28h841.89V0H0z"></path>
            </clipPath>
          </defs>
          <g transform="matrix(1.33333 0 0 -1.33333 0 793.707)">
            <g transform="translate(14.808 108.545)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="6" d="M0 0l269.54-86.265h534.986v548.589H0z"></path>
            </g>
            <g transform="translate(364.75 312.03)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-25.5"></path>
            </g>

            <g transform="translate(364.5 176.418)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-25.5" ></path>
            </g>
            <g transform="translate(361.5 568.53)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="8" d="M0 0v-114.25h-25.5" ></path>
            </g>
            <g transform="translate(239.416 312.03)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g transform="translate(238.033 454.28)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g>
              <g clipPath="url(#clipPath42)">
                <g transform="translate(22.5 312.03)">
                  <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
                </g>
                <g transform="translate(22.25 454.28)">
                  <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
                </g>
              </g>
            </g>
            <g transform="translate(127.666 312.03)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g transform="translate(128.5 454.28)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g transform="translate(239.416 176.418)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g>
              <g clipPath="url(#clipPath70)">
                <g transform="translate(22.25 176.418)">
                  <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
                </g>
              </g>
            </g>
            <g transform="translate(124.25 176.418)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.917" ></path>
            </g>
            <g transform="translate(511.833 176.418)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-11.32" ></path>
            </g>
            <g transform="translate(502.839 246.365)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v-66.743h-142.089" ></path>
            </g>
            <g transform="translate(514.32 312.03)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-11.319" ></path>
            </g>
            <g transform="translate(507.496 312.03)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h19.254" ></path>
            </g>
            <g transform="translate(502.839 450.815)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v-152.443 13.858h-142.089v-132.608V0" ></path>
            </g>
            <g transform="translate(512.255 450.946)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-11.32" ></path>
            </g>
            <g transform="translate(732.084 179.622)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h33.583"
              ></path>
            </g>
            <g transform="translate(796.999 179.622)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h22.335" ></path>
            </g>
            <g transform="translate(621.917 176.419)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="9" d="M0 0h-8.916" ></path>
            </g>
            <g transform="translate(119.792 111.947)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v-36.877" ></path>
            </g>
            <g transform="translate(22.25 176.418)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h97.542v-38.805" ></path>
            </g>
            <g transform="translate(506.596 496.947)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="8" d="M0 0v45.333" ></path>
            </g>
            <g transform="translate(14.808 524.28)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h66.525" ></path>
            </g>
            <g transform="translate(111.25 524.28)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0h12.792v44.25" ></path>
            </g>
            <g transform="translate(230.5 570.613)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v-59.208" ></path>
            </g>
            <g transform="translate(230.5 469.447)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v-15.167h105.5" ></path>
            </g>
            <g onClick={places.filter(item => item.id === 10)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 10)[0].id) : () => noBooking(places.filter(item => item.id === 10)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 10)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M349.242 391.281H233.575v49.5h115.667z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="300"
                y="-410.721"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="300" y="-410.721" strokeWidth="0.75">
                  10{places.filter(item => item.id === 10)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 10)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g onClick={places.filter(item => item.id === 9)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 9)[0].id) : () => noBooking(places.filter(item => item.id === 9)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 9)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M349.242 327.781H233.575v49.5h115.667z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="300"
                y="-347.94"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="300" y="-347.94" strokeWidth="0.75">
                  9{places.filter(item => item.id === 9)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 9)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g onClick={places.filter(item => item.id === 8)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 8)[0].id) : () => noBooking(places.filter(item => item.id === 8)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 8)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M349.242 250.862H233.575v49.501h115.667z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="300"
                y="-270"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="300" y="-270" strokeWidth="0.75">
                  8{places.filter(item => item.id === 8)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 8)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g onClick={places.filter(item => item.id === 7)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 7)[0].id) : () => noBooking(places.filter(item => item.id === 7)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 7)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M349.659 188.243h-116.5v49.5h116.5z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="300"
                y="-208.386"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="300" y="-208.386" strokeWidth="0.75">
                  7{places.filter(item => item.id === 7)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 7)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g onClick={places.filter(item => item.id === 6)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 6)[0].id) : () => noBooking(places.filter(item => item.id === 6)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 6)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M349.659 112.863H233.158v49.5h116.501z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="300"
                y="-132.369"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="300" y="-132.369" strokeWidth="0.75">
                  6{places.filter(item => item.id === 6)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 6)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g onClick={places.filter(item => item.id === 5)[0].active === 'inactive' ? () => booking(places.filter(item => item.id === 5)[0].id) : () => noBooking(places.filter(item => item.id === 5)[0].id)} textAnchor="middle">
              <path
                fill="#fff"
                fillOpacity="1"
                fillRule="nonzero"
                stroke={places.filter(item => item.id === 5)[0].active === 'inactive' ? '#0AB331' : '#F05255'}
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeOpacity="1"
                strokeWidth="4"
                d="M490.045 112.863H373.544v49.5h116.501z"
              ></path>
              <text
                xmlSpace="preserve"
                style={{
                  lineHeight: "3",
                  InkscapeFontSpecification: "'Tinkoff Sans'",
                  WebkitTextAlign: "center",
                  textAlign: "center",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  MsUserSelect: "none",
                  userSelect: "none",
                }}
                x="440"
                y="-131.99"
                fill="#000"
                strokeWidth="0.75"
                fontFamily="Tinkoff Sans"
                fontSize="18"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="middle"
                transform="scale(1 -1)"
              >
                <tspan x="440" y="-131.99" strokeWidth="0.75">
                  5{places.filter(item => item.id === 5)[0].active === 'inactive' ? '' : ` - ${places.filter(item => item.id === 5)[0].carNumber}`}
                </tspan>
              </text>
            </g>
            <g transform="translate(617.459 454.28)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="8" d="M0 0l116.849-1.215v-276.647h24.359" ></path>
            </g>
            <g transform="translate(618.459 453.01)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v39.873" ></path>
            </g>
            <g transform="translate(618.459 528.657)">
              <path fill="none" stroke="#2b2b2a" strokeDasharray="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="3" d="M0 0v39.873" ></path>
            </g>
          </g>
        </svg>
      </div>

    case 2:
      return <div className={styleMap.div}>
        <h2 className={styleMap.h2}>Карта парковки</h2>
        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100%" viewBox="0 0 841.89 595.28" enableBackground="new 0 0 841.89 595.28" space="preserve">
          <polygon fill="none" stroke="#000000" strokeWidth="6" strokeMiterlimit="10" points="14.808,486.735 285.356,573 822.342,573 822.342,24.411 14.808,24.411 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="364.75" y1="283.25" x2="339.25" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="364.5" y1="418.862" x2="339" y2="418.862" />
          <polyline fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" points="361.5,26.75 361.5,141 336,141 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="239.416" y1="283.25" x2="230.5" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="238.033" y1="141" x2="229.117" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.5" y1="283.25" x2="13.583" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.25" y1="141" x2="13.333" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="127.667" y1="283.25" x2="118.75" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="128.5" y1="141" x2="119.583" y2="141" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="239.416" y1="418.862" x2="230.5" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="22.25" y1="418.862" x2="13.333" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="124.25" y1="418.862" x2="115.333" y2="418.862" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="511.833" y1="418.862" x2="500.513" y2="418.862" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="502.839,348.915 502.839,415.658 360.75,415.658 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="514.32" y1="283.25" x2="503.001" y2="283.25" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="507.496" y1="283.25" x2="526.75" y2="283.25" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="502.839,144.465 502.839,283.05 502.839,296.908 502.839,283.05 360.75,283.05 360.75,415.658 360.75,144.465 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="512.255" y1="144.334" x2="500.935" y2="144.334" />
          <polyline fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" points="731.308,53.25 731.308,418.862 755.667,418.862 " />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="732.084" y1="415.658" x2="765.667" y2="415.658" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="794.667" y1="415.658" x2="822.334" y2="415.658" />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="621.917" y1="418.861" x2="613.001" y2="418.861" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="119.792" y1="483.333" x2="119.792" y2="520.21" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="22.25,418.862 119.792,418.862 119.792,457.667 " />
          <line fill="none" stroke="#000000" strokeWidth="9" strokeMiterlimit="10" x1="506.596" y1="98.333" x2="506.596" y2="53" />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="14.808" y1="71" x2="81.333" y2="71" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="111.25,71 124.042,71 124.042,26.75 " />
          <line fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" x1="230.5" y1="24.667" x2="230.5" y2="83.875" />
          <polyline fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" points="230.5,125.833 230.5,141 336,141 " />
          <rect x="605.333" y="63.5" fill="#FFFFFF" stroke={places.filter(item => item.id === 21)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="115.667" height="49.5" />
          <rect x="605.333" y="127" fill="#FFFFFF" stroke={places.filter(item => item.id === 20)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="115.667" height="49.5" />
          <rect x="605.333" y="191" fill="#FFFFFF" stroke={places.filter(item => item.id === 19)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="115.667" height="49.5" />
          <rect x="373.5" y="294.917" fill="#FFFFFF" stroke={places.filter(item => item.id === 23)[0].active === 'inactive' ? '#0AB331' : '#F05255'} strokeWidth="3" strokeMiterlimit="10" width="116.5" height="49.5" />
          <rect x="425.209" y="314" fill="none" width="22.5" height="17.5" />
          <text transform="matrix(1 0 0 1 425.209 326.8877)" fontFamily="'ArialMT'" fontSize="18">23</text>
          <rect x="653.499" y="208.662" fill="none" width="21.5" height="17.5" />
          <text transform="matrix(1 0 0 1 653.499 221.5498)" fontFamily="'ArialMT'" fontSize="18">19</text>
          <rect x="653.624" y="143" fill="none" width="21.251" height="17.5" />
          <text transform="matrix(1 0 0 1 653.624 155.8877)" fontFamily="'ArialMT'" fontSize="18">20</text>
          <rect x="652.749" y="79.5" fill="none" width="23.001" height="17.5" />
          <text transform="matrix(1 0 0 1 652.749 92.3877)" fontFamily="'ArialMT'" fontSize="18">21</text>
        </svg>
      </div>

    default:
      return 0
  }
}

export default Map;