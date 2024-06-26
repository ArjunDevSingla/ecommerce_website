import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Grid } from '@mui/material'

const AddDeliveryAddressForm = () => {
  return (
    <div>
        <Grid container spacing={4}>
            <Grid classname="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className='p-5 py-7 border-b cursor-pointer'>
                    <AddressCard/>
                </div>
                <Button sx={{mt:2}} size='large' variant='contained'>Deliver Here</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default AddDeliveryAddressForm