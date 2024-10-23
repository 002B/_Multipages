import profileImg from '../../assets/Pongsapak.jpg';
import './Home.css';

function Home() {
    return (   
        <div className='home-container'>
            <div className="profile-img">
                <img src={profileImg} alt="profile-image" />
            </div>
            <div className="profile-info">
                <h2>นายพงศภัค ปานประเสริฐ</h2>
                <h3><span className='text-danger'>รหัสนักศึกษา :</span> 66083745</h3>
                <h3><span className='text-danger'>คณะ :</span> Infomation Technology</h3>
                <h3><span className='text-danger'>สาขา :</span> Computer Science and Software </h3>
                <h3>Development Innovation</h3>
                <h3><span className='text-danger'>Quote :</span> It's not how much time you have,</h3>
                <h3> it's how you use it</h3>
            </div>
        </div> 
    );
}

export default Home;