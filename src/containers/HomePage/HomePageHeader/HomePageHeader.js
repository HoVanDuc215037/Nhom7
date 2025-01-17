import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomePageHeader.scss';
import * as actions from "../../../store/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/fontawesome-free-webfonts';
import { } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-regular-svg-icons';
import { faTooth, faHeartPulse, faSuitcaseMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/react-fontawesome';
import Login from '../../Authenticate/Login';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../../utils";
import { switchLanguageOfWebsite } from "../../../store/actions";
import { withRouter } from 'react-router';
import { path } from '../../../utils/constant';


class HomePageHeader extends Component {

    switchLanguageOfWebsite = (language) => {
        //fire redux events
        // khi gọi hàm ở đây có thể gọi bằng tên tự đặt bên hàm mapDisplatchToProp bên dưới
        this.props.switchLanguageOfWebsite(language);
    }

    handleWebLogoClicked = () => {
        this.props.history.push(`/home`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {

        }
    }


    handleLoginForUser = (loginState) => {
        // if (loginState === true) {
        //     this.props.processLogout();
        // } else {
        //     this.props.history.push(`/login`);
        // }
        if (!this.props.userInfo || !this.props.userInfo.email) {
            this.props.history.push(`/login`);
        } else {
            this.props.history.push(`/user-profile/${this.props.userInfo.email}`);
        }
    }

    render() {
        //lấy ra biến language từ redux để set lá cờ ngôn ngữ ở header à trong sideBar
        let language = this.props.language;
        let { userInfo } = this.props;
        // console.log("check props: ", this.props);
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-contents">
                        <div className="left-contents">
                            {/* <i className="fas fa-bars"></i> */}
                            <div className="header-logo" onClick={() => this.handleWebLogoClicked()}>
                            </div>
                        </div>
                        <div className="center-contents">
                            <div className="child-content">
                                <div className="header-option-title">
                                    <a href="#"><b><FormattedMessage id="home-page-header.specialty" /></b></a>
                                    {/* <a href="#"><b>Chuyên khoa</b></a> */}
                                </div>
                                {/* <div className="header-option-detail">
                                    Tìm bác sĩ theo chuyên khoa
                                </div> */}
                                <div className="header-option-detail">
                                    <FormattedMessage id="home-page-header.find-doctor-by-their-specialty" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="header-option-title">
                                    <a href="#"><b><FormattedMessage id="home-page-header.facilities" /></b></a>
                                </div>
                                <div className="header-option-detail">
                                    <FormattedMessage id="home-page-header.find-hospital-or-clinic" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="header-option-title">
                                    <a href="#"><b><FormattedMessage id="home-page-header.doctor" /></b></a>
                                </div>
                                <div className="header-option-detail">
                                    <FormattedMessage id="home-page-header.find-elite-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div className="header-option-title">
                                    <a href="#"><b><FormattedMessage id="home-page-header.examination-pack" /></b></a>
                                </div>
                                <div className="header-option-detail">
                                    <FormattedMessage id="home-page-header.general-examination" />
                                </div>
                            </div>
                        </div>
                        <div className="right-contents">
                            <div className="header-booking-section">
                                <i className="far fa-clock"></i>
                                <div className="header-right-section-title title-1"><FormattedMessage id="home-page-header.appointment" /></div>
                            </div>
                            <div className="header-support-section">
                                <i className="far fa-question-circle"></i>
                                <div className="header-right-section-title title-2"><FormattedMessage id="home-page-header.support" /></div>
                            </div>
                            <div className="header-user-account-section"
                                onClick={(isLoggedIn) => this.handleLoginForUser(this.props.isLoggedIn)}>
                                <i className="far fa-user"></i>
                                <div className="header-right-section-title title-3">
                                    {this.props.isLoggedIn ?
                                        userInfo.firstName
                                        :
                                        <FormattedMessage id="home-page-header.login" />
                                    }
                                </div>
                            </div>
                            <div className="header-user-language-option">
                                <div className={language === LANGUAGES.VI ? "header-user-nation-icon" : "header-user-nation-icon active"}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className="menu-between-header-and-banner">
                        <nav>
                            <ul id="home-top-navigator">
                                <li><FormattedMessage id="home-top-navigator.option-home" /></li>
                                <li><Link to={path.ALL_SPECIALTIES}  style={{ textDecoration: 'none' }}><i className="far fa-hospital nav-icon"></i><FormattedMessage id="home-top-navigator.option-specialty-exam" /></Link></li>
                                <li><i className="fas fa-phone-volume nav-icon"></i><FormattedMessage id="home-top-navigator.option-remote-exam" /></li>
                                <li><Link to={path.HEALTHCHECK}  style={{ textDecoration: 'none' }}><i className="fas fa-child nav-icon"></i><FormattedMessage id="home-top-navigator.option-general-exam" /></Link></li>
                                <li><i className="fas fa-vial nav-icon"></i><FormattedMessage id="home-top-navigator.option-medical-testing" /></li>
                                <li><FontAwesomeIcon icon={faHeartPulse} className="nav-icon fontawesome-icon" /><FormattedMessage id="home-top-navigator.option-mental-health" /></li>
                                {/* <li><i className="fas fa-tablets nav-icon"></i>Khám nha khoa</li> */}
                                <li><FontAwesomeIcon icon={faTooth} className="nav-icon fontawesome-icon" /><FormattedMessage id="home-top-navigator.option-dental-exam" /></li>

                                <div id="marker"></div>
                            </ul>
                        </nav>
                    </div>
                }
                {this.props.isShowBanner === true &&
                    <div className="home-header-banner-container">
                        <div className="search-area">
                            <div className="container">

                                <FormattedMessage id="home-banner.search-area-search-box-placeholder">
                                    {(placeholderText) => (
                                        <input
                                            type="text"
                                            placeholder={placeholderText}
                                        />
                                    )}
                                </FormattedMessage>
                                {/* câu lệnh bên dưới không thể cho <FormattedMessage vào được  */}
                                {/* <input type="text" placeholder="Tìm kiếm..."></input> */}
                                <div className="search"></div>
                                <div className="search-box-title"><FormattedMessage id="home-banner.search-area-search-box-title" /></div>
                                <div className="search-box-content"><FormattedMessage id="home-banner.search-area-search-box-content" /></div>

                                {/* <div className="spacing"></div> */}
                                <div className="quick-search-container">
                                    <div className="quick-search">
                                        <div className="quick-search-icon-1"><FontAwesomeIcon icon={faSuitcaseMedical} /></div>
                                        <div className="quick-search-content-1"><marquee><FormattedMessage id="home-banner.search-area-quick-search-content-1" /></marquee></div>
                                    </div>
                                    <div className="quick-search">
                                        <div className="quick-search-icon-2"><FontAwesomeIcon icon={faStethoscope} /></div>
                                        <div className="quick-search-content-2"><marquee><FormattedMessage id="home-banner.search-area-quick-search-content-2" /></marquee></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-page-banners"></div>
                    </div>
                }
                <div className="header-side-bar">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="side-bar-toggle">
                        <i className="fas fa-bars" id="btn"></i>
                        <i className="fas fa-times" id="cancel"></i>
                    </label>
                    <div className="sidebar">
                        <header><FormattedMessage id="side-bar.side-bar-menu" /></header>
                        {this.props.isLoggedIn && userInfo.roleId !== 'R3' &&
                            <a href={userInfo.roleId === 'R2' ? '/doctor/schedule-manage' : '/system/user-manage'}>
                                <i className="fas fa-screwdriver"></i>
                                <span><FormattedMessage id="side-bar.side-bar-item.managepage" /></span>
                            </a>
                        }
                        <a href="#">
                            <i className="fas fa-qrcode"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.homepage" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-book"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.handbook" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-handshake"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.cooperate" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-question"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.question" /></span>
                        </a>
                        <a href="#">
                            <i className="far fa-envelope"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.contact" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-sliders-h"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.service" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-link"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.term" /></span>
                        </a>
                        <a href="#">
                            <i className="fas fa-stream"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.regulation" /></span>
                        </a>
                        <a href="#">
                            <i className="far fa-question-circle"></i>
                            <span><FormattedMessage id="side-bar.side-bar-item.about-us" /></span>
                        </a>
                        <div className="home-page-side-bar-language-option">
                            <div className={language === LANGUAGES.VI ? "vietnamese-option active" : "vietnamese-option"} onClick={() => this.switchLanguageOfWebsite(LANGUAGES.VI)}></div>
                            <div className={language === LANGUAGES.EN ? "english-option active" : "english-option"} onClick={() => this.switchLanguageOfWebsite(LANGUAGES.EN)}></div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {

    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        switchLanguageOfWebsite: (language) => dispatch(switchLanguageOfWebsite(language)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageHeader));
