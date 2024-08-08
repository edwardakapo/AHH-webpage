

const WhatsappIcon = ({style}) => (
<svg xmlns="http://www.w3.org/2000/svg"width="30" height="30" viewBox="0 0 24 24" style={style}>
	<path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
</svg>
) 

const PhoneIcon = ({style}) => (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"style={style}>
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
</svg>
)

const EmailIcon = ({style}) => (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={style}>
	<path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
</svg>
)

const ArrowIcon = ({style}) => (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={style}>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5" />
</svg>
)

const MotherIcon = () => (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_25_3704" maskUnits="userSpaceOnUse" x="0" y="0" width="71" height="71">
    <path d="M70.5 0.5H0.5V70.5H70.5V0.5Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_25_3704)">
    <path d="M21.6871 32.868C19.0551 32.8442 15.5061 32.8561 14.958 36.4646C14.6605 37.5601 12.578 46.9688 23.3069 56.9613C25.9865 59.4624 32.766 65.2745 37.694 65.2745C41.3501 65.2745 45.8525 62.5949 49.4491 58.2836C50.7761 56.6734 51.8853 54.8955 52.7482 52.9958C55.1541 47.8627 57.6314 40.8956 55.7141 36.8342C55.1641 35.6549 54.1842 34.7304 52.975 34.2498C54.2844 32.8232 55.048 30.98 55.131 29.0453C55.1614 27.5683 54.8155 26.1079 54.1258 24.8015C53.4361 23.4951 52.4253 22.3857 51.1886 21.5777C50.2511 20.9757 49.2086 20.5556 48.1156 20.3394C47.676 11.0371 44.197 5.72549 38.492 5.72549C35.3476 5.72549 31.7391 6.08249 28.7494 7.84579C26.8925 7.09627 24.8161 7.1031 22.9642 7.86481C21.1122 8.62652 19.6319 10.0826 18.8397 11.9217C18.0476 13.7608 18.0065 15.8369 18.7253 17.7059C19.4441 19.5749 20.8657 21.0884 22.686 21.9228C22.8464 25.4936 23.9789 28.9528 25.9613 31.9272C25.3551 32.7966 23.855 32.8561 21.6871 32.868ZM38.611 30.6763C38.8072 30.8997 38.9507 31.1642 39.031 31.4505C39.0429 31.5905 39.0072 31.7004 38.8168 32.0343C38.4598 32.6895 37.7927 33.904 39.1976 35.6666C39.3232 35.8181 39.4584 35.9614 39.6022 36.0957C38.7504 36.5061 37.8177 36.7213 36.8722 36.7257C33.3022 36.7257 29.0714 33.3552 26.7607 28.6267C26.7607 28.591 26.7845 28.5567 26.7845 28.5196C26.7979 27.2556 27.1303 26.0155 27.7507 24.9142C28.3711 23.8129 29.2595 22.8861 30.3335 22.2196C31.2899 21.6853 32.2985 21.2502 33.3435 20.9211C33.6291 20.814 33.9154 20.7188 34.201 20.6117C35.7891 20.112 37.2402 19.252 38.4409 18.0987C38.6677 17.859 38.8782 17.6043 39.0709 17.3364C39.4377 17.8224 39.945 18.1841 40.5241 18.3724C41.3514 18.564 42.2056 18.6113 43.049 18.5124C43.3696 18.4822 43.6917 18.4703 44.0136 18.4767C44.3451 18.52 44.6638 18.6324 44.949 18.8068C45.2342 18.9812 45.4795 19.2136 45.6691 19.4889C45.681 19.715 45.7048 19.918 45.7167 20.1322C44.7189 20.1763 43.7343 20.3773 42.7991 20.7279C40.3099 21.6806 37.4161 23.9318 37.4161 27.1357C37.4004 28.4174 37.8219 29.6662 38.611 30.6763ZM42.2433 37.3102C42.767 37.401 43.2963 37.4567 43.8274 37.4768C43.4125 38.7373 42.6681 39.864 41.6714 40.7402C39.9802 42.1339 35.0732 42.6575 31.7265 38.6682C31.322 38.149 30.9921 37.5757 30.7465 36.9651C32.5241 38.2893 34.6645 39.0375 36.8799 39.1092C38.816 39.1102 40.6994 38.4785 42.2433 37.3102ZM45.2806 16.3375C44.8897 16.1988 44.4804 16.1186 44.0661 16.0995C43.6853 16.0876 43.3038 16.1233 42.9111 16.1471C42.3402 16.2254 41.7602 16.2053 41.1961 16.0876C40.8867 15.9567 40.3624 14.9921 40.0649 13.9918C40.0308 13.6504 39.9548 13.3144 39.8388 12.9915C39.737 12.7134 39.5359 12.4828 39.2741 12.3442C39.0123 12.2056 38.7085 12.1689 38.4213 12.2411C38.135 12.3143 37.8861 12.4915 37.7232 12.7381C37.5603 12.9847 37.495 13.2832 37.54 13.5753C37.5821 13.8439 37.6377 14.1103 37.7066 14.3733C37.6509 15.1726 37.3019 15.9232 36.7266 16.481C35.7718 17.3578 34.6342 18.0117 33.396 18.3955L32.5623 18.693C31.3624 19.073 30.205 19.5759 29.1085 20.1938C27.4639 21.218 26.1588 22.7055 25.3572 24.4694C25.1621 23.4807 25.0625 22.4755 25.0597 21.4678C25.0597 15.2987 26.8461 11.952 29.5614 10.1278C29.5873 10.116 29.611 10.0999 29.6314 10.0802C32.0485 8.47649 35.2048 8.10549 38.492 8.10549C42.7438 8.10549 44.5302 12.3594 45.2806 16.3375ZM20.6035 14.9655C20.6072 13.5608 21.1672 12.2147 22.161 11.2219C23.1547 10.2291 24.5013 9.6703 25.906 9.66789C26.0726 9.66789 26.2392 9.67979 26.4065 9.69169C24.4773 11.7161 23.0955 14.7415 22.7623 19.2194C22.0906 18.7327 21.5444 18.093 21.169 17.3532C20.7936 16.6135 20.5998 15.795 20.6035 14.9655ZM27.6301 34.1308C27.7954 36.3306 28.5846 38.4376 29.9051 40.2047C34.0141 45.0879 40.4093 44.8737 43.1848 42.5749C44.9671 40.9778 46.1481 38.8179 46.5308 36.4555C46.5495 36.2839 46.5315 36.1102 46.4782 35.946C46.4249 35.7818 46.3374 35.6307 46.2214 35.5028C46.1057 35.3722 45.9622 35.2691 45.8015 35.2011C45.6407 35.1332 45.4668 35.1021 45.2925 35.1101C43.6825 35.1339 41.8506 35.1696 41.0526 34.1812C40.6326 33.6688 40.648 33.6569 40.8979 33.1928C41.2853 32.5883 41.4579 31.871 41.3879 31.1565C41.2683 30.4913 40.986 29.8661 40.5661 29.3365C40.0602 28.7279 39.7897 27.9578 39.8038 27.1665C39.8038 25.3087 41.8044 23.6889 43.6629 22.9742C44.6747 22.5861 45.7626 22.438 46.8413 22.5413C47.92 22.6447 48.96 22.9968 49.8796 23.5699C50.7725 24.1521 51.5031 24.9513 52.0029 25.8928C52.5028 26.8342 52.7556 27.8871 52.7377 28.9529C52.6879 30.0004 52.3559 31.015 51.7767 31.8893C51.1976 32.7636 50.3929 33.465 49.4477 33.9194C49.2886 33.9896 49.1471 34.0944 49.0338 34.2263C48.9204 34.3582 48.838 34.5138 48.7925 34.6817C48.7456 34.8479 48.7352 35.0222 48.7619 35.1928C48.7886 35.3634 48.8518 35.5262 48.9472 35.6701C50.9002 38.5877 50.3885 42.8633 47.8272 44.8646C44.6114 47.5946 39.7163 51.7365 37.799 53.3206C36.0028 51.257 31.1196 45.3735 28.846 42.6225C26.7621 40.1095 26.69 40.0262 26.606 39.9429C26.387 39.7238 26.0905 39.5996 25.7807 39.5974C25.4709 39.5952 25.1727 39.715 24.9505 39.931C24.726 40.1462 24.5933 40.4399 24.5803 40.7506C24.5673 41.0614 24.6748 41.3651 24.8805 41.5984C24.9995 41.7384 25.8332 42.7415 27.0008 44.1471C35.741 54.687 36.9436 56.1402 37.694 56.1402C37.817 56.1339 37.9379 56.1057 38.051 56.0569C38.3366 55.9617 38.471 55.9169 49.321 46.7077C52.2743 44.4089 53.241 40.0619 51.9173 36.382C52.277 36.4978 52.6082 36.6882 52.8893 36.9406C53.1705 37.1931 53.3952 37.5019 53.549 37.8471C54.704 40.2887 53.5966 45.5765 50.5838 51.9871C49.8048 53.7015 48.8036 55.3059 47.606 56.759C44.5092 60.4865 40.6151 62.8924 37.6968 62.8924C34.8744 62.8924 30.0983 60.0224 24.9414 55.2225C14.8985 45.8733 17.1735 37.4054 17.2687 37.0484L17.3044 36.8699C17.4948 35.4643 18.5189 35.2263 21.6752 35.2501C23.6877 35.2501 26.0103 35.2501 27.4152 33.904C27.4992 33.9754 27.5587 34.0587 27.6301 34.1308Z" fill="#3B4323"/>
    </g>
</svg>
)

