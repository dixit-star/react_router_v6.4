import {Form} from "react-router-dom"
export const getFormData=async({request})=>{
    try {
        const res = await request.formData();
        const data =Object.fromEntries(res)
        console.log(data);
        return null
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export const Contact=()=>{

    return(
        <>
      <div className="formcontainer">
        <Form method="POST" >
        <label htmlFor="fullname">Full Name</label>
        <br />
        <input type="text" name="fullname" id="fullname" required />
        <br />
        <label htmlFor="email">Email ID</label>
        <br />
        <input type="email" name="email" id="email" required />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input type="text" name="message" id="message" required />
        <br />
        <button type="submit">Submit</button>
        </Form>
      </div>
        </>
    )
}