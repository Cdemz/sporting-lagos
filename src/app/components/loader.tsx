// components/Loader.js
"use client"
import React, { useEffect, useState } from 'react';
import styles from '../css/Loader.module.css';
import Logo from '../assets/sporting-logo_biealj.svg'; // Ensure the logo is in the public directory



const Loader = () => {
  

  useEffect(() => {
    const svg = document.getElementById('sporting-logo');
    if (svg) {
      const elements = svg.querySelectorAll('g');

      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
        el.classList.add(styles.animate);

        
      });
    }
   
  }, []);
 console.log("just try")
  return (
   
     
      <div className="flex justify-center items-center h-screen bg-[var(--color-primary)] ">
    <svg
        id="sporting-logo"
        width="120"
        height="200"
        viewBox="0 0 43 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-fu5l max-w-lg"
      >
        <g id="part1" className={`${styles.part} ${styles['part-expanding']}`}><path d="M42.4869 40.6806V10.5981H0.342773V42.6251H0.401913C0.681419 47.9055 2.90339 52.8253 6.7003 56.5441C7.79931 57.6192 8.99478 58.5619 10.2712 59.3603L10.8542 58.1402C9.70657 57.4094 8.62938 56.5546 7.63738 55.5824C3.93692 51.9572 1.83324 47.1127 1.72059 41.9401L1.7044 41.2818H1.68539V11.9422H41.1429V40.7207C41.1534 40.9763 41.1591 41.2339 41.1591 41.4916C41.1591 48.3976 37.591 54.4862 32.2001 58.0092L32.783 59.2321C38.6245 55.4838 42.5024 48.9327 42.5024 41.4923C42.5024 41.2206 42.4974 40.9488 42.4869 40.6806Z" fill="white"/></g>


<g id="part2" className={`${styles.part} ${styles.part2}`}><path d="M3.09882 3.1757L2.21665 2.99899C1.8245 2.92506 1.53936 2.55333 1.53936 2.11611C1.53936 1.60498 1.94981 1.18959 2.45461 1.18959H2.71933C3.27412 1.18959 3.7571 1.58104 3.86693 2.12034L3.87045 2.13724H5.0807L5.07788 2.1133C4.9413 0.908677 3.92748 -0.000244141 2.71933 -0.000244141H2.45461C1.28801 -0.000244141 0.338257 0.948808 0.338257 2.11611C0.338257 3.14331 1.06413 4.01915 2.06457 4.19868L2.94604 4.35286C3.48886 4.45073 3.89861 4.94849 3.89861 5.51102C3.89861 6.17916 3.38043 6.70226 2.71863 6.70226C2.16807 6.70226 1.68087 6.31081 1.55977 5.77081L1.55625 5.75391H0.346705L0.349521 5.77785C0.486105 6.98317 1.50486 7.89139 2.71863 7.89139C4.02534 7.89139 5.08844 6.82336 5.08844 5.51102C5.08915 4.36835 4.27105 3.40804 3.09882 3.1757Z" fill="white"/> 
<path d="M8.58541 0.000488281H6.14941V7.89212H7.34981V4.54087H8.64032C9.89211 4.54087 10.9109 3.52212 10.9109 2.27033C10.9109 1.01854 9.86747 0.000488281 8.58541 0.000488281ZM9.71047 2.27103C9.71047 2.8568 9.19511 3.35174 8.58541 3.35174H7.35051V1.18962H8.64103C9.23031 1.18962 9.71047 1.67471 9.71047 2.27103Z" fill="white"/>
<path d="M14.1647 0.000488281C12.858 0.000488281 11.7949 1.06852 11.7949 2.38086V5.51175C11.7949 6.82479 12.858 7.89212 14.1647 7.89212C15.4771 7.89212 16.5451 6.82409 16.5451 5.51175V2.38086C16.5458 1.06852 15.4778 0.000488281 14.1647 0.000488281ZM15.356 5.51175C15.356 6.16862 14.8216 6.70299 14.1647 6.70299C13.5142 6.70299 12.9848 6.16862 12.9848 5.51175V2.38086C12.9848 1.72399 13.5142 1.18962 14.1647 1.18962C14.8216 1.18962 15.356 1.72399 15.356 2.38086V5.51175Z" fill="white"/>
<path d="M22.5211 2.27103C22.5211 1.01924 21.4777 0.000488281 20.1956 0.000488281H17.7596V7.89212H18.96V4.90557C18.96 4.70773 19.1269 4.54087 19.324 4.54087C19.4684 4.54087 19.5902 4.64577 19.6472 4.74997L21.3291 7.89212H22.5352L20.7237 4.49018C21.7671 4.26418 22.5211 3.33484 22.5211 2.27103ZM21.3207 2.27103C21.3207 2.8568 20.8053 3.35174 20.1956 3.35174H18.9607V1.18962H20.2513C20.8405 1.18962 21.3207 1.67471 21.3207 2.27103Z" fill="white"/>
<path d="M23.2068 1.18962H24.9817V7.89212H26.1708V1.18962H27.957V0.000488281H23.2068V1.18962Z" fill="white"/>
<path d="M30.3055 0.000488281H29.1163V7.89212H30.3055V0.000488281Z" fill="white"/>
<path d="M35.3675 3.89104C35.3675 4.0586 35.2414 4.18955 35.0802 4.18955C34.9676 4.18955 34.8648 4.1283 34.8239 4.03678L33.0047 0.0131611L32.999 0.000488281H31.8064V7.89212H33.0068V4.00157C33.0068 3.83401 33.1328 3.70306 33.294 3.70306C33.4067 3.70306 33.5095 3.76431 33.5503 3.85584L35.3696 7.87945L35.3752 7.89212H36.5678V0.000488281H35.3675V3.89104Z" fill="white"/>
<path d="M42.4891 2.40223V2.38111C42.4891 1.06877 41.421 0.000732422 40.1087 0.000732422C38.802 0.000732422 37.7389 1.06877 37.7389 2.38111V5.51199C37.7389 6.82504 38.802 7.89237 40.1087 7.89237C41.421 7.89237 42.4891 6.82433 42.4891 5.51199V3.35198H40.0876V4.54112H41.3V5.51199C41.3 6.16887 40.7656 6.70324 40.1087 6.70324C39.4582 6.70324 38.9287 6.16887 38.9287 5.51199V2.38111C38.9287 1.72423 39.4582 1.18986 40.1087 1.18986C40.7656 1.18986 41.3 1.72423 41.3 2.38111V2.40223H42.4891V2.40223Z" fill="white"/></g>

<g id="part3" className={`${styles.padrt} ${styles.part3}`}>
<path d="M36.6675 46.8897C36.0212 48.3957 35.1566 49.7869 34.1146 51.0232L28.0613 47.5283V55.5481C26.5476 56.2092 24.9156 56.6506 23.2062 56.8322V45.7527C23.2062 45.119 22.8654 44.5284 22.3162 44.2108C21.765 43.8926 21.0828 43.8926 20.5343 44.2101C19.9852 44.5269 19.6437 45.1176 19.6437 45.7513V56.8301C17.9336 56.6464 16.3009 56.2021 14.7872 55.5382V47.5276L8.7479 51.0147C7.70662 49.7777 6.84416 48.3858 6.19785 46.8792L13.8966 42.4345C14.4457 42.1177 14.7872 41.5263 14.7872 40.892C14.7872 40.2583 14.4457 39.6669 13.8966 39.3501C13.346 39.0319 12.6638 39.0319 12.1146 39.3494L5.13897 43.3772C4.97986 42.5162 4.88833 41.6319 4.86791 40.7293H4.84045V37.942L8.14876 36.0319L4.84045 34.1219V28.5142L13.0151 33.2334L28.0514 41.9149L36.6675 46.8897Z" fill="white"/> </g>


<g id="part4" className={`${styles.pardt} ${styles.part4}`}><path d="M37.9932 39.7058V37.9337L34.699 36.0321L37.9932 34.1305V28.522L30.7331 32.7139C30.1832 33.0307 29.501 33.0307 28.9519 32.7139C28.4027 32.3964 28.0613 31.8057 28.0613 31.1714C28.0613 30.537 28.4027 29.9456 28.9519 29.6288L37.9932 24.409V18.8013L28.0613 24.5357V15.1375H23.2055V26.3113C23.2055 26.945 22.8647 27.5357 22.3141 27.8539C21.765 28.1707 21.0828 28.1707 20.5336 27.8539C19.9845 27.5371 19.643 26.9457 19.643 26.312V15.1375H14.7872V24.5357L4.84045 18.7928V24.4006L14.7971 30.1491L28.0317 37.7901L37.7292 43.3893C37.9122 42.4051 38.0073 41.3906 38.0073 40.3535C38.0073 40.1367 38.0017 39.9205 37.9932 39.7058Z" fill="white"/> </g>


<g id="part5" className={`${styles.part} ${styles.part5}`}>
<path d="M14.7716 57.6208L14.0309 57.3835L12.7271 61.4557L15.2377 62.2598L15.4749 61.5184L13.7057 60.9516L14.7716 57.6208Z" fill="white"/>
<path d="M18.6617 58.5378L17.9267 58.4265L16.3208 62.5057L17.0938 62.6254L17.2079 62.3319C17.2213 62.2938 17.2734 62.2664 17.3198 62.2748L18.0872 62.3945C18.1386 62.403 18.1689 62.4438 18.1717 62.4818L18.1907 62.7944L18.9715 62.9141L18.6617 58.5378ZM18.0985 61.5011C18.0957 61.5257 18.0823 61.5504 18.0577 61.5637C18.0359 61.5799 18.0112 61.5884 17.9845 61.5827L17.6606 61.5335C17.6331 61.5278 17.6092 61.5145 17.5895 61.4926C17.5761 61.4708 17.5677 61.4433 17.5705 61.4194C17.5733 61.406 17.5733 61.406 17.5789 61.3948L17.8458 60.7224C17.862 60.6816 17.9028 60.6541 17.9464 60.6541H17.9598C18.0063 60.6626 18.0443 60.7062 18.0471 60.7548L18.0985 61.4729L18.1013 61.4814C18.1006 61.4849 18.1006 61.4877 18.0985 61.5011Z" fill="white"/>
<path d="M22.8287 61.6581C22.8392 62.3847 22.257 62.9888 21.5276 63H21.5058C21.1629 63 20.8419 62.8691 20.594 62.6269C20.3385 62.3819 20.197 62.0524 20.1913 61.699L20.1639 60.0663C20.1582 59.715 20.292 59.3805 20.537 59.1271C20.782 58.8715 21.1087 58.73 21.4593 58.7244H21.4811C22.1753 58.7244 22.7463 59.2601 22.7956 59.9466L22.012 59.9494C21.993 59.8375 21.9388 59.7368 21.8571 59.6558C21.7536 59.5551 21.6177 59.5009 21.4706 59.5037C21.1742 59.5094 20.9369 59.7565 20.9425 60.0536L20.97 61.6891C20.9728 61.8334 21.0298 61.9693 21.1333 62.07C21.2368 62.1707 21.3699 62.2249 21.5142 62.2221C21.6614 62.2192 21.7973 62.1622 21.8979 62.0587C21.9986 61.9524 22.0528 61.8165 22.05 61.6694L22.0416 61.411L21.4917 61.4216L21.4811 60.6436L22.8061 60.619L22.8287 61.6581Z" fill="white"/>
<path d="M26.5182 61.1799L26.2626 59.5662C26.1485 58.8481 25.4706 58.3552 24.7524 58.4693C24.0364 58.5812 23.5471 59.2585 23.6583 59.9795L23.9139 61.5931C23.9681 61.9416 24.1561 62.2465 24.4419 62.4535C24.6708 62.6224 24.9397 62.709 25.215 62.709C25.2833 62.709 25.3509 62.7034 25.422 62.6929C26.1401 62.5788 26.6322 61.9008 26.5182 61.1799ZM25.2988 61.9226C25.0073 61.9691 24.7299 61.7677 24.6841 61.4706L24.4279 59.857C24.406 59.7126 24.4384 59.5711 24.5229 59.4514C24.6074 59.3374 24.7327 59.2585 24.8742 59.2367C24.9017 59.2339 24.9313 59.2311 24.9587 59.2311C25.2199 59.2311 25.4515 59.4219 25.4952 59.688L25.7508 61.3017C25.7972 61.5988 25.5931 61.8762 25.2988 61.9226Z" fill="white"/>
<path d="M30.0546 60.1191C29.8589 59.515 29.2626 59.1489 28.6057 59.2263L28.1382 59.2812C27.97 59.3031 27.8038 59.1869 27.7447 59.006C27.7109 58.9018 27.7186 58.7919 27.7672 58.6962C27.8151 58.6011 27.8974 58.5307 27.9988 58.4976L28.1305 58.4547C28.3706 58.3766 28.6346 58.4779 28.7571 58.6955L28.793 58.7595L29.5386 58.5174L29.497 58.4258C29.2182 57.8133 28.5276 57.5078 27.8897 57.714L27.7587 57.757C27.1385 57.9583 26.797 58.6272 26.9984 59.2475C27.1758 59.7938 27.7137 60.1338 28.2769 60.0564L28.7395 59.9909C28.988 59.9571 29.2344 60.1148 29.3133 60.3591C29.3583 60.4985 29.3478 60.6457 29.2837 60.7731C29.2196 60.9013 29.1077 60.9963 28.9697 61.0414C28.7317 61.1188 28.4649 61.0174 28.3368 60.8006L28.3002 60.7386L27.556 60.9801L27.5975 61.0716C27.8172 61.5546 28.2945 61.8461 28.8007 61.8461C28.9366 61.8461 29.0746 61.825 29.2105 61.7806C29.5435 61.6722 29.8146 61.4398 29.9744 61.1251C30.1349 60.8118 30.1631 60.4542 30.0546 60.1191Z" fill="white"/>
</g>
</svg>


    </div>
 
  );
};

export default Loader;
