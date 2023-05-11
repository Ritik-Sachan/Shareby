import CircularMenu from "./circularMenu";
import { WhatsappShareButton, TelegramShareButton, FacebookShareButton, FacebookIcon,TelegramIcon,WhatsappIcon, TwitterShareButton, TwitterIcon, LineShareButton, LinkedinIcon, EmailShareButton, EmailIcon} from 'react-share';

function App() {
  const message="www.google.com"
  return (
    <div className="page-container" style={{backgroundImage: "linear-gradient(to right, #4f5bd5, #962fbf)",}}>
      <CircularMenu
       
        pages={
          [
            [<WhatsappShareButton url={message}><WhatsappIcon size={100} borderRadius={40}/></WhatsappShareButton>],
            [<FacebookShareButton url={message}><FacebookIcon size={100} borderRadius={40}/></FacebookShareButton>],
            [<TwitterShareButton url={message}><TwitterIcon size={100} borderRadius={40}/></TwitterShareButton>],
            [<LineShareButton url={message}><LinkedinIcon size={100} borderRadius={40}/></LineShareButton>],
            [<EmailShareButton url={message}><EmailIcon size={100} borderRadius={40}/></EmailShareButton>],
            [<TelegramShareButton url={message}><TelegramIcon size={100} borderRadius={40}/></TelegramShareButton>],
          ]
        }
      />
    </div>
  );
}

export default App;
