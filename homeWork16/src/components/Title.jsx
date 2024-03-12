const Title = ({ loggedInUser }) => {
    return (
        <div className="title">
            <h1>Students List</h1>
            <img src={loggedInUser.avatar} alt="User Avatar" />
        </div>
    );
};

export default Title;
