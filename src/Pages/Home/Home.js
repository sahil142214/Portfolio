import React, {useEffect, useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Phone from "../../Components/Phone/Phone";
import "./Home.css"
import Console from "../../Components/Console/Console";

const Home = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState('phone');
    
    useEffect(() => {
        document.title = 'Home • Sahil';
        
        // Check if we're on mobile
        const checkScreenSize = () => {
            const mobile = window.innerWidth <= 992;
            setIsMobile(mobile);
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);
        
        // Clean up
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    const switchTab = (tab) => {
        setActiveTab(tab);
    };
    
    return (
        <div>
            <Navbar active="Home"/>
            
            {/* For mobile devices only */}
            {isMobile && (
                <div className="mobile-only">
                    <div className="device-tabs">
                        <button 
                            className={`device-tab ${activeTab === 'phone' ? 'active' : ''}`}
                            onClick={() => switchTab('phone')}
                        >
                            Phone View
                        </button>
                        <button 
                            className={`device-tab ${activeTab === 'console' ? 'active' : ''}`}
                            onClick={() => switchTab('console')}
                        >
                            Console View
                        </button>
                    </div>
                </div>
            )}
            
            <div className="wrapper">
                {/* Regular view for larger screens */}
                {!isMobile && (
                    <>
                        <Phone/>
                        <Console display={props.display} setDisplay={props.setDisplay}/>
                    </>
                )}
                
                {/* Mobile view with tabs */}
                {isMobile && (
                    <>
                        <div className={`tab-content ${activeTab === 'phone' ? 'active' : ''}`}>
                            <Phone/>
                        </div>
                        <div className={`tab-content ${activeTab === 'console' ? 'active' : ''}`}>
                            <div className="responsive-console">
                                <Console display={props.display} setDisplay={props.setDisplay}/>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
