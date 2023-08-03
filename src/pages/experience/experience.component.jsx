import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TRACKINGSOLUTIONS from "../../assets/img/experience/ts_logo.1.svg";
import L_VSI from "../../assets/img/experience/VSILOGO.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 className="pt-3 text-center font-details">{title}</h1>
        <div class="container">
          <div class="row creative-service">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                  <a href="/service-details">
                    <div class="service service__style--2">
                      <center>
                        <div class="icon">
                          <svg
                            width="48px"
                            height="48px"
                            fill="#008bff"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M39.929103,44.0670766 L44.1327586,39.8645461 L45.3940804,45.3283983 L39.929103,44.0670766 Z M25.6247468,30.3331844 L24.0337487,28.7421863 L19.259629,23.9680666 L17.6686309,22.3770685 L7.81996972,12.5284073 L12.5929642,7.75428767 L22.4416253,17.6029488 L24.0337487,19.193947 L28.8067431,23.9680666 L30.3977413,25.5590648 L42.8264299,37.9877533 L38.0534354,42.761873 L25.6247468,30.3331844 Z M9.85316185,42.9216479 L6.08269875,44.5373999 L3.46329019,41.9179914 L5.08016738,38.1452779 L17.6675057,25.5590648 L22.4416253,30.3331844 L9.85316185,42.9216479 Z M3.03909902,7.74753662 C2.60703163,7.31434405 2.60815681,6.60098278 3.04585008,6.16216434 L6.22784639,2.98016802 C6.67004036,2.53909923 7.37665058,2.53797405 7.81321867,2.97341697 L11.001966,6.16216434 L6.22784639,10.936284 L3.03909902,7.74753662 Z M37.3940826,5.83361309 L42.1682022,10.6066076 L30.3977413,22.3770685 L25.6247468,17.6018236 L37.3940826,5.83361309 Z M43.3631386,2.2510543 C43.3665141,2.24880395 43.3575127,2.24880395 43.3665141,2.25780535 L45.7440099,4.63530118 C45.750761,4.64205224 45.750761,4.63755154 45.750761,4.63867671 L42.5665143,7.8217982 L40.1800171,5.43530097 L43.3631386,2.2510543 Z M46.0095514,37.9877533 L31.9898646,23.9680666 L41.3423234,14.6156079 L42.2188351,15.4932448 C42.6587787,15.9331884 42.6587787,16.6454245 42.2165847,17.0876184 L37.8013961,21.5016819 C37.3625776,21.9416255 37.3625776,22.6538616 37.8013961,23.0926801 C38.2413397,23.5326237 38.9535758,23.5326237 39.3923942,23.0926801 L43.8075829,18.6797418 C45.1285389,17.3587857 45.1296641,15.2209523 43.8109584,13.9022466 L42.9333215,13.0246097 L43.7592004,12.1976057 L45.3501985,10.6066076 L44.1575125,9.41392153 L47.3417591,6.22967487 C48.2250219,5.34416175 48.2160205,3.92531544 47.3350081,3.04317785 L44.9575123,0.665682022 C44.0674984,-0.224331798 42.6497773,-0.217580745 41.7721404,0.660056145 L38.5878938,3.84430281 L37.3940826,2.6504916 L35.8030844,4.24148976 L35.8019592,4.24148976 L35.8019592,4.24261494 L24.0337487,16.0108255 L9.40421683,1.38241882 C8.08663632,0.0659634808 5.95555392,0.0704641828 4.63684823,1.38916987 L1.45485192,4.57116618 C0.140646937,5.88537116 0.132770709,8.02432979 1.44810087,9.33853477 L4.63684823,12.5272821 L4.94064562,12.8310795 L6.22784639,14.1194055 L16.0765075,23.9680666 L3.18199631,36.8625778 L0.795499078,42.4321966 L2.38649723,44.0231947 L0,46.409692 L1.59099816,48.0006901 L3.97749539,45.6141929 L5.56961872,47.205191 L11.1392374,44.8186938 L24.0337487,31.9241826 L36.4613121,44.3528711 L38.0523102,45.9438693 L46.2030815,47.8251627 C47.404769,48.1019559 48.1698883,47.3480883 47.8897196,46.1373995 L46.0095514,37.9877533 Z"
                              id="designer"
                            ></path>
                          </svg>
                        </div>
                        <div class="content">
                          <h3 class="title">Design</h3>
                          <p>
                            I value simple content structure, clean design
                            patterns, and thoughtful interactions.
                          </p>
                          <h4 class="title">Things I enjoy doing</h4>
                          <p>UI, Web, Apps, Photos, Logos</p>
                          <h4 class="title">Tools I use</h4>
                          <p>
                            Photoshop, Illustrator, Affinity, Figma, Pen &amp;
                            Paper
                          </p>
                        </div>
                      </center>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                  <a href="/service-details">
                    <div class="service service__style--2">
                      <center>
                        <div class="icon">
                          <svg
                            width="50px"
                            height="48px"
                            viewBox="0 0 50 48"
                            version="1.1"
                          >
                            <g
                              id="Website"
                              stroke="none"
                              stroke-width="1"
                              fill="#008bff"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M47.6190476,44.3916 C47.6190476,45.0576 47.0797619,45.6 46.4238095,45.6 L3.57619048,45.6 C2.91428571,45.6 2.38095238,45.0624 2.38095238,44.3916 L2.38095238,18 L2.38095238,13.2 L2.38095238,12 L5.95238095,12 L13.0952381,12 L16.6666667,12 L20.2380952,12 L35.1904762,12 L47.6190476,12 L47.6190476,18 L47.6190476,44.3916 Z M3.57619048,2.4 L5.95238095,2.4 L13.0952381,2.4 L16.6666667,2.4 L20.2380952,2.4 L46.4238095,2.4 C47.0821429,2.4 47.6130952,2.934 47.6178571,3.6 C47.6178571,3.6024 47.6190476,3.6048 47.6190476,3.6084 L47.6190476,9.6 L20.2380952,9.6 L16.6666667,9.6 L13.0952381,9.6 L5.95238095,9.6 L2.38095238,9.6 L2.38095238,3.6084 C2.38095238,3.6048 2.38214286,3.6024 2.38214286,3.6 C2.38690476,2.9388 2.92261905,2.4 3.57619048,2.4 L3.57619048,2.4 Z M46.4238095,0 C48.3964286,0 49.9940476,1.6068 49.9988095,3.6 C49.9988095,3.6024 50,3.606 50,3.6084 L50,3.6084 L50,44.3916 C50,46.3848 48.3928571,48 46.4238095,48 L46.4238095,48 L3.57619048,48 C1.60119048,48 0,46.3884 0,44.3916 L0,44.3916 L0.000595238095,3.6042 L0.000595238095,3.6042 C0.00476190476,2.0364 1.00238095,0.7188 2.38095238,0.222 C2.75595238,0.0864 3.1547619,0 3.57619048,0 L3.57619048,0 Z M27.3807143,17.03184 C27.192619,17.16264 27.0271429,17.33184 26.9378571,17.56224 L26.7688095,18.00024 L22.7509524,28.34664 L19.1295238,37.67784 C18.8890476,38.29464 19.1914286,38.99064 19.8045238,39.23184 C20.417619,39.47304 21.1080952,39.16824 21.347381,38.55264 L22.7509524,34.93344 L27.3807143,23.00664 L29.1545238,18.43704 C29.2104762,18.29304 29.2307143,18.14544 29.2307143,18.00024 C29.2307143,17.52024 28.9509524,17.06664 28.4807143,16.88184 C28.097381,16.73064 27.6961905,16.81224 27.3807143,17.03184 Z M14.7671429,20.75136 L13.0957143,22.43616 L8.8802381,26.68416 C8.4147619,27.15336 8.4147619,27.91296 8.8802381,28.38096 L13.0957143,32.63016 L14.7671429,34.31616 C15.232619,34.78416 15.985,34.78416 16.4504762,34.31616 C16.9159524,33.84696 16.9159524,33.08616 16.4504762,32.61936 L13.0957143,29.23656 L11.4052381,27.53256 L13.0957143,25.82976 L16.4504762,22.44816 C16.9159524,21.97896 16.9159524,21.22056 16.4504762,20.75136 C15.985,20.28216 15.232619,20.28216 14.7671429,20.75136 Z M33.6821429,20.75136 C33.2166667,21.22056 33.2166667,21.97896 33.6821429,22.44816 L35.1904762,23.96856 L38.7261905,27.53256 L35.1904762,31.09896 L33.6821429,32.61936 C33.2166667,33.08616 33.2166667,33.84696 33.6821429,34.31616 C34.0952381,34.73136 34.7261905,34.75776 35.1904762,34.43256 C35.247619,34.39296 35.3130952,34.36896 35.3654762,34.31616 L41.252381,28.38096 C41.7178571,27.91296 41.7178571,27.15336 41.252381,26.68416 L35.3654762,20.75136 C35.3130952,20.69976 35.247619,20.67456 35.1904762,20.63376 C34.7261905,20.31096 34.0952381,20.33376 33.6821429,20.75136 Z M5.95238095,4.79976 C5.29404762,4.79976 4.76190476,5.33616 4.76190476,5.99976 C4.76190476,6.66336 5.29404762,7.19976 5.95238095,7.19976 C6.61071429,7.19976 7.14285714,6.66336 7.14285714,5.99976 C7.14285714,5.33616 6.61071429,4.79976 5.95238095,4.79976 Z M9.52380952,4.79976 C8.86547619,4.79976 8.33333333,5.33616 8.33333333,5.99976 C8.33333333,6.66336 8.86547619,7.19976 9.52380952,7.19976 C10.1821429,7.19976 10.7142857,6.66336 10.7142857,5.99976 C10.7142857,5.33616 10.1821429,4.79976 9.52380952,4.79976 Z M13.0952381,4.79976 C12.4369048,4.79976 11.9047619,5.33616 11.9047619,5.99976 C11.9047619,6.66336 12.4369048,7.19976 13.0952381,7.19976 C13.7535714,7.19976 14.2857143,6.66336 14.2857143,5.99976 C14.2857143,5.33616 13.7535714,4.79976 13.0952381,4.79976 Z"
                                id="frontend"
                                fill="#008bff"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div class="content">
                          <h3 class="title">Web Development</h3>
                          <p>
                            I like to code things from scratch, and enjoy
                            bringing ideas to life in the browser.
                          </p>
                          <h4 class="title">Things I enjoy doing</h4>
                          <p>HTML, CSS, Javascript, Python</p>
                          <h4 class="title">Tools I use</h4>
                          <p>
                            VSCode ,React ,Angular, Redux, Codesandbox, Github
                          </p>
                        </div>
                      </center>
                    </div>
                  </a>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
                  <a href="/service-details">
                    <div class="service service__style--2">
                      <center>
                        <div class="icon">
                          <svg
                            id="Capa_1"
                            enable-background="new 0 0 512 512"
                            height="48"
                            viewBox="0 0 512 512"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <g>
                                <path
                                  d="m245.877 15.586v40.247c-108.074 2.884-194.799 91.397-194.799 200.167 0 108.77 86.725 197.283 194.799 200.166v40.247h71.174v-480.827zm-119.454 240.414c0-67.044 53.101-121.919 119.454-124.777v249.554c-66.353-2.858-119.454-57.733-119.454-124.777z"
                                  fill="#008bff"
                                ></path>
                              </g>
                              <g>
                                <path
                                  d="m430.645 0h-44.389c-16.695 0-30.277 13.582-30.277 30.277v393.097c0 .005.041.9.044.936.101 1.092.378 2.134.802 3.095l17.33 41.37c.006.013.011.027.017.04.016.038.033.076.049.114.009.021.019.043.029.064.009.02.018.041.027.061l16.883 37.089c1.624 3.567 5.182 5.857 9.102 5.857h16.375c3.919 0 7.478-2.29 9.102-5.857l16.883-37.089c.009-.02.018-.041.027-.061.01-.021.019-.043.029-.064.017-.038.033-.076.049-.114.006-.013.012-.027.017-.04l17.33-41.37c.424-.962.701-2.003.802-3.095.003-.035.044-.931.044-.936v-393.097c.002-16.695-13.58-30.277-30.275-30.277zm-3.776 454.911h-36.836l-9.022-21.537h54.88zm-28.418-378.894v337.356h-22.471v-337.356zm20 337.357v-337.357h22.471v337.356h-22.471zm-32.195-393.374h44.389c5.667 0 10.277 4.61 10.277 10.277v25.594h-64.942v-25.594c0-5.667 4.61-10.277 10.276-10.277zm23.947 472h-3.505l-7.779-17.089h19.063z"
                                  fill="#008bff"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="content">
                          <h3 class="title">Engineering</h3>
                          <p>
                            I love inventing and making things, from designing
                            to modelling to prototype building
                          </p>
                          <h4 class="title">Things I enjoy doing</h4>
                          <p>Building, fixing, Designing</p>
                          <h4 class="title">Tools I use</h4>
                          <p>AutoCAD, SolidWorks, Pen &amp; Paper, ToolBox</p>
                        </div>
                      </center>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card className="card">
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_TRACKINGSOLUTIONS}
                    alt="Track logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Junior Software Developer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        Mobile & Web Developer
                      </strong>
                      <br />
                      <strong>Role:</strong> Developer
                      <br />
                      <strong>Description:</strong>{" "}
                      <strong>
                        Developed & enhanced multiple features with full
                        customizability option across web application. Debugging
                        existing code to solve problems.
                      </strong>
                      <br />
                      <strong>Technology:</strong> Android (Java), React.js
                      (JavaScript) and MS-SQL
                      <br />
                      <strong>Duration:</strong> June 2018 - May 2019
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>

        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_VSI}
                    alt="Accenture logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Junior Software Developer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        Software Developer
                      </strong>
                      <br />
                      <strong>Role:</strong> Developer & Tech/Customer support
                      <br />
                      <strong>Description:</strong>{" "}
                      <strong>
                        Developed , Designed & enhanced multiple features with
                        full customizability option across software application.
                        Debugging existing code to solve problems.
                      </strong>
                      <br />
                      <strong>Technology:</strong> DOTNET, C#, Android (JAVA)
                      and MS-SQL
                      <br />
                      <strong>Duration:</strong> April 2013 - August 2014
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron> */}
      </div>
    </div>
  );
}
