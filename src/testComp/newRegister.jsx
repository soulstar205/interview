import React, {useState} from 'react'
import Header from './header'
import '../App.css'


const Newregister=()=>{

    const [Firstname, setFirstname] = useState(' ')
    const [surname, setSurname] = useState(' ')
    const [gender, setGender] = useState('Male')
    const [studentClass, setStdentClass] = useState(' ')
    const [physics, setPhysics] = useState()
    const [chemistry, setChemistry] = useState()
    const [maths, setMaths] = useState()
    const [displayResult, setDisplayResult] = useState(false)
    


   let total = parseInt(physics) + parseInt(chemistry) + parseInt(maths)

   const average = total/3 

   console.log(typeof(physics))

   
   return(

    <div className="outter-container">

    <Header/>
    <div className="container">
        
        <form onSubmit={(e)=>{e.preventDefault()
            setDisplayResult(true)
                         }}>
        
            <label htmlFor="Firstname" className="label">First Name :

            <input type="text" name="Firstname" 
            value={Firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            
            </label>

            <label htmlFor="surname" className="label">Last Name :

            <input type="text" name='surname' onChange={(e)=>setSurname(e.target.value)}/>
            
            </label>


            <label className='gender-select' className="label">Gender:
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </label>

            <label htmlFor="" className="label" >Class
            <input type="text" placeholder="Enter your class e.g 'Jss3' " value={studentClass} onChange={(e)=>setStdentClass(e.target.value)}/>
            </label>

            <label htmlFor="" className="label">Physics
            <input type="number" value={physics} placeholder="Enter physics score" 
            className="score-input" onChange={(e)=>setPhysics(e.target.value)}/>
            </label>

            <label className="label">Chemistry>
            <input type="number" value={chemistry} placeholder="Enter Chemistry score" 
            className="score-input" onChange={(e)=>setChemistry(e.target.value)}/>
            </label>

            <label className="label">Maths
            <input type="number" value={maths} placeholder="Enter maths score" 
            className="score-input" onChange={(e)=>setMaths(e.target.value)}/>
            </label>
            
           <button type="submit" className="btn">Submit</button>
        </form>
    </div>
    
        <div className="result-container">    
       {
           displayResult &&
      
        <div className="container">
        <h2 class="details">Details</h2>
        
        <div className="input">
            <p>Full Name :</p> {`${Firstname} ${surname}`}
        </div>
        <div>
           <p>Gender</p> {gender === "Male"? "S/O": "D/O"}
        </div>
        <div className="input">
           <p>Class :</p> {studentClass}
        </div>
        <div className="input">
        <p>Scores :</p> 
            <label>Physics:
                <div>{physics}</div>
            </label>
            <label>Chemistry:
             <div>{chemistry}</div> 
             </label>
             <label>Maths :
             <div>{maths}</div>
             </label>
        </div>
        <div className="input">
           <p>Average Score :</p> <div>{average}</div> 
        </div>
        <div className="input">
           <p>Total Score :</p> <div>{total}</div> 
        </div>
        <div className="input">
       <p>Grade :</p>{average >= 70? "A": average>=60&&average<70? "B": average>=50&&average<60? "C": average>=40&&average<50? "D": "F"}
       </div>
        </div>

    }
    </div>
    </div>

)
   
}
export default Newregister