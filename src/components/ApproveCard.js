import React from 'react' //JSX kullanmak icin rect import etmem lazim
import CommentDetail from './CommentDetail'

// 1.Yontem const ApproveCard = (props) => { (props.name, props.date, props,comment)
const ApproveCard = (props) => { //3. Yontem, koseli paranteze dikkat
  //2. Yontem const {name, date, comment} = props
    return(
        <div className="ui card">
        
          {props.children} 
            

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