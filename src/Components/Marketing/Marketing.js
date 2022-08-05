import React from 'react'

const Marketing = () => {
    const dataflow = [
        { id: 1, icon: "fa-solid fa-envelope", time: "one", name: "404 Page", exmaple: "29" }, { id: 2, icon: "fa-solid fa-arrow-right-arrow-left", time: "two", name: "Activity Summary Email", exmaple: "8" },
        { id: 3, icon: "fa-solid fa-envelope-open-text", time: "three", name: "Invitation Emails", exmaple: "6" }, { id: 4, icon: "fa-solid fa-arrows-down-to-people", time: "four", name: "Invite Your Team Emails", exmaple: "27" },
        { id: 5, icon: "fa-solid fa-bag-shopping", time: "one", name: "Onboarding Email Flow", exmaple: "11" }, { id: 6, icon: "fa-solid fa-clapperboard", time: "two", name: "Product Hunt Emails", exmaple: "6" },
        { id: 7, icon: "fa-solid fa-bolt", time: "three", name: "Security", exmaple: "26" }, { id: 8, icon: "fa-solid fa-bookmark", time: "four", name: "Lighthe Performance insights", exmaple: "17" },
        { id: 9, icon: "fa-solid fa-building", time: "one", name: "Ebook Emails", exmaple: "44" }, { id: 10, icon: "fa-solid fa-camera-rotate", time: "two", name: "Free Trial Emails", exmaple: "6" },
        { id: 11, icon: "fa-solid fa-bed-pulse", time: "three", name: "Newsletters", exmaple: "13" }, { id: 12, icon: "fa-solid fa-book", time: "four", name: "Retention Email ", exmaple: "9" },
        { id: 13, icon: "fa-solid fa-bridge-lock", time: "one", name: "Survey Emails", exmaple: "11" }]

    return (
        <>
            <div className='row mt-5 '>

                {dataflow.map((showData) => {
                    return (
                        <>
                            <div className="col-lg-3 mb-4 animate fadeInLeft " id={showData.time} key={showData.id}>
                                <div className="main-box-shadow">
                                    <div className='link-block-category-cards'>
                                        <i className={showData.icon}></i>
                                        <div className="text-main-box">{showData.name}</div>
                                        <div className="text-main-box-count">{showData.exmaple} exampale</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })} 


            </div>

        </>
    )
}

export default Marketing