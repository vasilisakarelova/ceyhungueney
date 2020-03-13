import React from 'react';
import { NavLink } from 'react-router-dom'
import * as css from 'classnames'

const routes = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

const Nav = ({location}) => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}><b className='underline'></b>{label}</NavLink>}
  )

  return (
    <div className={css('nav-wrap', {'is-index': location === '/'})}>
      <NavLink strict exact to='/' className={css('logo', {'is-white': location === '/', 'is-disabled': location !== '/work'})}>
        <svg width="100%" height="100%" viewBox="0 0 345 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M94.4364 47.0617C100.488 37.3172 110.496 27.2682 106.289 14.9701C103.396 6.51591 95.9758 0.179137 86.9035 0.0088142C59.1254 -0.516347 32.9112 22.5198 17.9771 43.9508C10.2312 55.0669 4.35899 67.4901 0.76157 80.5546C-1.49004 88.7314 1.14093 98.4811 10.128 101.415C21.6725 105.186 36.0919 91.4682 42.9332 83.7985C46.2648 80.0643 52.4132 74.3946 53.4996 69.534C54.0712 66.9791 52.097 62.952 49.35 62.4024C44.7254 61.4772 37.0725 71.4837 35.5242 75.2308C34.1203 78.6269 35.8958 81.7095 38.8519 83.7998C43.3977 87.014 49.4145 86.0708 54.1035 83.6462C56.368 82.4746 71.5203 67.2566 72.63 68.2759C71.9758 66.9495 71.3216 65.6217 70.6674 64.2953C70.6958 67.072 70.9125 70.3766 73.839 71.8746C75.3229 72.6333 76.0119 72.3843 77.528 71.7766C78.5138 71.383 81.1332 70.4011 81.8145 69.5185C81.7048 67.1056 81.4622 66.743 81.0841 68.4295C80.7603 69.432 80.4158 70.4282 80.0506 71.4166C77.6506 78.0179 74.5758 84.3895 70.9125 90.3804C68.8971 93.6772 66.7112 96.8772 64.3396 99.9288C62.8841 101.802 58.2274 109.226 55.3951 108.564C56.0545 109.035 56.7151 109.506 57.3745 109.977C56.3487 108.62 60.5874 101.907 61.6119 100.448C64.239 96.7004 67.7474 93.5082 70.9977 90.3133C76.7513 84.6591 82.7229 79.2269 88.8932 74.0295C94.768 69.0785 100.827 64.3443 107.051 59.8398C109.306 58.2075 126.875 44.3069 129.062 46.1211C128.234 44.6462 127.405 43.1714 126.577 41.6966C127.08 49.0643 115.164 57.6011 119.884 64.4514C121.119 66.2449 122.487 67.352 124.635 66.8049C127.044 66.1908 127.813 64.6643 130.874 66.0191C131.805 66.432 132.066 67.414 133.141 67.6514C136.144 68.312 140.919 65.4462 143.633 64.5133C148.941 62.6862 154.249 60.8604 159.558 59.0346C159.96 58.8966 161.411 58.6566 161.602 58.3314C162.026 57.6101 160.903 55.0153 160.898 56.2888C160.892 57.8462 162.591 60.4682 163.587 61.5404C165.675 63.7895 166.905 63.303 169.658 62.2888C175.898 59.9908 182.236 58.1069 188.778 56.8708C212.494 52.3908 236.756 56.832 260.531 58.6359C288.167 60.734 315.871 61.7391 343.586 61.7482C345.393 61.7495 342.782 56.1198 340.849 56.1185C319.434 56.112 298.023 55.5198 276.644 54.2708C255.593 53.0411 234.591 50.1546 213.529 49.374C203.511 49.0037 193.525 49.6385 183.704 51.7082C179.307 52.6346 174.958 53.8024 170.697 55.2295C169.758 55.543 168.116 55.8282 167.325 56.423C167.162 56.5469 164.469 59.8849 165.377 59.9908C165.12 59.9611 164.494 57.5895 164.341 57.2566C163.094 54.5714 161.604 52.3946 158.483 52.7662C154.884 53.1933 150.802 55.4088 147.385 56.583C142.902 58.1262 137.497 61.0862 132.78 61.6075C130.464 61.8643 131.567 61.7637 129.314 60.4372C128.187 59.774 126.763 59.352 125.442 59.4591C124.923 59.5017 120.734 61.3288 120.833 61.4166C121.485 62.743 122.14 64.0708 122.794 65.3972C123.234 58.3417 135.605 48.6256 128.714 41.7133C125.847 38.8359 123.802 40.8888 120.789 42.783C116.235 45.6437 111.755 48.6204 107.354 51.712C97.2932 58.7766 87.6454 66.4295 78.4777 74.6179C70.7487 81.5224 61.1422 88.9701 56.0532 98.174C53.9306 102.014 51.59 111.877 57.6932 114.086C62.7771 115.928 72.0312 99.7495 74.2712 96.1585C77.0622 91.6849 79.5241 87.0114 81.6248 82.174C83.2145 78.5108 86.0958 73.3301 86.0003 69.2862C85.9513 67.1985 84.6106 64.4204 82.6003 63.4966C79.9203 62.2656 73.7319 67.6708 72.8364 66.8875C73.4906 68.2153 74.1435 69.5417 74.7977 70.8695C74.7603 68.0979 74.6041 65.1869 71.9138 63.4927C67.9203 60.9778 63.5422 66.7314 60.8945 69.3907C56.4571 73.8501 52.3758 78.4849 45.9603 79.8488C30.7061 83.0901 50.8312 67.4088 51.5345 68.143C50.8816 66.8166 50.2274 65.4888 49.5732 64.1611C49.0196 68.5675 42.2945 75.1959 39.4829 78.3482C36.2158 82.0114 32.6351 85.4308 28.6725 88.3379C25.07 90.9817 21.1461 93.254 16.9771 94.8785C9.95383 97.614 2.16931 95.5056 4.41576 86.3933C8.77705 68.7056 18.208 51.8088 30.2364 38.2153C42.808 24.0049 59.6661 11.2682 78.4532 7.0114C87.248 5.01914 101.003 3.82172 103.169 15.6153C104.869 24.8785 95.0042 34.9572 90.519 42.1778C89.5525 43.734 93.3874 48.752 94.4364 47.0617Z" fill="#1D1D1B"/>
        </svg>
      </NavLink>
      <div className={css('nav-inner', {'is-hidden': location === '/'})}>
        { links }
      </div>
    </div>
  );
}

export default Nav
