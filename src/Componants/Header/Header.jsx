import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 lg:p-4 lg:mx-5 border-b-2'>
            <h1 className='lg:text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;