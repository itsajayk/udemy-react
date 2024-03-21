import c1 from '../assets/images/images/c1.jpg'
import c2 from '../assets/images/images/c2.jpg'
import c3 from  '../assets/images/images/c3.jpg'
import c4 from '../assets/images/images/c4.jpg'
import c5 from  '../assets/images/images/c5.jpg'
import c6 from '../assets/images/images/c6.jpg'
import c7 from '../assets/images/images/c7.jpg'
import c8 from '../assets/images/images/c8.jpg'

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>

        <div class="popular__container">
            <div class="course-card">
            <img src={c1} alt="" />
            <h3>2023 Python Data Visualization Masterclass</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del> </p> 
        </div>

            <div class="course-card">
            <img src={c2} alt="" />
            <h3>Web Development Bootcamp 2023 | Advance</h3>
            <p>Col Stable</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>449 <del>1999</del></p> 
        </div>

            <div class="course-card">
            <img src={c3}alt="" />
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

            <div class="course-card">
            <img src={c4} alt="" />
            <h3>Basic to Advance Java Core Training</h3>
            <p>Col Stable</p>
            <p>2.9 ⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c5} alt="" />
            <h3>Master AI and ML</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

            <div class="course-card">
            <img src={c6} alt="" />
            <h3>Basic to Advance C++ Core Training</h3>
            <p>Col Stable</p>
            <p>2.9 ⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div class="course-card">
            <img src={c7} alt="" />
            <h3>Master DevOps Training</h3>
            <p>Col Stable</p>
            <p>4.9 ⭐⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

            <div class="course-card">
            <img src={c8}alt="" />
            <h3>Automation Testing Training</h3>
            <p>Col Stable</p>
            <p>2.9 ⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        </div>
    </div>
    )
}

export default Popular