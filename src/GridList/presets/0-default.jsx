import * as React from "react";
import GridList from "../GridList";
import GridListTile from "../../GridListTile/GridListTile";
import GridListTileBar from "../../GridListTileBar/GridListTileBar";
import Image from "../../Image/Image";

export default (
  <GridList cellHeight={160} cols={3} key="1">
    <GridListTile cols={1} key="1.1">
      <Image src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg" alt="Gdynia" key="1.1.1" objectFit="cover" width="100%" height="100%" />
      <GridListTileBar
        key="1.1.2"
        title="Gdynia"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
    <GridListTile cols={2} key="1.2">
      <Image src="http://uxpin.com/images/homepage/jobs/bg-gdansk.jpg" alt="Gdansk" key="1.2.1" objectFit="cover" width="100%" height="100%" />
      <GridListTileBar
        key="1.2.2"
        title="Gdansk"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
    <GridListTile cols={3} key="1.3">
      <Image key="1.3.1" src="http://uxpin.com/images/homepage/about-us/location-mountain-view.jpg" alt="Mountain View" objectFit="cover" width="100%" height="100%" />
      <GridListTileBar
        key="1.3.2"
        title="Mountain View"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
  </GridList>
);
