import React, { Fragment } from 'react';

import Styles from '../styles/footer-styles';

export default () => {
	return (
		<Fragment>
			<style jsx>{Styles}</style>
			<footer className="footer">
				<div className="footer__container">
					<div>Fantasy Prem</div>
					<div>MSC Software Development Ltd</div>
				</div>
			</footer>
		</Fragment>
	)
}