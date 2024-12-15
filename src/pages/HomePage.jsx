import React from 'react'

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <header className="header">
            <div className="header-fixed">
                <div className="header-navbar container">
                    <a href="" className="header-logo"><img src="img/logo.png" alt="logo"/></a>
                    <nav className="nav">
                        <ul className="menu">
                            <li className="item">
                                <a className="link">Home</a>
                            </li>
                            <li className="item">
                                <a href="programs.html" className="link">Programs</a>
                            </li>
                            <li className="item">
                                <a href="trainnig.html" className="link">Trainers</a>
                            </li>
                            <li className="item">
                                <a href="membership.html" className="link">Membership</a>
                            </li>
                            <li className="item">
                                <a href="contact.html" className="link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-block">
                        <a href="" className="cart">
                            <img src="img/cart.svg" alt="cart"/>
                        </a>
                        <div className="acuont">
                            <a href="" className="link" id="login">Log In</a>
                            <a href="" className="link" id="singup">Sign Up</a>
                        </div>
                    </div>
                    <div className="burger"></div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="hero-midle">
                <div class="hero-content">
                    <h1 class="hero-title">For Your <span>Health</span> and <span>Fitness Goals</span> in No Time</h1>
                    <p class="hero-text">It doesn’t matter if your goal is to get stronger, burn fat, or to just stay
                        fit
                        our world class coaches will guide you every step of the way.</p>
                    <a href="" class="hero-link">Book a Class</a>
                    <div class="hero-brand">
                        <span>Supported by:</span>
                        <div class="hero-brend-img">
                            <img src="img/nike.svg" alt=""/>
                            <img src="img/esprit.svg" alt=""/>
                            <img src="img/apple-watch.svg" alt=""/>
                            <img src="img/new-balance.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="rate">
                    <div class="rate-muscle">
                        <img src="img/arm.svg" alt="arm"/>
                        <span class="title">Muscle Rate</span>
                        <span class="text">2.861</span>
                    </div>
                    <div class="rate-heart">
                        <img src="img/health.svg" alt="health"/>
                        <span class="title">Heart Rate</span>
                        <span class="text">9281 bpm</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-bottom container">
            <div className="hero-program">
                <div className="program-block active">
                    <div className="">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="33" cy="41" r="8" fill="#BCFF5E" />
                            <path d="M32.1836 29.768L32.7158 28.9676C34.9586 25.6053 39.174 24.1598 43.0081 25.4382"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M21.1286 26.5866L23.5296 14.6136L26.1507 15.9242C27.124 16.4101 28.3066 16.0984 28.9139 15.1959L31.2028 11.7604C31.7743 10.9018 31.6613 9.75939 30.9327 9.02931L28.0515 6.14811C26.7156 4.81189 24.5813 4.71472 23.1295 5.92402C16.3124 11.6044 11.2141 19.073 8.40735 27.491L7.20685 31.0645C6.60802 32.8697 7.2574 34.8544 8.80752 35.9565L11.8708 38.1454C17.7823 42.369 25.4378 43.2912 32.1833 40.5925L34.3482 44.9223"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M32.1828 27.6011C28.2497 24.9798 23.1264 24.9798 19.1934 27.6011" stroke="#323232"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <span className="program-title">Personal Training</span>
                    <p className="program-text">It’s a long estabilished fact that a reader will be distracted by the
                        readable content</p>
                    <a href="" className="program-link">Learn More</a>
                </div>
                <div className="program-block">
                    <div className="">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="22" cy="40" r="8" fill="#BCFF5E" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M27.9561 14.7689L33.2304 20.0433L20.0431 33.2307L14.7687 27.9563L27.9561 14.7689Z"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.51676 22.0216C7.88073 21.6577 8.47084 21.6577 8.8348 22.0216L25.9785 39.1653C26.3425 39.5293 26.3425 40.1194 25.9785 40.4834L23.3408 43.1211C22.9768 43.4851 22.3867 43.4851 22.0227 43.1211L4.87902 25.9774C4.51505 25.6135 4.51505 25.0233 4.87902 24.6594L7.51676 22.0216Z"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.51676 29.9351C7.88073 29.5711 8.47084 29.5711 8.8348 29.9351L18.0669 39.1672C18.4309 39.5312 18.4309 40.1213 18.0669 40.4853L15.4292 43.123C15.0652 43.487 14.4751 43.487 14.1112 43.123L4.87902 33.8909C4.51505 33.5269 4.51505 32.9368 4.87902 32.5728L7.51676 29.9351Z"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M40.4832 25.9798C40.1193 26.3437 39.5292 26.3437 39.1652 25.9798L22.0215 8.83606C21.6575 8.47209 21.6575 7.88198 22.0215 7.51801L24.6592 4.88027C25.0232 4.5163 25.6133 4.5163 25.9773 4.88027L43.121 22.024C43.485 22.388 43.485 22.9781 43.121 23.342L40.4832 25.9798Z"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M40.4842 18.0649C40.1203 18.4289 39.5301 18.4289 39.1662 18.0649L29.934 8.83278C29.5701 8.46881 29.5701 7.8787 29.934 7.51473L32.5718 4.87699C32.9357 4.51302 33.5259 4.51302 33.8898 4.87699L43.122 14.1091C43.4859 14.4731 43.4859 15.0632 43.122 15.4272L40.4842 18.0649Z"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <span className="program-title">Workout Programs</span>
                    <p className="program-text">It’s a long estabilished fact that a reader will be distracted by the
                        readable content</p>
                    <a href="" className="program-link">Learn More</a>
                </div>
                <div className="program-block">
                    <div className="">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="40" r="8" fill="#BCFF5E" />
                            <path d="M26.2229 36.2271C24.8005 37.6517 24.0011 39.5822 24 41.5953V44.0084"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.7773 36.2271C23.1998 37.6517 23.9992 39.5822 24.0003 41.5953V44.0084"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M34.5048 24.2221C27.7559 26.8891 20.2451 26.8891 13.4961 24.2221" stroke="#323232"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M38.0059 16.9971H44.0084" stroke="#323232" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M41.0071 19.9983L38.0059 16.9971L41.0071 13.9958" stroke="#323232" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99469 16.9971H3.99219" stroke="#323232" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M6.99316 13.9958L9.99441 16.9971L6.99316 19.9983" stroke="#323232" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M35.1166 3.99164L33.9161 7.30902C31.8474 12.9975 32.2091 19.2865 34.9165 24.7003V24.7003C37.861 30.5911 38.0173 37.4899 35.3427 43.5081L35.1226 44.0063"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12.8837 3.99164L14.0842 7.30902C16.1528 12.9975 15.7911 19.2865 13.0837 24.7003V24.7003C10.1392 30.5911 9.98292 37.4899 12.6576 43.5081L12.8777 44.0063"
                                stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0186 10.6605H32.982" stroke="#323232" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </div>
                    <span className="program-title">Program & Diet</span>
                    <p className="program-text">It’s a long estabilished fact that a reader will be distracted by the
                        readable content</p>
                    <a href="" className="program-link">Learn More</a>
                </div>
            </div>
            <div className="program-descript">
                <span className="title">Training Program For You</span>
                <p className="text">Starting a fitness routine can be intimidating, but it helps to have an idea of whar to
                    expect before joining any class.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomePage;
