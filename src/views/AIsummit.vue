<template>
  <div>
    <nav-bar></nav-bar>
    <div>
      <section class="event-banner">
        <div class="event-banner-container container">
          <div class="event-bn-text md:mt-20">
            <h1>Annual Africa AI Summit!</h1>         
            <div id="countdown" class="mb-10">
              <div class=" flex">
              {{ timeLeft }}
            </div>
            </div>
            <a href="https://www.linkedin.com/events/africaaisummit7119664586336710656/theater/"  class="py-2 bg-[#E58E04] rounded-lg text-white flex gap-2 w-[200px] items-center justify-center">Book Your Seat <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
            
          </div>
          <div class="event-bn-image flex flex-center">
            <div class="image-border h-[395px] md:h-[643px]">
              <img src="\images\eve.png" alt="Intelliverseai">
            </div>
          </div>
        </div>
      </section>
      <section class="about-event bg-[#ECF9FF]">
        <div class="about-event-container container">
          <div class="about-event-image">
            <img src="\images\About Conference Image.png" alt="Intelliverseai">
          </div>
          <div class="about-event-text">
            <h1>About Event!</h1>
            <p>Join us at the Africa AI Summit, where we bring together key stakeholders from various industries and
              countries to explore cutting-edge AI solutions in the banking sector. This event provides a unique
              opportunity for organizations to connect with our vibrant AI community, showcase their AI initiatives, and
              gain valuable insights into the world of artificial intelligence.</p>
            <!-- <p>42 Drive, Florida, USA</p> -->
            <div class="about-event-cards">
              <div class="about-event-card">
                <h3>2</h3>
                <p>Days Event</p>
              </div>
              <div class="about-event-card">
                <h3>15+</h3>
                <p>Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="speakers bg-[#ECF9FF]">
        <div class="speakers-container container">
          <div class="speakers-head">
            <h1 class="text-center">Speakers</h1>
          </div>
          <div class="speakers-content">
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
            <div class="speaker">
              <img src="\images\profile image one.png" alt="Intelliverseai">
              <div class="speaker-info">
                <h2>Jerry Wallace</h2>
                <p>Javascript Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <section class="events-highlights">
        <div class="events-highlights-container container">
          <div class="events-highlights-head">
            <h1>Key Summit Highlights</h1>
            <p>Experience the essence of our upcoming event with a glimpse into its impactful sessions, engaging
              discussions, and unique moments that promise to inspire and captivate. Join us for an unforgettable
              occasion!</p>
          </div>
          <div class="events-highlights-content">
            <div class="events-highlights-image">
              <img src="\images\Highlights/highlights showcase one.png" alt="Intelliverseai">
            </div>
            <div class="events-highlights-text">
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Innovation.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Innovation at its Peak</h1>
                  <p>Immerse yourself in a two-day hackathon featuring talented developers creating cutting-edge AI
                    solutions for the banking industry.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Ai Biz.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>AI in Business</h1>
                  <p>Learn how AI is transforming banking operations, enhancing security, and enabling data-driven
                    decision-making.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Networking.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Networking</h1>
                  <p>Connect with industry professionals, thought leaders and innovators driving the AI revolution in
                    banking. Collaborate and build valuable connections.</p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Learning and Insights.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Learning and Insights</h1>
                  <p>Gain invaluable insights through keynote sessions, panel discussions, and expert-led workshops,
                    shedding light on AI's current and future impact on banking.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Startup.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Startup Showcases</h1>
                  <p>Explore groundbreaking AI solutions from emerging startups that have the potential to reshape banking
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="events-highlights-content">
            <div class="events-highlights-text">
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Regulatory Insights.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Regulatory Insights</h1>
                  <p>Understand the regulatory landscape and ethical considerations in AI deployment through dedicated
                    sessions.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Partnerships.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Partnerships</h1>
                  <p>Explore collaboration opportunities with industry stakeholders, fostering innovation and growth for
                    your bank.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Talent Sourcing.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Talent Sourcing</h1>
                  <p>The summit attracts the finest AI minds and emerging talents eager to explore opportunities and
                    partnerships with banks. Connect with exceptional talents for your AI projects and innovations.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Collaboration Potential.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Collaboration Potential</h1>
                  <p>Engage with AI experts, data scientists, and machine learning engineers to foster collaborative
                    ventures driving innovation within your bank.
                  </p>
                </div>
              </div>
              <div class="events-highlight">
                <div class="events-highlight-image">
                  <img src="\images\Highlights/Skills Developmen.png" alt="Intelliverseai">
                </div>
                <div class="events-highlight-text">
                  <h1>Skills Development</h1>
                  <p>Enhance your team's AI knowledge and skills through practical workshops and sessions.
                  </p>
                </div>
              </div>
            </div>
            <div class="events-highlights-image">
              <img src="\images\Highlights/Highlight showcase two.png" alt="Intelliverseai">
            </div>
          </div>
        </div>
      </section>
      <section class="event-schedule bg-[#ECF9FF]">
        <div class="event-schedule-container container">
          <div class="event-schedule-head">
            <h1>Event Schedule</h1>
            <p>Diving into our conference schedule, packed with enriching sessions, expert talks, and networking
              opportunities.</p>
          </div>
          <div class="event-schedule-content">
            <div class="event-date">
              <h2>Friday, 10 January 2020</h2>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">8:00 AM - 8:30 AM</div>
              <div class="card-text span-title">Virtual Check-In and Welcome</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">8:30 AM - 8:45 AM</div>
              <div class="card-text span-title">Opening Remarks and Event Overview</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">8:45 AM - 10:45 AM</div>
              <div class="card-text span-title">Keynote Session 1 (10 speakers, 15 minutes each)</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">10:45 AM - 11:00 AM</div>
              <div class="card-text span-title">Networking Break</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">11:00 AM - 12:00 PM</div>
              <div class="card-text span-title">Keynote Session 2 (2 speakers, 15 minutes each)</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">12:00 PM - 1:00 PM</div>
              <div class="card-text span-title">Networking Lunch</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">1:00 PM - 2:00 PM</div>
              <div class="card-text span-title">Keynote Session 3 (2 speakers, 15 minutes each)</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">2:00 PM - 2:15 PM</div>
              <div class="card-text span-title">Short Break</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">2:15 PM - 3:15 PM</div>
              <div class="card-text span-title">Keynote Session 4 (2 speakers, 15 minutes each)</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">3:15 PM - 3:30 PM</div>
              <div class="card-text span-title">Networking Break</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">3:30 PM - 4:30 PM</div>
              <div class="card-text span-title">Keynote Session 5 (2 speakers, 15 minutes each)</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">4:30 PM - 5:30 PM</div>
              <div class="card-text span-title">Hackathon Winners' Showcase (1 hour)
              </div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">5:30 PM - 5:45 PM</div>
              <div class="card-text span-title">Closing Remarks and Thank You</div>
            </div>
            <div class="event-schedule-card">
              <div class="card-text span-time">5:45 PM - 6:30 PM</div>
              <div class="card-text span-title">Networking and Virtual Reception</div>
            </div>
          </div>
        </div>
      </section>
      <section class="subscription">
        <div class="contact-overlay" id="contactOverlay">
                    <div class="contact-overlay-content">
                        <span class="closebtn" title="Close Overlay" onclick="document.getElementById('contactOverlay').style.display = 'none';"><i class="fas fa-times"></i></span>
                        <div class="form" id="loading">
                            <div class="form-head">
                                <h1>Buy Ticket</h1>
                            </div>
                            <form @sumbit.prevent="handleSubmit">
                                <label for="">Name</label>
                                <input type="text" placeholder="Enter Your Name" v-model="name">
                                <label for="">Email</label>
                                <input type="email" placeholder="Enter Your Email" v-model="email">
                                <label for="">Compnay Name</label>
                                <input type="text" placeholder="intelliverse" v-model="company">
                                <label for="">Phone Number</label>
                                <input type="text" placeholder="" v-model="phone">
                                <label for="">Sponsorship Type</label>
                                <select v-model="sponsorship">
                                  <option value="silver">Silver</option>
                                  <option value="gold">Gold</option>
                                  <option value="platinum">Platinum</option>
                                </select>
                                <button type="submit">Submit Request</button>
                            </form>
                        </div>
                        <div class="sent-message" id="load">
                            <div class="message-loader" id="spinner">
                                <div class="loader"></div>
                            </div>
                            <div class="sent-alert" id="message">
                                <div class="icon"><i class="fas fa-check"></i></div>
                                <p>Message Sent</p>
                            </div>
                        </div>
                    </div>
                </div>
        <div class="subscription-container container">
            <div class="subscription-head">
                <p>Corporates</p>
                <h1>Become an Event Sponsor</h1>
            </div>
            <div class="subscription-content">
                <div class="subscription-card">
                    <p>Silver</p>
                    <h1>$1000</h1>
                    <div class="features">
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Speaker Key Note</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Virtual Exhibition Booth</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">1 day hackathon</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Netwroking Opportunities</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Social Media Promotion</div>
                        </div>
                    </div>
                    <button class="btn-ticket" onclick="document.getElementById('contactOverlay').style.display = 'block';">GET YOUR TICKET</button>
                </div>
                <div class="subscription-card">
                    <p>Platinum</p>
                    <h1>$2500</h1>
                    <div class="features">
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Speaker Key Note</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Virtual Exhibition Booth</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                            <div class="text">Dedicated Sponsor Session</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Two Day hackathon</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Networking Opportunities</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Custom Content</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Attendee Data</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Social Media Promotion</div>
                        </div>
                    </div>
                    <button class="btn-ticket" onclick="document.getElementById('contactOverlay').style.display = 'block';">GET YOUR TICKET</button>
                </div>
                
                <div class="subscription-card">
                    <p>Gold</p>
                    <h1>$1500</h1>
                    <div class="features">
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Prominent Branding</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Virtual Exhibition Booth</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Sponsored Session</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Two Day Hackathon</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Networking Opportinities</div>
                        </div>
                        <div class="feature">
                            <div class="check">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fi:check">
                                    <path id="Vector" d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="#E58E04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                        <div class="text">Social Media Promotion</div>
                        </div>
                    </div>
                    <button class="btn-ticket" onclick="document.getElementById('contactOverlay').style.display = 'block';">GET YOUR TICKET</button>
                </div>
            </div>
        </div>
    </section>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '@/components/utils/FooterComponent.vue'
