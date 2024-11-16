import React from "react";
import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import LinkedinLogo from '@/assets/icons/linkedin.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import WhatsappLogo from '@/assets/icons/whatsapp.svg';

const SocialNetwork = () => {
    return(
    <div>

    <h5>Encuentranos en:</h5>
        <div>
            <FacebookLogo width="20px" height="20px"/>
            <InstagramLogo width="20px" height="20px"/>
            <LinkedinLogo width="20px" height="20px"/>
            <TiktokLogo width="20px" height="20px"/>
            <WhatsappLogo width="20px" height="20px"/>
        </div>
        </div>)
}

export default SocialNetwork;