import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    TumblrShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon,
    EmailIcon,
    TumblrIcon,
    RedditIcon,
} from 'react-share';
import * as styles from './index.module.scss';
import React from 'react';

const Share = (props) => {
    return (
        <div className="text-center">
            <div className={styles.share_item}>
                <TwitterShareButton url={props.url}>
                    <TwitterIcon size={props.size} round={props.round} className="d-inline"/>
                </TwitterShareButton>
            </div>
            <div className={styles.share_item}>
                <FacebookShareButton url={props.url}>
                    <FacebookIcon size={props.size} round={props.round} className="d-inline"/>
                </FacebookShareButton>
            </div>
            <div className={styles.share_item}>
                <TelegramShareButton url={props.url}>
                    <TelegramIcon size={props.size} round={props.round} className="d-inline"/>
                </TelegramShareButton>
            </div>
            <div className={styles.share_item}>
                <WhatsappShareButton url={props.url}>
                    <WhatsappIcon size={props.size} round={props.round} className="d-inline"/>
                </WhatsappShareButton>
            </div>
            <div className={styles.share_item}>
                <RedditShareButton url={props.url}>
                    <RedditIcon size={props.size} round={props.round} className="d-inline"/>
                </RedditShareButton>
            </div>
            <div className={styles.share_item}>
                <TumblrShareButton url={props.url}>
                    <TumblrIcon size={props.size} round={props.round} className="d-inline"/>
                </TumblrShareButton>
            </div>
            <div className={styles.share_item}>
                <EmailShareButton url={props.url}>
                    <EmailIcon size={props.size} round={props.round} className="d-inline"/>
                </EmailShareButton>
            </div>
        </div>
    );
};
export default Share;
