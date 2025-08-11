import './ChannelInfo.css';

function ChannelInfo(){
    return (
        <div className="channel-info">
            <img
                src="https://yt3.ggpht.com/ER0gWbyOw3zR4G-uGWplrTYY8P55jewfrf5n8VOBT_nDIVDcWq2f0a-a5GRHd9mBetRWe-ifsuA=s176-c-k-c0x00ffffff-no-rj-mo"
                alt="Channel Logo"
                className="channel-logo"
            />
            <div className="channel-text">
                <div className="channel-name">Ib cricket</div>
                <p className="channel-subs">5.4k subscribers</p>
            </div>
        </div>
    );
}

export default ChannelInfo; 