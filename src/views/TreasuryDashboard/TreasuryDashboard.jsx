import { useEffect, useState } from "react";
import { Paper, Grid, Typography, Box, Zoom, Container, useMediaQuery } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart/Chart.jsx";
import { trim, formatCurrency } from "../../helpers";
import {
  treasuryDataQuery,
  rebasesV1DataQuery,
  rebasesV2DataQuery,
  bulletpoints,
  tooltipItems,
  tooltipInfoMessages,
  itemType,
} from "./treasuryData.js";
import { useTheme } from "@material-ui/core/styles";
import "./treasury-dashboard.scss";
import apollo from "../../lib/apolloClient";
import InfoTooltip from "src/components/InfoTooltip/InfoTooltip.jsx";
import { allBondsMap } from "src/helpers/AllBonds";

function TreasuryDashboard() {
  const [data, setData] = useState(null);
  const [apy, setApy] = useState([]);
  const [runway, setRunway] = useState(null);
  const [staked, setStaked] = useState(null);
  const theme = useTheme();
  const smallerScreen = useMediaQuery("(max-width: 650px)");
  const verySmallScreen = useMediaQuery("(max-width: 379px)");

  // const marketPrice = useSelector(state => {
  //   return state.app.marketPrice;
  // });
  const marketPrice = 10;
  // const circSupply = useSelector(state => {
  //   return state.app.circSupply;
  // });
  const circSupply = 100;
  // const totalSupply = useSelector(state => {
  //   return state.app.totalSupply;
  // });
  const totalSupply = 1000;
  // const marketCap = useSelector(state => {
  //   return state.app.marketCap;
  // });
  const marketCap = 1000;
  // const currentIndex = useSelector(state => {
  //   return state.app.currentIndex;
  // });
  const currentIndex = 1;
  const rebase = useSelector(state => {
    return state.app.stakingRebase;
  });
  const backingPerGla = useSelector(state => {
    if (state.bonding.loading === false) {
      let tokenBalances = 0;
      for (const bond in allBondsMap) {
        if (state.bonding[bond]) {
          tokenBalances += state.bonding[bond].purchased;
        }
      }
      return tokenBalances / state.app.circSupply;
    }
  });

  // const wsGlaPrice = useSelector(state => {
  //   return state.app.marketPrice * state.app.currentIndex;
  // });
  const wsGlaPrice = 10;

  return (
    <div id="treasury-dashboard-view" className={`${smallerScreen && "smaller"} ${verySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: smallerScreen || verySmallScreen ? "0" : "3.3rem",
          paddingRight: smallerScreen || verySmallScreen ? "0" : "3.3rem",
        }}
      >
        <Box className={`hero-metrics`}>
          <Paper className="gla-card">
            <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
              <Box className="metric market">
                <Typography variant="h6" color="textSecondary">
                  Market Cap
                </Typography>
                <Typography variant="h5">
                  {marketCap && formatCurrency(marketCap, 0)}
                  {/* {!marketCap && <Skeleton type="text" />} */}
                </Typography>
              </Box>

              <Box className="metric price">
                <Typography variant="h6" color="textSecondary">
                  GLA Price
                </Typography>
                <Typography variant="h5">
                  {/* appleseed-fix */}
                  {marketPrice ? formatCurrency(marketPrice, 2) : <Skeleton type="text" />}
                </Typography>
              </Box>

              <Box className="metric wsoprice">
                <Typography variant="h6" color="textSecondary">
                  wsGLA Price
                  <InfoTooltip
                    message={
                      "wsGLA = sGLA * index\n\nThe price of wsGLA is equal to the price of GLA multiplied by the current index"
                    }
                  />
                </Typography>

                <Typography variant="h5">
                  {wsGlaPrice ? formatCurrency(wsGlaPrice, 2) : <Skeleton type="text" />}
                </Typography>
              </Box>

              <Box className="metric circ">
                <Typography variant="h6" color="textSecondary">
                  Circulating Supply (total)
                </Typography>
                <Typography variant="h5">
                  {circSupply && totalSupply ? (
                    parseInt(circSupply) + " / " + parseInt(totalSupply)
                  ) : (
                    <Skeleton type="text" />
                  )}
                </Typography>
              </Box>

              <Box className="metric bpo">
                <Typography variant="h6" color="textSecondary">
                  Backing per GLA
                </Typography>
                <Typography variant="h5">
                  {backingPerGla ? formatCurrency(backingPerGla, 2) : <Skeleton type="text" />}
                </Typography>
              </Box>

              <Box className="metric index">
                <Typography variant="h6" color="textSecondary">
                  Current Index
                  <InfoTooltip
                    message={
                      "The current index tracks the amount of sGLA accumulated since the beginning of staking. Basically, how much sGLA one would have if they staked and held a single GLA from day 1."
                    }
                  />
                </Typography>
                <Typography variant="h5">
                  {currentIndex ? trim(currentIndex, 2) + " sGLA" : <Skeleton type="text" />}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default TreasuryDashboard;
