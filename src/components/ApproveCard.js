import React from 'react' //JSX kullanmak icin rect import etmem lazim

// 1.Yontem const ApproveCard = (props) => { (props.name, props.date, props,comment)
const ApproveCard = ({name, date, comment}) => { //3. Yontem, koseli paranteze dikkat
  //2. Yontem const {name, date, comment} = props
    return(
        <div className="ui card">
        <div className="comment">
          
          <a href="/" className="avatar"><img alt="avatar"/></a>
          <div className="content">
            <a href="/" className="author">{name}</a>
            <div className="metadata">
              <span className="date">{date}</span>
            </div>
            <div className="text">{comment}</div>
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