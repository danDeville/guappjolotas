// Base
import React, { useState } from "react"

// Components
import GuajolotasListar from '../components/GuajolotasListar'
import BedidasListar from '../components/BedidasListar'
import TamalesListar from '../components/TamalesListar'

//  Styles Utils
import { styled, useTheme } from '@mui/material/styles'

// Material UI
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// Styles
const StyleContentList = styled(SwipeableViews)(({ theme }) => ({
  padding: theme.spacing(0)
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const ProductTabs = () => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Box sx={{ width: '100%', margin: '32px 0px', padding: 0 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'transparent', boxShadow: 'none', }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Guajolotas" {...a11yProps(0)} />
          <Tab label="Bebidas" {...a11yProps(1)} />
          <Tab label="Tamales" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <StyleContentList
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ margin: '24px 0' }}
      >
        <div value={value} index={0} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <GuajolotasListar />
            </Grid>
          </Grid>
        </div>

        <div value={value} index={1} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <BedidasListar />
            </Grid>
          </Grid>
        </div>

        <div value={value} index={2} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TamalesListar />
            </Grid>
          </Grid>
        </div>
      </StyleContentList>
    </Box>
  )
}

export default ProductTabs