import NavBar from '@/components/utils/NavBar.vue'
export default {
  components: { FooterComponent, NavBar },
  data() {
    return {
      eventDate: new Date('2023-11-10T00:00:00').getTime(),
      timeLeft: '',
      sponsorship:"",
      name:"",
      email:"",
      company:"",
      phone:""
    };
  },
  mounted() {
    this.updateCountdown();
    // Update the countdown every second
    setInterval(this.updateCountdown, 1000);
   
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const timeDifference = this.eventDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.timeLeft = `${days}Days : ${hours}Hours : ${minutes}Mins : ${seconds}Secs`;
      } else {
        this.timeLeft = 'Event has started!';
      }
    },
    handleSubmit(){
      console.log("submiited",this.email,this.phone,this.company,this.sponsorship)
      this.$store.dispatch("sendMail", {
          name: "Sponsorship",
          email: "ochiengwarren10@gmail.com,info@intelliverseai.com",
          subject: "Sponsorship request Form",
          content: `${this.email},${this.company},${this.name},${this.sponsorship},${this.phone}`,
          link:`info@intelliverseai.com`
        })
    }
  },

}

/* === Overlay === */


/* === Overlay === */
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

section.event-banner {
  width: 100%;
  height: fit-content;
  margin: 20px 0px 40px;
}

