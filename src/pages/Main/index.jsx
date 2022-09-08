import { Section, Description } from './styled'
import ImageDesktop from '../../assets/image-hero-desktop.png'
import ImageMobile from '../../assets/image-hero-mobile.png'
import AudiophileLogo from '../../assets/client-audiophile.svg'
import DatabizLogo from '../../assets/client-databiz.svg'
import MakerLogo from '../../assets/client-maker.svg'
import MeetLogo from '../../assets/client-meet.svg'
export default function Main() {
    return (
        <Section>
            <Description>
                <img className='image-section-mobile' src={ImageMobile} alt="" />
                <h1>
                    Make <br />
                    remote work
                </h1>
                <p>Get your team in sync, no matter your location.
                    Streamline processes, create team rituals,and watch productivity soar.
                </p>
                <button>Learn more</button>
                <div className='brand'>
                    <img src={DatabizLogo} alt="" />
                    <img src={AudiophileLogo} alt="" />
                    <img src={MeetLogo} alt="" />
                    <img src={MakerLogo} alt="" />
                </div>
            </Description>
            <img className='image-section-desktop' src={ImageDesktop} alt="" />
        </Section>
    )
}