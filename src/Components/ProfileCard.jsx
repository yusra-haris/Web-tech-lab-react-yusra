import './ProfileCardstyling.css';

function ProfileCard(props) {
    const { name :personname, age :personage, occupation : personoccupation , location :personlocation } = props;
    return (
    <div>
    <div className = 'detailtitle'>
          <h1> PROFILE CARD </h1> 
    </div>

    <div className = 'details'>
        <p className = 'detailsdata'>Applicant's Name : {personname}</p>
        <p className = 'detailsdata'>Applicant's Age :  {personage} years old.</p>
        <p className = 'detailsdata'>Applicant's occupation : {personoccupation}.</p>
        <p className = 'detailsdata'>Applicant's location : {personlocation}.</p>
    </div>
    </div>
    );
    }
    export default ProfileCard;