.event-banner-container {
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.event-bn-text,
.event-bn-image {
  width: 100%;
  max-width: 580px;
  min-width: 280px;
}

.event-bn-text h1 {
  width: 100%;
  max-width: 550px;
  color: #000000;
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
}

.event-bn-text #countdown {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #E58E04;
}

.event-bn-text #countdown .colon {
  margin: 0px 6px;
}




.event-bn-text #countdown .unit {
  font-size: 24px;
  color: #777;
  text-align: center;
}

.event-bn-image {
  padding: 20px;
}

.image-border {
  border: 4px solid var(--orange);
  position: relative;
  width: 574px;
}

.image-border img {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 574px;
}

section.about-event {
  width: 100%;
  height: fit-content;
  margin: 90px 0px;
}

.about-event-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.about-event-text,
.about-event-image {
  width: 100%;
  max-width: 580px;
  min-width: 280px;
}

.about-event-text h1 {
  width: 100%;
  max-width: 550px;
  color: #000000;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.about-event-text p:nth-child(2) {
  width: 100%;
  max-width: 550px;
  color: #000000;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
}

.about-event-text p:nth-child(3) {
  width: 100%;
  max-width: 550px;
  color: #000000;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin: 30px 0px 0px;
}

.about-event-cards {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}

.about-event-card {
  display: inline-block;
  margin: 0px 10px 0px 0px;
  text-align: center;
  width: 166px;
  height: fit-content;
  padding: 20px 0px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.08);
}

