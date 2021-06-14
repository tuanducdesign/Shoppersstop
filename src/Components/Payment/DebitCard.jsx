import React from 'react'

function DebitCard() {
    return (
        <div>
            <div style={{fontWeight:"bold",fontSize:"15px"}}>Pay via credit card</div>
            <hr />
            <div style={{fontWeight:"bold",fontSize:"15px"}}>Enter card details</div>
            <input placeholder="Card Number" style={{width:"97%",height:"25px",margin:"10px 0px",border:"1px solid lightgray"}} type="text" name="" id="" />
            <div>
                <select style={{width:"31%",marginRight:"10px",height:"29px",border:"1px solid lightgray"}} name="" id="">
                    <option value="">Expairy month*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select style={{width:"31%",marginRight:"10px",height:"29px",border:"1px solid lightgray"}} name="" id="" >
                    <option value="">Expairy year*</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                </select>
                <input placeholder="CVV*" style={{width:"31%",height:"25px",border:"1px solid lightgray"}} type="text" name="" id=""/>
            </div>
            <input placeholder="Name on Card*" style={{width:"97%",height:"25px",margin:"10px 0px",border:"1px solid lightgray"}} type="text" name="" id="" />
            <button
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              marginLeft:"68%",
              background:
                "linear-gradient(to right, #ff0066 44%, #ff3300 30%)",
              border: "0px solid",
              padding: "2% 8%",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
           Pay Now
          </button>
          <hr />
          <p style={{fontSize:"13px"}}>Please note: You will be redirected to 3-D secure page to complete your transaction. By placing this order, you agree to the Terms Of Use and Privacy Policy of Shoppersstop.com</p>
        </div>
    )
}

export default DebitCard