import React from 'react';
import { Link } from '@mui/material';

const TikTokIcon = ({ color = '#000000' }) => {
	return (
		<Link
			target='_blank'
			href='https://www.tiktok.com/@maddgoodco?_d=secCgYIASAHKAESPgo8u3dLujTQAWf5nXnPWatUwYuGbVYnYvEpt8e25%2F5MfcjvLcgFmn63U%2Fvt7tmxFTrJ83O9BS94jKBrq6rkGgA%3D&_r=1&checksum=5ba1eedec11abb483f333e0eea5f2741c6b12ceea9a083d12f2bf3d9a510d55a&language=en&sec_uid=MS4wLjABAAAAYrxWn7QGaIaX91b3u8y_nELOu9MgMf0J9NiRHoWgopCup63aLw3-0xntnUwnoE4D&sec_user_id=MS4wLjABAAAAGEVsD7uXmSF7gwH2D7MQ0RKva80tIwKJOuVSkHBAi8gOmcXi8lBuU8-duQou3RT2&share_app_id=1233&share_author_id=6921017642418488326&share_link_id=62A9B8E1-C404-447E-AE7F-F33339F41DB0&source=h5_m&tt_from=copy&u_code=dghfgm0j7ckbah&user_id=6919956403784745989&utm_campaign=client_share&utm_medium=ios&utm_source=copy'
			mx='4px'
		>
			<svg
				fill={color}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 50 50'
				width='35px'
				height='100%'
			>
				<path d='M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z' />
			</svg>
		</Link>
	);
};

export default TikTokIcon;
