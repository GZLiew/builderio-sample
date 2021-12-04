const Flexible = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.4645 45C10.0948 45 0 34.9052 0 22.4645C0 10.0948 10.0948 0 22.4645 0C34.8341 0 44.9289 10.0948 44.9289 22.4645C45 34.9052 34.9052 45 22.4645 45ZM22.4645 1.4218C10.8768 1.4218 1.4218 10.8768 1.4218 22.4645C1.4218 34.0521 10.8768 43.5071 22.4645 43.5071C34.1232 43.5782 43.5782 34.1232 43.5782 22.4645C43.5782 10.8057 34.1232 1.4218 22.4645 1.4218Z"
        fill="#D3AD6F"
      />
      <path
        d="M37.7492 21.8959C36.9672 21.3272 36.1852 20.7585 35.4032 20.1187C34.479 19.4078 33.5549 18.6969 32.5596 17.986C32.4174 17.8438 32.1331 17.7016 31.7776 17.8438C31.4932 17.986 31.3511 18.1992 31.3511 18.5547C31.3511 18.768 31.3511 18.9812 31.3511 19.1945V19.4078C31.28 19.4078 31.2089 19.4078 31.1378 19.4078C29.1473 19.4078 27.2278 19.9054 25.4506 20.8296V14.1471C25.5217 14.1471 25.5928 14.1471 25.6639 14.1471C25.8771 14.1471 26.0193 14.1471 26.2326 14.1471C26.588 14.1471 26.8724 14.1471 27.0857 13.7917C27.2989 13.4362 27.0857 13.1518 26.8724 12.8675C26.3748 12.2277 25.8771 11.5879 25.3795 10.9481C24.5975 9.9528 23.8155 8.95754 23.1046 7.89119C23.0335 7.74901 22.8203 7.67792 22.6781 7.53574C22.607 7.46465 22.5359 7.46464 22.4648 7.39355H22.3226C22.2515 7.46464 22.1804 7.46465 22.1094 7.53574C21.9672 7.60683 21.825 7.74901 21.6828 7.89119C20.9008 8.95754 20.0477 10.0239 19.2658 11.0191C18.7681 11.659 18.3416 12.2277 17.844 12.8675C17.6307 13.0808 17.4885 13.3651 17.7018 13.7206C17.915 14.076 18.1994 14.1471 18.4838 14.076C18.697 14.076 18.8392 14.076 19.0525 14.076C19.1236 14.076 19.1947 14.076 19.2658 14.076V20.7585C17.4174 19.7632 15.5691 19.2656 13.5075 19.2656C13.4364 19.2656 13.3653 19.2656 13.2942 19.2656V18.9812C13.2942 18.768 13.2942 18.5547 13.2942 18.3414C13.2942 17.986 13.152 17.7727 12.9387 17.6305C12.6544 17.4883 12.4411 17.5594 12.1568 17.7727C11.4458 18.3414 10.7349 18.8391 10.024 19.4078C9.02879 20.1898 8.03353 20.9007 7.03827 21.6827C6.96718 21.7537 6.89609 21.8248 6.825 21.967C6.825 22.0381 6.75391 22.0381 6.75391 22.1092V22.5357C6.825 22.6068 6.825 22.6068 6.89609 22.6779C6.96718 22.749 7.03827 22.8912 7.18045 22.9623C8.17571 23.7443 9.17097 24.4552 10.1662 25.2372C10.8771 25.8059 11.588 26.3035 12.2989 26.8722C12.5833 27.0855 12.7966 27.1566 13.0809 27.0144C13.3653 26.8722 13.4364 26.659 13.4364 26.3035C13.4364 26.0902 13.4364 25.877 13.4364 25.6637V25.3793H13.5075C13.5786 25.3793 13.6496 25.3793 13.7207 25.3793C13.8629 25.3793 14.0051 25.3793 14.1473 25.3793C14.4316 25.3793 14.7871 25.3793 15.0714 25.4504C17.7018 25.9481 19.4079 28.0097 19.4079 30.7111C19.4079 31.9907 19.4079 33.2703 19.4079 34.55C19.4079 35.1898 19.4079 35.8296 19.4079 36.4694C19.4079 37.1092 19.6212 37.3225 20.261 37.3225C20.9719 37.3225 21.6828 37.3225 22.4648 37.3225C23.2468 37.3225 23.8866 37.3225 24.6686 37.3225C25.3084 37.3225 25.5217 37.1092 25.5217 36.4694C25.5217 35.9007 25.5217 35.403 25.5217 34.8343C25.5217 33.4836 25.5217 32.1329 25.5217 30.7822C25.5217 30.2846 25.5928 29.7869 25.6639 29.3604C26.3037 26.8011 28.7207 25.1661 31.4222 25.4504V25.6637C31.4222 25.877 31.4222 26.0902 31.4222 26.3035C31.4222 26.5168 31.4222 26.8722 31.7776 27.0144C32.1331 27.1566 32.4174 27.0144 32.5596 26.8722C33.4838 26.1613 34.479 25.3793 35.4032 24.6684C36.1141 24.0997 36.8961 23.531 37.607 22.9623C37.8913 22.749 37.9624 22.5357 37.9624 22.3225C38.1757 22.2514 38.0335 22.0381 37.7492 21.8959ZM25.5217 26.659C25.5217 26.3035 25.5217 25.9481 25.5217 25.5926C25.5217 24.6684 25.5217 23.8154 25.5217 22.8912C25.5217 22.6068 25.5928 22.5357 25.806 22.3936C27.5122 21.3983 29.2895 20.9007 31.28 20.9007C31.3511 20.9007 31.4222 20.9007 31.4222 20.9007C31.4932 20.9007 31.5643 20.9007 31.6354 20.9007C31.7776 20.9007 31.9198 20.9007 32.062 20.9007C32.5596 20.9007 32.844 20.6874 32.844 20.1187C32.844 20.0476 32.844 20.0476 32.844 19.9765L36.3274 22.6068L32.844 25.3082V25.2372C32.844 25.1661 32.844 25.095 32.844 25.0239C32.844 24.6684 32.5596 24.3841 32.2752 24.3841H32.062C30.9956 24.3841 29.8582 24.313 28.7918 24.6684C27.5833 25.095 26.5169 25.8059 25.6639 26.8722L25.5928 26.9433C25.5217 26.7301 25.5217 26.659 25.5217 26.659ZM24.171 25.6637C24.0288 25.5215 23.9577 25.3083 23.8155 25.1661C23.4601 24.6684 23.1757 24.1708 22.7492 23.7443C22.3226 23.2466 21.7539 22.749 21.2563 22.2514C21.1141 22.1092 21.043 22.0381 20.9008 21.8959C20.7586 21.7537 20.6876 21.6827 20.6876 21.4694C20.6876 19.4078 20.6876 17.3462 20.6876 15.2846V13.7206C20.6876 13.0097 20.5454 12.7964 19.7634 12.7253C19.7634 12.7253 19.7634 12.7253 19.6923 12.7253L22.3937 9.2419L25.0951 12.7253H25.024C24.8819 12.7253 24.8108 12.7253 24.7397 12.7253C24.3842 12.7964 24.171 13.0097 24.171 13.3651C24.171 13.4362 24.171 13.5784 24.171 13.6495V25.6637ZM20.7586 30.9244C20.7586 27.5831 18.5549 24.9528 15.2847 24.313C14.6449 24.1708 14.0051 24.1708 13.3653 24.1708C13.152 24.1708 12.9387 24.1708 12.7255 24.1708C12.4411 24.1708 12.1568 24.4552 12.1568 24.7395C12.1568 24.8106 12.1568 24.8817 12.1568 25.0239V25.095L8.60225 22.3936L12.0857 19.6921C12.0857 19.7632 12.0857 19.8343 12.0857 19.9054C12.0857 20.403 12.37 20.6163 12.7966 20.6163C13.0098 20.6163 13.2231 20.6163 13.4364 20.6163C13.934 20.6163 14.5027 20.6163 15.0714 20.6874C18.5549 21.185 21.1852 23.0334 22.9624 26.1613C23.7444 27.5831 24.171 29.2182 24.171 30.9955C24.171 32.1329 24.171 33.3414 24.171 34.4789V35.7585C24.171 35.8296 24.171 35.8296 24.171 35.9007H20.7586V34.0523C20.7586 33.1282 20.7586 31.9907 20.7586 30.9244Z"
        fill="#D3AD6F"
      />
    </svg>
  )
}

export default Flexible