const HoldingHeartIcon = () => (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_25_3737"  maskUnits="userSpaceOnUse" x="0" y="0" width="71" height="71">
    <path d="M70.5 0.5H0.5V70.5H70.5V0.5Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_25_3737)">
    <path d="M63.0308 20.0734C62.086 19.904 61.112 20.0986 60.3048 20.6181C59.4976 21.1375 58.917 21.9433 58.6796 22.8734L56.2457 32.3773C56.1497 32.331 56.0514 32.2899 55.951 32.2541C55.2074 31.9768 54.3949 31.9427 53.6306 32.1565C52.8663 32.3704 52.1896 32.8212 51.6978 33.4441C49.6328 36.025 47.8016 38.2867 46.3778 39.9709C45.0246 41.4911 43.484 42.8335 41.7928 43.9658C40.6638 44.754 39.7427 45.8044 39.1087 47.0267C38.4748 48.2491 38.1467 49.607 38.1528 50.984V62.086C38.1537 62.4117 38.2836 62.7238 38.5139 62.9542C38.7442 63.1845 39.0563 63.3143 39.382 63.3152H49.2275C49.5532 63.3143 49.8654 63.1845 50.0957 62.9542C50.326 62.7238 50.4558 62.4117 50.4567 62.086V53.567L57.057 49.4503C58.4436 48.5815 59.6414 47.4429 60.5794 46.1021C61.5173 44.7613 62.1762 43.2457 62.517 41.6453L66.0814 24.5968C66.1857 24.099 66.1891 23.5854 66.0914 23.0863C65.9937 22.5873 65.797 22.1128 65.5128 21.6911C65.2285 21.2694 64.8626 20.9089 64.4367 20.6311C64.0108 20.3532 63.5334 20.1636 63.0329 20.0734H63.0308ZM63.6699 24.0928L60.1055 41.1413C59.8342 42.4167 59.3092 43.6246 58.5617 44.6931C57.8142 45.7615 56.8595 46.6687 55.7543 47.3608L48.5758 51.8352C48.3986 51.9459 48.2525 52.0999 48.1515 52.2828C48.0504 52.4657 47.9977 52.6713 47.9983 52.8803V60.8323H40.6112V50.9623C40.6074 49.9827 40.8414 49.0168 41.2931 48.1476C41.7449 47.2784 42.4008 46.5318 43.2047 45.972C45.0743 44.7236 46.7727 43.2361 48.2566 41.5473C49.6944 39.8512 51.5382 37.5769 53.6158 34.9715C53.7559 34.8023 53.9355 34.6701 54.1387 34.5866C54.3419 34.5032 54.5625 34.4709 54.7811 34.4928C54.9997 34.5146 55.2095 34.5899 55.3922 34.712C55.5749 34.834 55.7247 34.9991 55.8285 35.1927C55.8411 35.2053 55.8411 35.2172 55.853 35.2417C55.8656 35.2788 55.8901 35.3152 55.902 35.3523C55.9704 35.5315 55.9982 35.7237 55.9833 35.915C55.9684 36.1062 55.9113 36.2918 55.8159 36.4583C53.9847 39.7399 51.7104 43.3883 47.9759 45.2223C47.8306 45.2933 47.7008 45.3922 47.5937 45.5134C47.4867 45.6347 47.4045 45.7758 47.352 45.9287C47.2995 46.0817 47.2776 46.2434 47.2876 46.4049C47.2976 46.5663 47.3393 46.7241 47.4103 46.8694C47.4813 47.0147 47.5803 47.1446 47.7015 47.2516C47.8227 47.3587 47.9638 47.4408 48.1167 47.4933C48.2697 47.5458 48.4315 47.5677 48.5929 47.5577C48.7543 47.5477 48.9121 47.506 49.0574 47.435C53.431 45.2839 55.951 41.2645 57.967 37.663C58.2281 37.1973 58.3872 36.6814 58.4338 36.1496C58.4804 35.6178 58.4134 35.0821 58.2372 34.5781L61.0764 23.4908C61.1627 23.1644 61.3687 22.8824 61.6533 22.7008C61.938 22.5193 62.2805 22.4514 62.6129 22.5108C62.7905 22.5413 62.9598 22.6085 63.11 22.7079C63.2603 22.8073 63.3883 22.9368 63.4858 23.0883C63.6754 23.3865 63.7414 23.7468 63.6699 24.0928ZM8.34543 41.6453C8.68448 43.2463 9.34272 44.7627 10.2808 46.1037C11.2189 47.4447 12.4177 48.5829 13.8054 49.4503L20.4036 53.567V62.0615C20.4045 62.3872 20.5344 62.6993 20.7647 62.9297C20.995 63.16 21.3071 63.2898 21.6328 63.2907H31.4783C31.804 63.2898 32.1162 63.16 32.3465 62.9297C32.5768 62.6993 32.7066 62.3872 32.7075 62.0615V50.9623C32.7095 49.586 32.3797 48.2296 31.7461 47.0079C31.1125 45.7862 30.1937 44.7352 29.0675 43.9441C27.3732 42.8159 25.8321 41.4731 24.4825 39.9492C22.5155 37.614 20.3154 34.8602 19.1723 33.4224C18.6776 32.8032 18.0008 32.3552 17.2376 32.1416C16.4744 31.9281 15.6633 31.9598 14.9191 32.2324C14.8179 32.266 14.7194 32.3072 14.6244 32.3556L12.1926 22.8517C11.9495 21.9251 11.3676 21.1233 10.5619 20.6049C9.75632 20.0865 8.78554 19.8891 7.84143 20.0517C7.33736 20.1467 6.85721 20.3411 6.42892 20.6233C6.00062 20.9056 5.63273 21.2702 5.34663 21.696C5.06275 22.1169 4.86639 22.5906 4.76923 23.089C4.67206 23.5873 4.67608 24.1001 4.78103 24.5968L8.34543 41.6453ZM7.38643 23.0603C7.48568 22.9115 7.61431 22.7846 7.76442 22.6873C7.91454 22.59 8.08295 22.5245 8.25933 22.4947C8.5917 22.4353 8.93425 22.5031 9.21891 22.6847C9.50357 22.8663 9.70952 23.1483 9.79583 23.4747L12.635 34.5655C12.4589 35.0695 12.3919 35.6052 12.4384 36.137C12.485 36.6688 12.6441 37.1847 12.9052 37.6504C14.9212 41.2519 17.4405 45.2713 21.8169 47.4224C21.9626 47.4966 22.1215 47.541 22.2845 47.5531C22.4475 47.5652 22.6113 47.5448 22.7663 47.4929C22.9213 47.441 23.0645 47.3588 23.1874 47.2511C23.3103 47.1434 23.4105 47.0122 23.4822 46.8653C23.5539 46.7184 23.5957 46.5587 23.605 46.3956C23.6144 46.2324 23.5911 46.069 23.5366 45.9149C23.4822 45.7607 23.3976 45.619 23.2877 45.498C23.1779 45.3769 23.0451 45.2789 22.897 45.2097C19.1478 43.3659 16.8861 39.7154 15.057 36.4457C14.9617 36.2792 14.9045 36.0936 14.8896 35.9024C14.8747 35.7111 14.9025 35.5189 14.9709 35.3397C14.9894 35.2995 15.0057 35.2584 15.0199 35.2165C15.0325 35.2039 15.0325 35.192 15.0444 35.1794C15.1935 34.8819 15.4542 34.6554 15.7696 34.5494C16.0288 34.4527 16.3118 34.4398 16.5786 34.5125C16.8455 34.5852 17.0828 34.7399 17.2571 34.9547C18.4128 36.4051 20.6374 39.1827 22.6163 41.5305C24.1045 43.2195 25.8068 44.707 27.6801 45.9552C28.4834 46.5185 29.1388 47.2676 29.5903 48.1386C30.0419 49.0097 30.2763 49.977 30.2736 50.9581V60.8281H22.8865V52.8796C22.8871 52.6706 22.8344 52.465 22.7334 52.2821C22.6323 52.0992 22.4863 51.9452 22.309 51.8345L15.127 47.3608C14.0219 46.6687 13.0671 45.7615 12.3196 44.6931C11.5721 43.6246 11.0471 42.4167 10.7758 41.1413L7.21703 24.0928C7.16483 23.9191 7.15302 23.7358 7.1825 23.5568C7.21198 23.3779 7.28197 23.2081 7.38713 23.0603H7.38643ZM34.9076 34.996C35.07 35.0689 35.2459 35.1066 35.4239 35.1066C35.6018 35.1066 35.7778 35.0689 35.9401 34.996C36.5176 34.7258 50.1123 28.3096 50.1123 17.37C50.1124 15.6656 49.6374 13.9949 48.7407 12.5454C47.844 11.096 46.5611 9.9251 45.0359 9.16423C43.5108 8.40336 41.8037 8.08261 40.1064 8.23798C38.4091 8.39335 36.7887 9.01868 35.427 10.0438C33.8391 8.83872 31.8982 8.19069 29.9047 8.2C27.4739 8.20407 25.1439 9.1715 23.4251 10.8903C21.7062 12.6092 20.7388 14.9392 20.7347 17.37C20.7354 28.3089 34.3301 34.7251 34.9076 34.996ZM29.9047 10.657C31.6447 10.6551 33.3164 11.3333 34.5632 12.547C34.7909 12.7716 35.0978 12.8975 35.4176 12.8975C35.7374 12.8975 36.0443 12.7716 36.2719 12.547C37.2177 11.6287 38.4133 11.0098 39.7092 10.7677C41.005 10.5255 42.3434 10.6709 43.557 11.1856C44.7706 11.7003 45.8054 12.5615 46.5321 13.6614C47.2587 14.7613 47.6448 16.0511 47.642 17.3693C47.642 25.6293 37.7965 31.2587 35.4116 32.5005C33.0267 31.2594 23.1812 25.6293 23.1812 17.3693C23.1881 15.5892 23.899 13.8842 25.1587 12.6266C26.4185 11.3689 28.1247 10.6609 29.9047 10.657Z" fill="#3B4323"/>
    </g>
</svg>
)

