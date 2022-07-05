import React from "react";


interface IAvatarProps {
    pictureName?: string;
    user: any;
}


const AvatarComponent = (props: IAvatarProps) => {
    const [currentUser, setCurrentUser] = React.useState(props.user);
    const onLogin = () => {
        setCurrentUser({
            avatar: '/default-avatar.png'
        })
    };
    const onLogout = () => {
        setCurrentUser(null)
    }
    console.log(currentUser);
    return (
        <div>
            {
                currentUser ? 
                    <div>
                        <div className="w-8 h-8">
                            <img className="rounded-full" src={currentUser.avatar ? currentUser.avatar : '/default-avatar.png'} alt="user-avatar" />
                        </div>
                        <button onClick={onLogout}>
                            Logout
                        </button>
                    </div> :
                <div>
                    <button onClick={onLogin}>
                        Login
                    </button>
                </div>
            }
        </div>
    );
};

export default AvatarComponent;