.about-event-card h3 {
  color: #333;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.about-event-card p {
  color: #777;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

section.speakers {
  margin: 10px 0px 90px;
}

.speakers-head {
  padding: 10px 0px;
}

.speakers-head h1 {
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.speakers-content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.speaker {
  width: 362px;
  height: 271px;
  flex-shrink: 0;
  border-radius: 3px;
  margin: 10px;
  text-align: center;

}

.speaker img {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: auto;
}

.speaker .speaker-info {
  padding: 75px 0px 40px;
  background: #fff;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.05);
  margin: auto;
  margin-top: -75px;
}

.speaker-info h2 {
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.speaker-info p {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

section.events-highlights {
  margin: 10px 0px 90px;
  height: fit-content;
  width: 100%;
}

.events-highlights-container {
  height: fit-content;
  width: 100%;
}

.events-highlights-head {
  padding: 20px 0px;
  text-align: center;
}

.events-highlights-head h1 {
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0px 0px 20px;
}

.events-highlights-head p {
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin: auto;
  max-width: 600px;
}

.events-highlights-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0px 60px;
}

.events-highlights-image {
  max-width: 400px;
  width: 100%;
  min-width: 280px;
}

.events-highlights-text {
  max-width: 620px;
  width: 100%;
  min-width: 280px;
}

.events-highlights-image img {
  width: 100%;
}

.events-highlight {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px 0px 0px;
}

.events-highlight-image {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80px;
}

.events-highlight-image img {
  width: 64px;
}

.events-highlight-text {
  max-width: 530px;
  width: 100%;
  min-width: 280px;
}

.events-highlight-text h1 {
  margin: 0px 0px 10px;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.events-highlight-text p {
  margin: 0px;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
}

section.event-schedule {
  margin: 10px 0px 90px;
  height: fit-content;
  width: 100%;
}

.event-schedule-container {
  height: fit-content;
  width: 100%;
}

.event-schedule-head {
  padding: 20px 0px;
  text-align: center;
}

.event-schedule-head h1 {
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0px 0px 20px;
}

.event-schedule-head p {
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin: auto;
  max-width: 600px;
}

.event-schedule-content {
  padding: 40px 0px 60px;
}

.event-date {
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.event-schedule-card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 754px;
  min-width: 280px;
  padding: 30px 30px;
  margin: 15px auto;
  background: #fff;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.08);
}

.event-schedule-card div.card-text {
  margin: 10px;
}

.event-schedule-card .span-time {
  width: 220px;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.event-schedule-card .span-title {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

section.subscription {
  padding: 10px 0px 90px;
  height: fit-content;
  width: 100%;
}

.subscription-container {
  height: fit-content;
}

.subscription-head {
  padding: 20px 0px;
  text-align: center;
}

.subscription-head h1 {
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0px 0px 20px;
}

.subscription-head p {
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin: auto;
  max-width: 600px;
}

.subscription-content {
  display: flex;
  align-items: stretch !important;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.subscription-card {
  height: fit-content;
  width: 100%;
  padding: 40px 30px;
  max-width: 350px;
  min-width: 280px;
  margin: 10px;
  background: #fff;
  position: relative;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.08);
}

.subscription-card p {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  /* 18px */
  letter-spacing: 0.72px;
}

.subscription-card h1 {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  /* 40px */
  letter-spacing: 1.6px;
  margin: 24px 0px 40px;
}

.subscription-card .features {
  padding-bottom: 70px;
}

.subscription-card .feature {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin: 0px 0px 24px;
}

.features .check {
  display: flex;
  align-items: center;
  margin: 0px 15px 0px;
}

.text {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
}

button.btn-ticket {
  height: 40px;
  position: absolute;
  bottom: 40px;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.64px;
  background-color: #E58E04;
  border: 0px;
  outline: none;
  color: #fff;
}

/* == Overlay == */
.contact-overlay {
    height: 100vh;
    width: 100vw;
    display: none;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #1b1e23;
    transition: 0.3s;
    animation:animatebottom 0.4s;
}

.contact-overlay-content {
    height: 500px;
    width: 1000px;
    border-radius: 10px;
    box-shadow: 2px 2px 12px #00000055;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    padding: 30px;
}

.contact-overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 40px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 2px 2px 12px #00000055;
}
.contact-overlay .closebtn i{
    font-size: 18px;
    color: #c5d0df;
}
.contact-overlay .closebtn:hover i{
    color: #E58E04;
}


@keyframes animatebottom{
    from{
        transform: translateY(40px);
        opacity:0
    } 
    to{
        bottom:0;
        opacity:1
    }
}
.form{
    height: 100% !important;
    width: 100% !important;
}
.form-head{
    height: fit-content;
    width: 100% !important;
    padding: 20px 0px 10px;
}
.form-head h1{
    font-size: 28px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: #c5d0df;
}
.form form{
    height: 376px;
    width: 100% !important;
    display: flex;
    flex-direction: column;
}
.form form label{
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #c5d0df;
    margin: 10px 0px 5px;
    padding: 0px 10px;
}
.form form input,select{
    height: 50px;
    width: 400px !important;
    outline: none;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #c5d0df;
    margin: 0px;
    background-color: #191b20;
    padding: 0px 10px;
}
.form form input:focus{
    color: #E58E04;
    border-bottom: 1px solid #E58E04;
}


.form form button{
    height: 50px;
    width: 200px !important;
    outline: none;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #c5d0df;
    margin: 20px 0px 0px;
    background-color: #191b20;
    box-shadow: 2px 2px 12px #00000055;
    padding: 0px 10px;
    cursor: pointer;
}
.form form button:hover{
    color: #E58E04;
    transition: all ease 200ms;
}
.sent-message{
    height: 376px !important;
    width: 100% !important;
    display: none;
    position: relative;
    padding: 30px;
    margin-top: 60px;
}
.sent-message .message-loader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.message-loader .loader{
    border: 4px solid #c5d0df;
    border-radius: 50%;
    border-top: 4px solid #E58E04;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
}
.sent-message .sent-alert{
    text-align: center;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 18px 0px 0px;
}
.sent-alert .icon{
    height: 60px;
    width: 60px;
    border: 1px solid #c5d0df;
    background-color: #1b1e20;
    box-shadow: 2px 2px 12px #00000055;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: auto;
}
.sent-alert .icon i{
    font-size: 20px; 
    color: #E58E04;
}
.sent-alert p{
    font-size: 14px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: #c5d0df;
    margin: 0px;
    text-align: center;
}
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { 
        -webkit-transform: rotate(0deg); 
    }
    100% { 
        -webkit-transform: rotate(360deg); 
    }
  }
  
  @keyframes spin {
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
  }
/* == || End Loading Screen == */
/* == || End Overlay == */</style>