import React from 'react';

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
                            alignItems: "center",
                        }}>
                            <img style={{
                                width: "80%",  padding: "20px", marginLeft: "40px"
                            }} src="https://lh6.googleusercontent.com/7mt2vkpxc1_eMIMs63OnrNuHY-9j2TkZ9WeLRsfYoOHnPL5sV43B6M2JAkywKSaeRk_MZK3K0vI9wjPf4UNP6rkWGARtp3a3WF7Hq3cjBYml-6kADQvZ72fOXwQaqYk_VjQ8jwc" alt='error'/>
                        <h4>PROF SUSMITA SUR KOLAY</h4>
                        <p>
                        1980/BTech/EC
                        <br/>
                        Professor, ACM Unit, Indian Statistical Institute, Kolkata
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "2% 5%",
                            width: "40%",
                            margin: "1%",
                            // color: "#BF9270"
                            alignItems: "center",
                        }}>
                            <img style={{
                                width: "80%",  padding: "20px", marginLeft: "40px"
                            }} src="https://lh6.googleusercontent.com/7mt2vkpxc1_eMIMs63OnrNuHY-9j2TkZ9WeLRsfYoOHnPL5sV43B6M2JAkywKSaeRk_MZK3K0vI9wjPf4UNP6rkWGARtp3a3WF7Hq3cjBYml-6kADQvZ72fOXwQaqYk_VjQ8jwc" alt='error'/>
                        <h4>PROF SUSMITA SUR KOLAY</h4>
                        <p>
                        1980/BTech/EC
                        <br/>
                        Professor, ACM Unit, Indian Statistical Institute, Kolkata
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "2% 5%",
                            width: "40%",
                            margin: "1%",
                            // color: "#BF9270"
                            alignItems: "center",
                        }}>
                            <img style={{
                                width: "80%",  padding: "20px", marginLeft: "40px"
                            }} src="https://lh6.googleusercontent.com/7mt2vkpxc1_eMIMs63OnrNuHY-9j2TkZ9WeLRsfYoOHnPL5sV43B6M2JAkywKSaeRk_MZK3K0vI9wjPf4UNP6rkWGARtp3a3WF7Hq3cjBYml-6kADQvZ72fOXwQaqYk_VjQ8jwc" alt='error'/>
                        <h4>PROF SUSMITA SUR KOLAY</h4>
                        <p>
                        1980/BTech/EC
                        <br/>
                        Professor, ACM Unit, Indian Statistical Institute, Kolkata
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AlumniCard;