import React from "react";
import "../styles/home.css";
import HomeHeader from "../Components/HomeHeader";
import { useSelector } from "react-redux";
import PacksCard from "../Components/PacksCard";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import InstructorsCard from "../Components/InstructorsCard";
const Home = ({ setReloadPage, reloadPage }) => {
  const pack = useSelector((state) => state.pack?.pack);
  const cours = useSelector((state) => state.cours?.cours);

  const users = useSelector((state) => state.user?.users);
  const instractorLength = users?.filter(
    (el) => el.role == "Instructor"
  )?.length;
  const studentLength = users?.filter((el) => el.role == "user")?.length;
  const coursLength = cours?.length;

  return (
    <>
      <HomeHeader />
      <div className="homecontainer">
        <img
          className="img"
          src="https://cdn.discordapp.com/attachments/1022529234700357713/1235587149206913024/review_2.png?ex=6634e9b4&is=66339834&hm=c93da7027d65c4868766f8a2efac950ad618537a1717f08a36b06478e4a2bf7d&"
          alt=""
        />
        <div className="part1">
          <div className="card1">
            <img
              src="https://img.freepik.com/free-photo/portrait-teenage-girl-with-book_23-2148105580.jpg?t=st=1714677128~exp=1714680728~hmac=841462e8acc7c09fbd6411d345e590b1e8fdf9fa2e66fcaf66bd711ff6cf21a6&w=740"
              alt=""
            />
          </div>
          <div className="card2">
            <img
              src="https://img.freepik.com/free-photo/front-view-beautiful-woman-desk_23-2148481601.jpg?t=st=1714677452~exp=1714681052~hmac=b74ab66c060635953c7395f1073459a1b7d5b9c71c5990a9768c8dd9057b06a0&w=740"
              alt=""
            />
          </div>
          <div className="card3" id="card">
            <h2>{coursLength}+</h2>
            <p>online courses</p>
          </div>
          <div className="card4" id="card">
            <h2>{instractorLength}+</h2>
            <p>Intractors</p>
          </div>
          <div className="card5" id="card">
            <h2>{studentLength}+</h2>
            <p>Students</p>
          </div>

          <div className="circle">
            <div className="sCircle"></div>
          </div>
        </div>
        <div className="part2">
          <h4>WHAT'S OUR MAIN GOAL</h4>
          <h1>
            Take Not a Lorem Ipsum <span>whatsoever;</span> And{" "}
            <span>but your Lorem Ipsum</span> With Education
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi deleniti ad
            autem eaque aut repellat laudantium ab saepe labore. Ut eligendi
            dignissimos non ratione accusantium ea reiciendis labore.
          </p>
          <p>
            Aut veritatis assumenda cum molestias nesciunt eum architecto
            voluptatem. Eum nulla deserunt aut culpa quia eum galisum inventore
            vel ratione neque eum saepe asperiores. At nesciunt velit qui
            nostrum nulla rem eius distinctio vel sapiente provident et nulla
            voluptates sed omnis accusantium.
          </p>
          <button>Read more</button>
        </div>
      </div>
      <div className="Homecourse">
        <div className="text">
          <h3>WHAT'S OUR MAIN GOAL</h3>
          <h1>
            Explore <span>1200+</span> Online pack
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi deleniti ad
            autem eaque aut repellat laudantium ab saepe labore. Ut eligendi
            dignissimos non ratione accusantium ea reiciendis labore.
          </p>
          <p>
            Aut veritatis assumenda cum molestias nesciunt eum architecto
            voluptatem.
          </p>
          <Link to="/packs">
            <button>View All</button>
          </Link>
        </div>
        <div className="container">
          {pack?.map((el, i) => {
            // Filter courses that belong to the current pack (el)
            const coursesInPack = cours?.filter(
              (cour) => cour.pack_id === el._id
            );

            return (
              <>
                <div style={{ display: "none" }}>{(i += 1)}</div>
                {i < 7 && (
                  <div key={i} className="content">
                    <img src={el.pack_image} alt="" />
                    <h3>{el.nom}</h3>
                    <p>
                      {coursesInPack?.length === 0 ||
                      coursesInPack?.length === 1
                        ? `${coursesInPack?.length} Cours`
                        : `${coursesInPack?.length} Courses`}
                    </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="homepack">
        <div className="titre">
          <h3>BROWSE PACKS</h3>
          <h1>We offer the best carrier</h1>
          <p>
            Lorem Ipsum is simply dummy text and typesetting industry. Lorem
            Ipsum has text ever since the 1500s.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="packs-liste">
            {/* {pack?.map((el)=>
          <PacksCard el={el}/>
          )}
         */}
            {pack
              ?.map((el, i) => (
                <>
                  {i < 4 ? (
                    <div>
                      <div style={{ display: "none" }}>{(i = i + 1)}</div>

                      <PacksCard
                        el={el}
                        reloadPage={reloadPage}
                        setReloadPage={setReloadPage}
                      />
                    </div>
                  ) : null}
                </>
              ))
              .reverse()}
          </div>
        </div>
        <Link to="/packs">
          <button>Enroll Packs</button>
        </Link>
      </div>
      <div className="homecirle">
        <div className="imagearr">
          <img
            src="https://img.freepik.com/photos-gratuite/portrait-adolescent-heureux-etre-retour-universite_23-2148586575.jpg?t=st=1715120848~exp=1715124448~hmac=678f23c294075dbb8d4e7fd8c868dba9bf6cb50dd37147c6313761f66014d81a&w=740"
            alt=""
          />
        </div>
        <div className="part1">
          <section class="main-container">
            <div class="main">
              <div class="big-circle">
                <div class="icon-block1">
                  <div className="img">
                    <div className="circ"></div>
                    <h5>1k</h5>
                    <p>Student</p>
                  </div>
                </div>
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img1"
                      src="https://img.freepik.com/photos-gratuite/celebration-journee-internationale-education_23-2150930946.jpg?t=st=1715156206~exp=1715159806~hmac=a0b851caf14a0d2abdfe119be61c1154a23d4aae64ff8f975ca117244998bbe9&w=740"
                      alt=""
                    />
                  </div>
                </div>

                <div class="icon-block2">
                  <div className="img">
                    <div className="circ"></div>
                    <h5>1k</h5>
                    <p>Student</p>
                  </div>
                </div>
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img2"
                      src="https://img.freepik.com/photos-gratuite/portrait-jeune-male-etudiant-lecture_23-2148586540.jpg?t=st=1715156686~exp=1715160286~hmac=12205886f54f7418ea1be0e093ada34f817ead12505e7cd6cf443a0d2f6afe59&w=740"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="circle1">
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img3"
                      src="https://img.freepik.com/photos-gratuite/portrait-garcon-etudiant_23-2147668972.jpg?t=st=1715156807~exp=1715160407~hmac=3658977fc1dc38e9fe820a96db57c2b61c4edb9dbb561552ac8019a28cd769b1&w=740"
                      alt=""
                    />
                  </div>
                </div>
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img4"
                      src="https://img.freepik.com/photos-gratuite/voyante-coup-smiley-jeune-voyageur_23-2148570581.jpg?t=st=1715157019~exp=1715160619~hmac=e7320b444ba0dc3d76c4aba3ae2c62b242c5bddd92b8050fb6223eb0733bb0eb&w=740"
                      alt=""
                    />
                  </div>
                </div>
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img5"
                      src="https://img.freepik.com/photos-gratuite/portrait-adolescente-livre_23-2148105580.jpg?t=st=1715157122~exp=1715160722~hmac=2bd53459257f5abafdb8bdbcf3cf893383008f6f8e5c4a38f2e54b127d37548e&w=740"
                      alt=""
                    />
                  </div>
                </div>
                <div class="icon-block">
                  <div className="img">
                    <img
                      className="img6"
                      src="https://img.freepik.com/photos-gratuite/livre-lecture-jeune-etudiant-pres-du-mur_23-2147860745.jpg?t=st=1715157282~exp=1715160882~hmac=1b648429991e5ce2c85484021bfd8ded95da5e1eba998cb86adefb5dfc7cfe2d&w=740"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="center-logo">
                <img
                  src="https://www.yudiz.com/codepen/animated-portfolio/logo.png"
                  alt="logo"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="part2">
          <h3>WHY OURS</h3>
          <h1>Our Only Concern Is Your Education</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="Customer">
        <div className="part1">
          <div className="section">
            <h4>WHY OURS</h4>
            <h1>Our Most Satisfied Customers Share Their Experiences!</h1>
          </div>
          <div className="sec">
            <img
              src="https://cdn.discordapp.com/attachments/1022529234700357713/1235587148527308894/curve-rotate-2.png?ex=6634e9b4&is=66339834&hm=12a0919377eae3945e11ede3c02c012e1c9f44c116ccd1ee190b66e9f463cea0&"
              alt=""
            />
          </div>
        </div>
        <div className="part2">
          <div className="circle-abso" id="abso1">
            <div className="Scircle">
              <img
                src="https://img.freepik.com/photos-gratuite/celebration-journee-internationale-education_23-2150930946.jpg?t=st=1714657343~exp=1714660943~hmac=f00bb7610aac747ad1b0957f96dba58e7fc8eb9282b916d3e55b89c50745206c&w=740"
                alt=""
              />
            </div>
          </div>
          <div className="circle-abso" id="abso2">
            <div className="Scircle">
              <img
                src="https://img.freepik.com/free-photo/team-meeting-startups_23-2148898708.jpg?t=st=1714660843~exp=1714664443~hmac=276b2db1e6308faa1a8232d3bd11f82250c8ab8c69d1c8de58af064beb7f1259&w=740"
                alt=""
              />
            </div>
          </div>
          <div className="circle-abso" id="abso3">
            <div className="Scircle">
              <img
                src="https://img.freepik.com/free-photo/teenager-holding-textbooks_23-2147669090.jpg?t=st=1714660803~exp=1714664403~hmac=3344b41789fbee657873c1b3cc47dca1b0cb8a9c8f0112cebe1d1702e2909e01&w=740"
                alt=""
              />
            </div>
          </div>
          <div className="circle-abso" id="abso4">
            <div className="Scircle">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586557.jpg?t=st=1714660629~exp=1714664229~hmac=2529faa245814a941983055143e920b1bd9f4664d73ecb1e6d611e853c06cae3&w=740"
                alt=""
              />
            </div>
          </div>
          <Carousel
            className="c"
            width="1100px"
            emulateTouch
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            showIndicators={false}
            showArrows={false}
          >
            <div className="carou">
              <div className="decri">
                <div className="content">
                  <div className="card">
                    <div className="svg_top ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right svg_top"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>

                    <div className="svg_bot ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi
                      deleniti ad autem eaque aut repellat laudantium ab saepe
                      labore. Ut eligendi dignissimos non ratione accusantium ea
                      reiciendis labore.
                    </p>
                    <span>first Last</span>
                  </div>
                </div>
                <div className="container">
                  <div className="circle">
                    <div className="Scircle">
                      <img
                        src="https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586557.jpg?t=st=1714660629~exp=1714664229~hmac=2529faa245814a941983055143e920b1bd9f4664d73ecb1e6d611e853c06cae3&w=740"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carou">
              <div className="decri">
                <div className="content">
                  <div className="card">
                    <div className="svg_top ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right svg_top"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>

                    <div className="svg_bot ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>

                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi
                      deleniti ad autem eaque aut repellat laudantium ab saepe
                      labore. Ut eligendi dignissimos non ratione accusantium ea
                      reiciendis labore.
                    </p>
                    <span>first Last</span>
                  </div>
                </div>
                <div className="container">
                  <div className="circle">
                    <div className="Scircle">
                      <img
                        src="https://img.freepik.com/free-photo/teenager-holding-textbooks_23-2147669090.jpg?t=st=1714660803~exp=1714664403~hmac=3344b41789fbee657873c1b3cc47dca1b0cb8a9c8f0112cebe1d1702e2909e01&w=740"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carou">
              <div className="decri">
                <div className="content">
                  <div className="card">
                    <div className="svg_top ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right svg_top"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>

                    <div className="svg_bot ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi
                      deleniti ad autem eaque aut repellat laudantium ab saepe
                      labore. Ut eligendi dignissimos non ratione accusantium ea
                      reiciendis labore.
                    </p>
                    <span>first Last</span>
                  </div>
                </div>
                <div className="container">
                  <div className="circle">
                    <div className="Scircle">
                      <img
                        src="https://img.freepik.com/free-photo/team-meeting-startups_23-2148898708.jpg?t=st=1714660843~exp=1714664443~hmac=276b2db1e6308faa1a8232d3bd11f82250c8ab8c69d1c8de58af064beb7f1259&w=740"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carou">
              <div className="decri">
                <div className="content">
                  <div className="card">
                    <div className="svg_top ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right svg_top"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>

                    <div className="svg_bot ">
                      <svg
                        // className="svg_top"
                        aria-hidden="true"
                        class="e-font-icon-svg e-fas-quote-right"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                      </svg>
                    </div>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet. Eos dolor temporibus ea modi
                      deleniti ad autem eaque aut repellat laudantium ab saepe
                      labore. Ut eligendi dignissimos non ratione accusantium ea
                      reiciendis labore.
                    </p>
                    <span>first Last</span>
                  </div>
                </div>
                <div className="container">
                  <div className="circle">
                    <div className="Scircle">
                      <img
                        src="https://img.freepik.com/photos-gratuite/celebration-journee-internationale-education_23-2150930946.jpg?t=st=1714657343~exp=1714660943~hmac=f00bb7610aac747ad1b0957f96dba58e7fc8eb9282b916d3e55b89c50745206c&w=740"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="instractors">
        <div className="titre">
          <h3>OUR INSTRUCTORS</h3>
          <h1>Meet The Magic Team Who Make Courses For Grow Your Future</h1>
        </div>
        {users
          ?.filter((user) => user?.role === "Instructor")
          ?.map((e) => (
            <InstructorsCard e={e} />
          ))}
        <div className="titre1"></div>
        <div className="img">
          <img
            src="https://media.discordapp.net/attachments/1022529234700357713/1235587149206913024/review_2.png?ex=663c29f4&is=663ad874&hm=7452889607ba3b6aa7c13b03e6c6cc99a4183f4110c0a07357b3f08b90ea86d8&=&format=webp&quality=lossless"
            alt=""
          />
        </div>
        <div className="img1">
          <img
            src="https://cdn.discordapp.com/attachments/1195434177756143746/1237721976399986842/Fichier_11.5x-8.png?ex=663cadea&is=663b5c6a&hm=0e1434bb6a9dc2188899e77429a1c248956f752b15a0ff91e8bb80d871bcaeac&"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
