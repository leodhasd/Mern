import React from "react";
import { useState } from "react";


function Admission() {
    const [value, setValue] = useState({
        Name: "",
        DOB: "",
        Gender: "",
        Email: "",
        ParentNumber: "",
        FirstGraduate: "",
        Address: "",
        District: "",
        State: "",
        Course: ""
    });

    const [error, setError] = useState({
        NameError: "",
        DOBError: "",
        GenderError: "",
        EmailError: "",
        ParentNumberError: "",
        FirstGraduateError: "",
        AddressError: "",
        DistrictError: "",
        StateError: "",
        CourseError: ""
    });

    function handle(event) {
        event.preventDefault();
        setValue({
            ...value,
            [event.target.name]: event.target.value
        }
        );
    }

    function submit(e) {
        e.preventDefault();
        if (value.Name=="") {
            setError({
                ...error,
                NameError: "Field is Required"
            });
        }

        else if (value.DOB=="") {
            setError({
                ...error,
                DOBError: "Field is Required"
            });
        }

        else if (value.Email=="") {
            setError({
                ...error,
                EmailError: "Field is Required"
            });
        }

        else if (value.ParentNumber=="") {
            setError({
                ...error,
                ParentNumberError: "Field is Required"
            });
        }

        else if (value.Gender=="") {
            setError({
                ...error,
                GenderError: "Field is Required"
            });
        }

        else if (value.District=="") {
            setError({
                ...error,
                DistrictError: "Field is Required"
            });
        }

        else if (value.State=="") {
            setError({
                ...error,
                StateError: "Field is Required"
            });
        }

        else if (value.Course=="") {
            setError({
                ...error,
                CourseError: "Field is Required"
            });
        }

        else if (value.Address=="") {
            setError({
                ...error,
                AddressError: "Field is Required"
            });
        }

        else if (value.FirstGraduate == "") {
    setError({
        ...error,
        FirstGraduateError: "Field is Required"
    });
}






    }




    return (
        <>
            <div>
                <form onSubmit={submit}>
                    <h3>Name</h3>
                    <input type="Name" placeholder="Name" name="Name"  onChange={handle}></input>   <br /><br />
                    {error.NameError}
                    <h3>Date of Birth</h3>
                    <input type="date" id="dob" name="dob"></input><br/> <br />
                    {error.DOBError}
                    <h3>Gender</h3>
                    <input type="Gender" placeholder="Gender" name="Gender"  onChange={handle}></input>   <br /> <br />
                    {error.GenderError}
                    <h3>Email</h3>
                    <input type="Email" placeholder="Email" name="Email"  onChange={handle}></input>  <br /> <br />
                    {error.EmailError}
                    <h3>ParentNumber</h3>
                    <input type="ParentNumber" placeholder="ParentNumber" name="ParentNumber"  onChange={handle}></input>  <br /> <br />
                    {error.ParentNumberError}
                    <h3>FirstGraduate</h3>
                    <select name="grad" two  onChange={handle}>
                        <option value="y">Yes</option>
                        <option value="x">No</option>
                    </select>
                    <h3>Address</h3>
                    <input type="Address" placeholder="Address" name="Address"  onChange={handle}></input>  <br /> <br />
                    {error.AddressError}
                    <h3>District</h3>
                    <select name="District" six onChange={handle}>
                        <option value="nkl">Namakkal</option>
                        <option value="sl">Salem</option>
                        <option value="tn">Madurai</option>
                        <option value="tn">Ooty</option>
                        <option value="tn">Coimbatore</option>
                        <option value="tn">Chennai</option>
                    </select>
                    <h3>State</h3>
                    <select name="states" six  onChange={handle}>
                        <option value="tn">Tamil Nadu</option>
                        <option value="ker">Kerala</option>
                        <option value="AP">Andhara Pradesh</option>
                        <option value="kt">Karnataka</option>
                        <option value="bob">Mumbai</option>
                        <option value="dl">Delhin</option>
                    </select>
                    <h3>Course</h3>
                    <select name="course" id="courses" five  onChange={handle}>
                        <option value="cse"> B.E - Computer Science and Engineering</option>
                        <option value="it"> B.Tech- Information Technology</option>
                        <option value="civ">B.E - Civil Engineering</option>
                        <option value="mech"> B.E- Mechanical Engineering</option>
                        <option value="EEE">B.E-Electronic Communication and Engineering</option>
                    </select> <br /> <br />

                    <button type="submite"> submit</button>



                </form>



            </div>

        </>
    );
}
export default Admission