const HeartIcon = () => (
    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_25_3744"  maskUnits="userSpaceOnUse" x="0" y="0" width="71" height="71">
        <path d="M70.5 0.5H0.5V70.5H70.5V0.5Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_25_3744)">
        <path d="M53.9744 9.61191C51.6582 8.33557 49.0759 7.618 46.4333 7.5164C43.7907 7.41479 41.1609 7.93197 38.7536 9.02671C36.7457 10.0327 34.9557 11.4244 33.4858 13.1224C32.0159 14.8204 30.895 16.7913 30.187 18.9226C27.9684 18.3263 25.671 18.0758 23.376 18.1799C20.0552 18.259 13.9869 19.0808 10.7333 23.6959C4.1589 33.0171 9.3599 42.1136 11.105 44.6672C13.7391 48.5172 18.2086 51.2983 24.3889 52.9188C27.3947 53.707 28.6778 54.0668 30.3557 54.54C31.4057 54.8326 32.6076 55.17 34.4857 55.688C38.3357 56.7464 43.5157 58.9192 46.2723 63.2648C46.373 63.4243 46.5127 63.5555 46.6781 63.6461C46.8436 63.7368 47.0294 63.7838 47.218 63.7828C47.3916 63.7815 47.5626 63.7406 47.7179 63.6631C47.8732 63.5856 48.0088 63.4736 48.1142 63.3356C48.2195 63.1977 48.292 63.0374 48.3259 62.8672C48.3599 62.697 48.3544 62.5212 48.31 62.3534C47.218 58.4131 49.3229 54.4392 50.6739 52.4134C51.8947 50.6786 53.2258 49.0242 54.659 47.4602C55.751 46.2107 56.8878 44.9157 57.9126 43.5402C62.0426 38.0354 64.0929 31.6633 63.6876 25.6293C63.2508 18.8771 59.4344 12.5841 53.9744 9.61191ZM45.1705 26.4539C45.4477 26.5155 45.7379 26.4695 45.9825 26.3253C46.227 26.181 46.4077 25.9493 46.4879 25.6769C46.5328 25.5736 46.6008 25.482 46.6868 25.4092C46.7727 25.3364 46.8742 25.2843 46.9835 25.2569C47.1726 25.1958 47.3731 25.1782 47.5699 25.2055C47.7668 25.2328 47.9549 25.3042 48.1203 25.4144C48.8518 25.9884 48.9309 27.1707 48.6943 28.0149C48.2713 29.1738 47.6334 30.2425 46.8141 31.1649C46.7203 31.2868 46.652 31.4264 46.6132 31.5753C46.5745 31.7242 46.5662 31.8793 46.5887 32.0315C46.6123 32.1841 46.6676 32.3301 46.751 32.4601C46.8344 32.5901 46.9441 32.7011 47.0731 32.7861C49.5583 34.4878 51.2984 37.0757 51.9367 40.0192C52.5398 43.1005 51.9947 46.2959 50.4044 49.003C49.9319 49.5882 49.4811 50.193 49.0534 50.8153C49.3026 48.9643 49.4305 47.0991 49.4363 45.2314C49.3803 44.2066 49.29 42.4846 48.1301 41.3359C47.62 40.8805 47.0089 40.5532 46.3472 40.3809C45.6855 40.2087 44.9922 40.1965 44.3249 40.3454C43.3762 40.5618 42.4602 40.9024 41.6005 41.3583L41.2631 41.5382C39.6986 42.2809 38.5499 42.4279 37.8632 41.9771C37.1765 41.5263 36.8944 40.4245 36.7502 39.6272L36.6802 39.2331C36.5526 37.9981 36.1196 36.8143 35.4202 35.7884C35.0182 35.3085 34.5615 34.8772 34.0594 34.5032C33.3503 33.9292 32.9114 33.5463 32.8771 33.1186C32.9632 32.5745 33.2101 32.0686 33.5862 31.6661C33.9978 31.1427 34.3314 30.5624 34.5767 29.9434C34.7731 29.2706 34.8324 28.5652 34.7513 27.869C34.6701 27.1728 34.4501 26.5 34.1042 25.8904C33.8788 25.4291 33.6198 24.9895 33.3496 24.5506C33.0495 24.0683 32.7788 23.5683 32.539 23.0533C31.979 21.7233 32.1673 20.0363 33.1242 17.8859C33.2979 18.2465 33.5174 18.5832 33.7773 18.8876C35.0604 20.3513 36.963 20.9477 38.4827 21.297C38.7627 21.367 39.0427 21.4209 39.3381 21.4881C40.4864 21.6822 41.6013 22.0388 42.6491 22.5472C43.5724 23.0652 44.4838 24.1236 44.3375 25.2072C44.2844 25.4828 44.3421 25.7682 44.498 26.0016C44.654 26.2349 44.8956 26.3975 45.1705 26.4539ZM35.0954 53.5061C33.2264 52.9993 32.0217 52.6619 30.9864 52.3693C29.298 51.8968 28.003 51.5363 24.9748 50.7369C19.3349 49.262 15.3043 46.7966 12.9852 43.3967C11.4452 41.1336 6.8497 33.1298 12.5911 24.9902C15.2819 21.185 20.5389 20.4983 23.4411 20.4311C23.6889 20.4199 23.9255 20.4199 24.1614 20.4199C26.1206 20.3575 28.0765 20.6239 29.9476 21.2081C29.9127 22.1378 30.0818 23.064 30.4432 23.9213C30.7174 24.5315 31.0334 25.1221 31.3889 25.6888C31.6255 26.0717 31.8502 26.4658 32.0532 26.8711C32.4624 27.5706 32.595 28.3979 32.4249 29.1902C32.2424 29.6053 32.0071 29.9952 31.7249 30.3501C30.9913 31.1653 30.5897 32.2257 30.5993 33.3223C30.7344 34.7293 31.7816 35.5742 32.6146 36.249C32.9845 36.5193 33.3242 36.8289 33.6275 37.1723C34.0894 37.9148 34.3693 38.756 34.4444 39.6272L34.5235 40.0325C34.7489 41.2225 35.2102 42.9256 36.6172 43.8489C38.7109 45.2335 41.3569 43.984 42.2235 43.5689L42.584 43.4002C43.2659 43.0312 43.9924 42.7512 44.7456 42.5672C45.0561 42.4879 45.3806 42.4802 45.6945 42.5446C46.0084 42.609 46.3037 42.7438 46.5579 42.9389C47.0535 43.4345 47.1431 44.4026 47.1998 45.3595C47.1329 47.9173 46.9226 50.4693 46.5698 53.0035C46.4347 54.2754 46.2772 55.6943 46.1085 57.2588V57.2672C45.9655 57.8898 45.864 58.5212 45.8047 59.1572C43.2007 56.6582 39.5642 54.7332 35.0954 53.5061ZM56.1248 42.192C55.5508 42.9578 54.9201 43.7117 54.2901 44.4551C54.5226 42.8231 54.4769 41.1635 54.155 39.5467C53.476 36.437 51.766 33.6481 49.3026 31.6325C50.0075 30.7272 50.5417 29.701 50.879 28.6043C51.3179 27.0167 51.0701 24.867 49.528 23.6399C49.0761 23.2982 48.5484 23.0707 47.9898 22.9766C47.4312 22.8825 46.8581 22.9247 46.3192 23.0995C46.2632 23.1219 46.2065 23.1331 46.1505 23.1555C45.6216 22.0684 44.7731 21.1689 43.7187 20.5774C42.4797 19.9434 41.1508 19.5029 39.7784 19.2712C39.5082 19.2152 39.2268 19.1473 38.9566 19.0913C37.6966 18.7987 36.2882 18.3598 35.4216 17.3798C34.7685 16.6371 34.5319 15.3421 35.1962 14.7002C35.3106 14.5853 35.399 14.447 35.4552 14.2949C36.65 12.9422 38.1014 11.8402 39.7252 11.0525C41.8079 10.1076 44.0828 9.66333 46.368 9.75522C48.6532 9.84712 50.8851 10.4726 52.8852 11.5817C57.6809 14.1934 61.036 19.7661 61.4413 25.7777C61.8326 31.2832 59.93 37.1149 56.1248 42.192Z" fill="#3B4323"/>
        </g>
    </svg>      
)
export { WhatsappIcon , PhoneIcon, EmailIcon, ArrowIcon, MotherIcon, HoldingHeartIcon, HeartIcon}