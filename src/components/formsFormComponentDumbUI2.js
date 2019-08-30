//Display logic file, aka UI logic, aka rendering logic, presentational component, dumb component.
//ONLY receives props and displays things correctlty.
import React from 'react';

function FormsFormComponentDumbUI2(props) {
    console.log(props.data);
        return (
            <div className="productsAppboxcss">
                <div>
                    Here, the implementation is in 3 files ("App.js", "DumbUI.js" and "Smart logic.js")
                </div>
                <form onSubmit={props.handleSubmit}> 
                    <input type="text" value={props.data.firstName} name="firstName" placeholder="Etunimi" onChange={props.handleChange} />
                    <br />
                    <input type="text" value={props.data.lastName} name="lastName" placeholder="Sukunimi" onChange={props.handleChange} />
                    <br />
                    <textarea type="text" name="moreInfo" placeholder="lisätietoja" onChange={props.handleChange} />
                    <br />
                    <label>
                        <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange} /> Male
                        <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange} /> Female
                    </label>
                    <label>  &nbsp; &nbsp; Favorite color: </label>
                    <select name="favColor" value={props.data.favColor} onChange={props.handleChange} > 
                        <option value="<valitse>" > Ei valittu </option>
                        <option value="sininen." > Blue </option>
                        <option value="valkoinen." > White </option>
                        <option value="musta." > Black </option>
                    </select>
                    <span> &nbsp; &nbsp; 
                        <input type="number"  value={props.data.age} name="age" placeholder="Ikä" onChange={props.handleChange} />
                    </span>
                    <br />
                    <label> Dietary restrictions: 
                        <input type="checkbox" name="isVegan" checked={props.data.isVegan} onChange={props.handleChange} /> Vegan?
                        <input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange} /> Kosher?
                        <input type="checkbox" name="isLactosefree" checked={props.data.isLactosefree} onChange={props.handleChange} /> Lactose-Free?
                    </label>
                    <label style={{borderBottom: "1px solid #cecece"}} >
                        <input type="checkbox" name="isFriendly" checked={props.data.isFriendly} onChange={props.handleChange} /> Friendly?
                    </label>
                    <p 
                        style={{borderBottom: "1px solid #cecece"}} >
                    </p>
                    <p>Etunimi: {props.data.firstName}. Sukunimi: {props.data.lastName}. Ikä:  {props.data.age}. Lisätietoja:{props.data.moreInfo}.  </p>
                    <p>On  {props.data.isFriendly ? "ystävällinen " : " "} {props.data.gender}. Lempiväri on {props.data.favColor} </p>
                    <p>Dietary restrictions: 
                        Vegan:  {props.data.isVegan ? "Yes. " : "No. "}
                        Kosher:  {props.data.isKosher ? "Yes. " : "No. "}
                        Lactose Free:  {props.data.isLactosefree ? "Yes. " : "No. "}
                    </p>
                    <hr />
                    <button>Submit</button>
                    <br />
                    <br />
                    <p style={{borderBottom: "1px solid #cecece"}} > </p>
                </form>
            </div>
        )
}

export default FormsFormComponentDumbUI2;