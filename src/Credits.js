import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Credits = () => (
  <div className='credits' id='credits'>
    <div className='container row optional-row'>
      <div className='funding'>
        <h3><FormattedMessage id='credits.sponsors' defaultMessage='Sponsors' /></h3>
        <p><FormattedMessage id='credits.support_text' defaultMessage='Mastodon is free, open-source software. There is no advertising, monetizing, or venture capital. Your donations directly support full-time development of the project.' /></p>
        <a href='https://patreon.com/mastodon' className='cta button'><FormattedMessage id='credits.support_on_patreon' defaultMessage='Support on Patreon' /></a> <Link to='/sponsors' className='cta button alt'><FormattedMessage id='credits.view_sponsors' defaultMessage='View sponsors' /></Link>
      </div>

      <div className='branding'>
        <h3><FormattedMessage id='credits.branding' defaultMessage='Branding' /></h3>
        <p><FormattedMessage id='credits.branding_text' defaultMessage='Download logos, icons, and elephants' /></p>
        <a href='/press-kit.zip' className='cta button alt'><FormattedMessage id='credits.get_press_kit' defaultMessage='Get press kit' /></a>
      </div>
    </div>

    <div className='container color-scheme'>
      <h3><FormattedMessage id='credits.color_scheme' defaultMessage='Mastodon color scheme' /></h3>
      <div className='row'>
        <div className='color-swatch color-1'>#282c37</div>
        <div className='color-swatch color-2'>#9baec8</div>
        <div className='color-swatch color-3'>#d9e1e8</div>
        <div className='color-swatch color-4'>#2b90d9</div>
      </div>
    </div>
  </div>
);

export default Credits;
