import logo from './assets/img/aqsin.png';

import './App.css';

function App() {

  return (

    <div className="App">
      <div className="container">

        <div className="row header">

          <div className="col-8">
            <div className="name">
             
              <h3>AGSHIN HUMMATOV</h3>
              <h6>FULLSTACK DEVELOPER</h6>
            </div>

          </div>


          <div className="col-3">  <img className='image-profil' src={logo} alt="" /></div>





        </div>
        <hr />

        <div className="row">

          <div className="col-4" >
            <div className="contact">

              <h3>Contact</h3>
              <h5>Phone</h5>
              
              <h6>(+994) 55 724 82 54</h6>
              <h5>Email</h5>
              <a href=" mailto: AgshinHummatov@outlook.com"><h6>AgshinHummatov@outlook.com</h6></a>
              <h5>Linkedin</h5>
              <a href="https://az.linkedin.com/in/agshinhummatov"><h6>https://az.linkedin.com/in/agshinhummatov</h6></a>
              <hr />
              <h5>Portfolio</h5>
               <a href="https://github.com/Agshinhummatov"><h6>https://github.com/Agshinhummatov</h6></a>
              <hr />
              <h3>Expertise
              </h3>

              <ul>
                <li>C# ASP.NET</li>
                <li>ASP.NET Core</li>
                <li>Entity Framework (EF) Core</li>
                <li>Microsoft SQL Server</li>
                <li>Javascript,Ajax</li>
                <li>React.Js</li>
                <li>HTML,CSS(SCSS)</li>
                <li>Bootstrap,JQuery</li>
                <li>Git,Github</li>

              </ul>

              <hr />
              <h3>Skill</h3>
              <ul>
                <li>Effective Leadership</li>
                <li>Stress Management</li>
                <li>Skill Building</li>
                <li>Team Building Exercises</li>
                <li>Relationship Building</li>

              </ul>
              <hr />
              <h3>Language</h3>
               
              <h6 className="text-test">Azerbaijan Native</h6>
              <h6 className="text-test">English Intermediate</h6>
              <h6 className="text-test">Turkish   Native</h6>

              <hr />



            </div>

          </div>

          <div className="col-8">
             <h3>About Me</h3>
             <br />
             <h6>I have knowledge of C#, ASP.NET Core, SQL, algorithms, and data structures. Additionally,
I have good knowledge of front-end and backend technologies, including HTML,
CSS,Bootstrap,React.Js, JavaScript, and jQuery. I’d be more than happy to discuss with you your
project and deliver you high-quality solutions that meet your needs.</h6>
<hr />
            <h3>Experience</h3>
            <br />
            <h5>Mc donald's 2017 - 2018

            </h5>
            <br />
            <h6>
              Manager
            </h6>
            <br />
            <h6>
              A person responsible for controlling or administering an
              organization or group of staff.
            </h6>
            <br />
            <hr />
            <h5>Peak group 2018-2021
            </h5>
            <br />
            <h6>SMM manager
            </h6>
            <br />
            <hr />
            <h5>Education
            </h5>
            <br />
            <h6>Code Academy 2022 - 2023 (Fullstack Developer)</h6>
            <br />
            <h6>Azerbaijan State Academy of Phyiscal Edcuation
and sport 2016 - 2021 (bachelor)</h6>
 <hr />
          </div>




        </div>

















      </div>




    </div>
  );
}

export default App;
