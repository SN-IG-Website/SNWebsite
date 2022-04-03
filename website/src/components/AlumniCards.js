import React from 'react';
import '../images/1.JPG';

function AlumniCard() {
    return (
        <>
            <div className='Main-header' style={{
                padding: "70px",
                // backgroundColor: "#E3B7A0",
                backgroundImage: "linear-gradient(150deg,#E3B7A0,#BF9270",
            }}>
                <h4 style={
                    {
                        padding: "30px",
                        margin: "20px",
                        textAlign: "center",
                        fontSize: "70px",
                    }
                } > Distinguished Alumni </h4>
            </div>
            <div>
                <div className="Blogs_reveal Blogs_card1"
                    style={{
                        padding: "4%",
                        display: "flex",
                        justifyContent: "space-around",
                        height: "auto",
                    }}>
                    <br /><br />
                    <div
                        style={{
                            padding: "2% 5%",
                            width: "40%",
                            margin: "1%",
                            // color: "#BF9270"
                            textAlign: "center",
                            alignItems: "center",
                        }}>
                            <img src='../images/1.JPG' alt='error'/>
                        <h1>Lorem Ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quaerat officiis eaque optio. Reiciendis, nostrum? Ullam facilis cumque minima distinctio sapiente,
                             ducimus doloribus, nulla optio earum quidem est assumenda! Tempora, voluptas!
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "2% 5%",
                            width: "40%",
                            margin: "1%",
                        }}>
                        <h1>Lorem Ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quaerat officiis eaque optio. Reiciendis, nostrum? Ullam facilis cumque minima distinctio sapiente,
                             ducimus doloribus, nulla optio earum quidem est assumenda! Tempora, voluptas!
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "2% 5%",
                            width: "40%",
                            margin: "1%",
                        }}>
                        <h1>Lorem Ipsum</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quaerat officiis eaque optio. Reiciendis, nostrum? Ullam facilis cumque minima distinctio sapiente,
                             ducimus doloribus, nulla optio earum quidem est assumenda! Tempora, voluptas!
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AlumniCard;