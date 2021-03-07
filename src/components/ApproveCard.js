import React from 'react' //JSX kullanmak icin rect import etmem lazim

const ApproveCard = () => {
    return(
        <div className="ui card">
        <div className="comment">
          
          <a href="/" className="avatar"><img alt="avatar"/></a>
          <div className="content">
            <a href="/" className="author">Mark Who</a>
            <div className="metadata">
              <span className="date">07/12/2020</span>
            </div>
            <div className="text">What a nice blog!</div>
          </div>
        </div>
        <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Reject</div>
        </div>
        </div>

      </div>

      
    )
}

export default ApproveCard // ApproveCard i baska yerlerde kullanmak icin export etmeliyim