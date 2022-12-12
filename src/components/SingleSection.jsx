import React from 'react';
import { Grid } from '@mui/material';
import overFlowPic from '../images/Overlow.PNG';

const SingleSection = () => {
  return (
    <Grid container justifyContent="space-around" py="16px">
      <Grid xs={12} sm={6}>
        <img width="100%" height="100%" src={overFlowPic} />
      </Grid>
      <Grid xs={12} sm={6}>
        <h1 class="margin-small">OVERFLOW</h1>
        <h3 class="margin-small">NEW SINGLE OUT NOW</h3>
        <div class="row add-pad-top">
          <div class="col-6">
            <a
              target="_blank"
              href="https://www.facebook.com/MaddieInGoodCompany/"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/maddgoodco?igshid=NDA1YzNhOGU="
            >
              {' '}
              <i class="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@maddgoodco?_d=secCgYIASAHKAESPgo8u3dLujTQAWf5nXnPWatUwYuGbVYnYvEpt8e25%2F5MfcjvLcgFmn63U%2Fvt7tmxFTrJ83O9BS94jKBrq6rkGgA%3D&_r=1&checksum=5ba1eedec11abb483f333e0eea5f2741c6b12ceea9a083d12f2bf3d9a510d55a&language=en&sec_uid=MS4wLjABAAAAYrxWn7QGaIaX91b3u8y_nELOu9MgMf0J9NiRHoWgopCup63aLw3-0xntnUwnoE4D&sec_user_id=MS4wLjABAAAAGEVsD7uXmSF7gwH2D7MQ0RKva80tIwKJOuVSkHBAi8gOmcXi8lBuU8-duQou3RT2&share_app_id=1233&share_author_id=6921017642418488326&share_link_id=62A9B8E1-C404-447E-AE7F-F33339F41DB0&source=h5_m&tt_from=copy&u_code=dghfgm0j7ckbah&user_id=6919956403784745989&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
          <div class="col-6">
            <a
              class="margin-small"
              href="https://open.spotify.com/track/55WCXfPee6WawXDGvT0ZHK?si=b46eab78453f44fd"
            >
              <button class="btn btn-stream padding-button">
                <h5>DOWNLOAD/STREAM</h5>
              </button>
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SingleSection;
