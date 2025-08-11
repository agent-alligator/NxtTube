import './Banner.css'

function Banner({ setShowBanner }) {
    return (
        <>
            <div className="banner" style={{ position: 'relative' }}>
                <button
                    onClick={() => setShowBanner(false)}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer',
                        color: '#333',
                        zIndex: 1,
                    }}
                >
                    &times; {/* this is the "×" character */}
                </button>

                <div
                    style={{
                        width: '250px',
                        backgroundColor: 'white',
                        paddingTop: '40px',
                        height: '220px',
                    }}
                >
                    <div className="logo-container" style={{ textAlign: 'center' }}>
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="Logo"
                            style={{ width: '120px', marginBottom: '20px' }}
                        />
                    </div>

                    <div className="premium-section" style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '14px', color: '#555' }}>
                            Buy Nxt Watch Premium prepaid plans with UPI
                        </p>
                    </div>

                    <button className="premium-button">
                        GET IT NOW
                    </button>
                </div>

                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                    alt="Banner"
                    className="banner-image"
                />
            </div>
        </>
    )
}

export default Banner